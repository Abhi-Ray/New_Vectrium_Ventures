import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';
import { dbHelpers } from '@/lib/db-utils'
// Database connection
async function getDbConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'vectrium',
    });
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw new Error('Database connection failed');
  }
}

// Email transporter
function createEmailTransporter() {
  return nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_SERVER_USER, // your email
      pass: process.env.EMAIL_SERVER_PASSWORD, // your app password
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Save to database
    const connection = await getDbConnection();
    
    try {
      const insertQuery = `
        INSERT INTO contacts (name, email, phone, subject, message, created_at, status) 
        VALUES (?, ?, ?, ?, ?, NOW(), 'new')
      `;
      
      const [result] = await connection.execute(insertQuery, [
        name,
        email,
        phone || null,
        subject,
        message
      ]);

      console.log('Contact saved to database:', result.insertId);

      // Send email notification
      const transporter = createEmailTransporter();
      
      // Email to admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: 'rayabhishek20112000@gmail.com',
        subject: `New Contact Form Submission - Vectrium Ventures: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #1a1a1a; color: white; padding: 30px; border-radius: 10px;">
              <h2 style="color: #4f46e5; margin-bottom: 5px;">Vectrium Ventures</h2>
              <p style="color: #9ca3af; margin-bottom: 20px;">New Contact Form Submission</p>
              
              <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #e5e7eb; margin-bottom: 15px;">Contact Details:</h3>
                <p style="margin: 8px 0;"><strong style="color: #9ca3af;">Name:</strong> <span style="color: white;">${name}</span></p>
                <p style="margin: 8px 0;"><strong style="color: #9ca3af;">Email:</strong> <span style="color: white;">${email}</span></p>
                ${phone ? `<p style="margin: 8px 0;"><strong style="color: #9ca3af;">Phone:</strong> <span style="color: white;">${phone}</span></p>` : ''}
                <p style="margin: 8px 0;"><strong style="color: #9ca3af;">Subject:</strong> <span style="color: white;">${subject}</span></p>
              </div>
              
              <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px;">
                <h3 style="color: #e5e7eb; margin-bottom: 15px;">Message:</h3>
                <p style="color: white; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #374151;">
                <p style="color: #9ca3af; font-size: 14px;">
                  This message was sent from your Vectrium Ventures website contact form on ${new Date().toLocaleString()}.
                </p>
              </div>
            </div>
          </div>
        `,
      };
      
      // Auto-reply email to user
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Vectrium Ventures!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #1a1a1a; color: white; padding: 30px; border-radius: 10px;">
              <h2 style="color: #4f46e5; margin-bottom: 5px;">Vectrium Ventures</h2>
              <p style="color: #9ca3af; margin-bottom: 20px;">Thank You for Reaching Out!</p>
              
              <p style="color: #e5e7eb; line-height: 1.6; margin-bottom: 20px;">
                Hi ${name},
              </p>
              
              <p style="color: #e5e7eb; line-height: 1.6; margin-bottom: 20px;">
                Thank you for contacting <strong>Vectrium Ventures</strong>! We've received your message about "<strong>${subject}</strong>" and appreciate you taking the time to reach out.
              </p>
              
              <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #e5e7eb; margin-bottom: 15px;">What happens next?</h3>
                <ul style="color: #9ca3af; line-height: 1.6;">
                  <li>Our team will review your message within 24 hours</li>
                  <li>We'll get back to you via email with a detailed response</li>
                  <li>For urgent matters, we'll prioritize your request</li>
                </ul>
              </div>
              
              <p style="color: #e5e7eb; line-height: 1.6; margin-bottom: 20px;">
                In the meantime, feel free to explore our website or follow us on social media for updates and insights.
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
                <p style="color: #9ca3af; font-size: 14px;">
                  Best regards,<br>
                  The Vectrium Ventures Team
                </p>
              </div>
            </div>
          </div>
        `,
      };
      
      // Send both emails
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions)
      ]);

      console.log('Emails sent successfully');

      return NextResponse.json(
        { 
          success: true, 
          message: 'Message sent successfully! We\'ll get back to you soon.',
          id: result.insertId 
        },
        { status: 200 }
      );

    } finally {
      await connection.end();
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Return appropriate error message
    if (error.message === 'Database connection failed') {
      return NextResponse.json(
        { error: 'Database connection failed. Please try again later.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
