import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

// Disable body parser (needed for formidable)
export const config = {
  api: {
    bodyParser: false,
  },
};

// DB Config
const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'vectrium',
};

// Email Transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

// Upload Directory
const uploadDir = '/var/www/html/media/cv';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Convert Fetch API Request to Node.js IncomingMessage-like stream
function requestToNodeReq(req) {
  const reader = req.body?.getReader();
  const nodeReq = new Readable({
    async read() {
      if (!reader) {
        this.push(null);
        return;
      }
      try {
        let done, value;
        while (true) {
          ({ done, value } = await reader.read());
          if (done) {
            this.push(null);
            break;
          }
          this.push(Buffer.from(value));
        }
      } catch (err) {
        this.destroy(err);
      }
    }
  });

  // Add headers & method so formidable can read content-length, etc.
  nodeReq.headers = Object.fromEntries(req.headers);
  nodeReq.method = req.method;

  return nodeReq;
}

export async function POST(req) {
  try {
    // Create formidable form instance
    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
      filter: ({ mimetype }) => mimetype && mimetype.includes('pdf'),
    });

    // Convert web request to Node-like req
    const nodeReq = requestToNodeReq(req);

    // Parse form data
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(nodeReq, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    // Extract fields safely
    const formData = {
      firstname: Array.isArray(fields.firstname) ? fields.firstname[0] : fields.firstname,
      lastname: Array.isArray(fields.lastname) ? fields.lastname[0] : fields.lastname,
      email: Array.isArray(fields.email) ? fields.email[0] : fields.email,
      phone: Array.isArray(fields.phone) ? fields.phone[0] : fields.phone,
      portfolio: Array.isArray(fields.portfolio) ? fields.portfolio[0] : fields.portfolio,
      position: Array.isArray(fields.position) ? fields.position[0] : fields.position,
      duration: Array.isArray(fields.duration) ? fields.duration[0] : fields.duration,
      cover: Array.isArray(fields.cover) ? fields.cover[0] : fields.cover,
      applicationType: Array.isArray(fields.applicationType) ? fields.applicationType[0] : fields.applicationType,
    };

    // Handle resume file
    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;
    let resumeFilename = null;

    if (resumeFile) {
      const timestamp = Date.now();
      const originalName = resumeFile.originalFilename || 'resume.pdf';
      const extension = path.extname(originalName);
      resumeFilename = `${formData.firstname}_${formData.lastname}_${timestamp}${extension}`;
      const finalPath = path.join(uploadDir, resumeFilename);
      fs.renameSync(resumeFile.filepath, finalPath);
    }

    // Save to MySQL
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
      `INSERT INTO career (
        firstname, lastname, email, phone, portfolio, position, 
        duration, resume_filename, cover, application_type
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        formData.firstname,
        formData.lastname,
        formData.email,
        formData.phone || null,
        formData.portfolio || null,
        formData.position,
        formData.duration || null,
        resumeFilename,
        formData.cover || null,
        formData.applicationType,
      ]
    );
    await connection.end();

    // Email content
    const isInternship = formData.applicationType === 'internship';
    const emailSubject = `New ${isInternship ? 'Internship' : 'Job'} Application - ${formData.position}`;
    const emailBody = `
      <h2>New ${isInternship ? 'Internship' : 'Job'} Application Received</h2>
      <ul>
        <li><strong>Name:</strong> ${formData.firstname} ${formData.lastname}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
        <li><strong>Portfolio/LinkedIn:</strong> ${formData.portfolio || 'Not provided'}</li>
        <li><strong>Position:</strong> ${formData.position}</li>
        ${isInternship ? `<li><strong>Duration:</strong> ${formData.duration || 'Not specified'}</li>` : ''}
      </ul>
      ${formData.cover ? `<h3>Cover Letter:</h3><p>${formData.cover.replace(/\n/g, '<br>')}</p>` : ''}
      ${resumeFilename
        ? `<p>Resume: <a href="https://vectriumventure.com/media/cv/${resumeFilename}">${resumeFilename}</a></p>`
        : '<p>No resume uploaded</p>'}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'rayabhishek20112000@gmail.com',
      subject: emailSubject,
      html: emailBody,
      attachments: resumeFilename
        ? [{ filename: resumeFilename, path: path.join(uploadDir, resumeFilename) }]
        : [],
    });

    return new Response(
      JSON.stringify({
        message: 'Application submitted successfully!',
        applicationId: result.insertId,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Application submission error:', error);
    return new Response(
      JSON.stringify({
        message: 'Failed to submit application. Please try again.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
      { status: 500 }
    );
  }
}
