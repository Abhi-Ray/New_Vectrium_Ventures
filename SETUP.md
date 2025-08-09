# Complete Authentication System Setup Guide

This guide will help you set up the complete authentication system with Next.js and MySQL.

## 🚀 Quick Start

### 1. Database Setup

First, create your MySQL database and run the setup queries:

```sql
-- Run these queries in your MySQL client (phpMyAdmin, MySQL Workbench, or command line)

-- Create database
CREATE DATABASE IF NOT EXISTS auth_system;
USE auth_system;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255),
  image VARCHAR(500),
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email)
);

-- OTP codes table
CREATE TABLE IF NOT EXISTS otp_codes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  code VARCHAR(6) NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email_code (email, code),
  INDEX idx_expires (expires_at)
);

-- Password reset tokens table
CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_token (token),
  INDEX idx_expires (expires_at)
);

-- Sessions table (optional)
CREATE TABLE IF NOT EXISTS sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_token VARCHAR(255) UNIQUE NOT NULL,
  user_id INT NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_session_token (session_token),
  INDEX idx_user_id (user_id),
  INDEX idx_expires (expires_at)
);

-- Verification tokens table
CREATE TABLE IF NOT EXISTS verification_tokens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  identifier VARCHAR(255) NOT NULL,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_identifier_token (identifier, token),
  INDEX idx_expires (expires_at)
);
```

### 2. Environment Variables

Create a `.env.local` file in your project root:

```env
# Database Configuration
MYSQL_HOST=localhost
MYSQL_DATABASE=auth_system
MYSQL_USER=your_mysql_username
MYSQL_PASSWORD=your_mysql_password

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key_here

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email Configuration (for OTP and password reset)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_email@gmail.com
EMAIL_SERVER_PASSWORD=your_email_app_password
EMAIL_FROM=your_email@gmail.com
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Test Database Connection

Visit `http://localhost:3000/api/test-db` to test your database connection.

### 5. Run the Application

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 🔧 Configuration Details

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Add these redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `http://localhost:3000/api/auth/callback/google` (for production)
6. Copy Client ID and Client Secret to `.env.local`

### Email Service Setup

#### For Gmail:
1. Enable 2-factor authentication on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the App Password in `EMAIL_SERVER_PASSWORD`

#### For Other Providers:
Update the SMTP settings in `.env.local`:

```env
# For SendGrid
EMAIL_SERVER_HOST=smtp.sendgrid.net
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=apikey
EMAIL_SERVER_PASSWORD=your_sendgrid_api_key

# For Mailgun
EMAIL_SERVER_HOST=smtp.mailgun.org
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_mailgun_username
EMAIL_SERVER_PASSWORD=your_mailgun_password
```

### NextAuth Secret

Generate a secure secret:

```bash
openssl rand -base64 32
```

Or use this online generator: https://generate-secret.vercel.app/32

## 📁 Project Structure

```
vv/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.js    # NextAuth handler
│   │   │   ├── register/route.js         # User registration
│   │   │   ├── send-otp/route.js         # OTP sending
│   │   │   ├── forgot-password/route.js  # Password reset request
│   │   │   └── reset-password/route.js   # Password reset
│   │   └── test-db/route.js              # Database test
│   ├── login/page.js                     # Login/Register page
│   ├── dashboard/page.js                  # User dashboard
│   ├── reset-password/page.js            # Password reset page
│   └── page.js                           # Home page
├── lib/
│   ├── auth.js                           # NextAuth configuration
│   ├── db-utils.js                       # Database utilities
│   └── init-db.js                        # Database initialization
├── components/
│   └── common/                           # Common components
├── database-setup.sql                    # Database setup queries
└── .env.local                           # Environment variables
```

## 🔍 Testing the System

### 1. Test Database Connection
Visit: `http://localhost:3000/api/test-db`

Expected response:
```json
{
  "message": "Database connection successful",
  "test": 1,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### 2. Test Registration
Send POST request to `/api/auth/register`:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
```

### 3. Test OTP Sending
Send POST request to `/api/auth/send-otp`:
```json
{
  "email": "test@example.com"
}
```

### 4. Test Password Reset
Send POST request to `/api/auth/forgot-password`:
```json
{
  "email": "test@example.com"
}
```

## 🛠️ Troubleshooting

### Database Connection Issues

1. **Check MySQL service is running**
   ```bash
   # On macOS
   brew services start mysql
   
   # On Ubuntu
   sudo systemctl start mysql
   
   # On Windows
   net start mysql
   ```

2. **Verify credentials in `.env.local`**
   ```env
   MYSQL_HOST=localhost
   MYSQL_DATABASE=auth_system
   MYSQL_USER=root
   MYSQL_PASSWORD=your_password
   ```

3. **Test MySQL connection manually**
   ```bash
   mysql -u your_username -p
   ```

### Google OAuth Issues

1. **Check redirect URIs**
   - Must include: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://yourdomain.com/api/auth/callback/google`

2. **Verify API is enabled**
   - Google+ API must be enabled in Google Cloud Console

3. **Check credentials**
   - Client ID and Secret must be correct
   - No extra spaces or characters

### Email Issues

1. **Gmail App Password**
   - Must use App Password, not regular password
   - 2-factor authentication must be enabled

2. **Check SMTP settings**
   ```env
   EMAIL_SERVER_HOST=smtp.gmail.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=your_email@gmail.com
   EMAIL_SERVER_PASSWORD=your_app_password
   ```

3. **Test email manually**
   ```bash
   # Test with telnet
   telnet smtp.gmail.com 587
   ```

### NextAuth Issues

1. **Check NEXTAUTH_SECRET**
   - Must be a secure random string
   - At least 32 characters

2. **Verify NEXTAUTH_URL**
   - Must match your development/production URL
   - No trailing slash

3. **Check session configuration**
   - JWT strategy is used
   - 30-day max age

## 🚀 Deployment

### Vercel Deployment

1. **Set environment variables in Vercel dashboard**
2. **Update NEXTAUTH_URL to production URL**
3. **Update Google OAuth redirect URIs**
4. **Deploy with `vercel --prod`**

### Other Platforms

1. **Set all environment variables**
2. **Update NEXTAUTH_URL**
3. **Update Google OAuth redirect URIs**
4. **Build and deploy**

## 📝 API Reference

### Authentication Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/send-otp` | POST | Send OTP for login |
| `/api/auth/forgot-password` | POST | Send password reset email |
| `/api/auth/reset-password` | POST | Reset password with token |
| `/api/auth/[...nextauth]` | GET/POST | NextAuth.js handler |

### Database Tables

| Table | Purpose |
|-------|---------|
| `users` | User accounts and profiles |
| `otp_codes` | One-time passwords for login |
| `password_reset_tokens` | Password reset tokens |
| `sessions` | User sessions (optional) |
| `verification_tokens` | Email verification tokens |

## 🔒 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT session management
- ✅ Token expiration
- ✅ Email verification
- ✅ Rate limiting (can be added)
- ✅ CSRF protection (built into NextAuth)
- ✅ Secure password reset
- ✅ OTP expiration

## 🎨 UI Features

- ✅ Modern, responsive design
- ✅ Dark theme with gradients
- ✅ Smooth animations
- ✅ Loading states
- ✅ Error handling
- ✅ Success feedback
- ✅ Mobile-friendly
- ✅ Google OAuth integration
- ✅ OTP input with auto-focus
- ✅ Password strength validation

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Test database connection with `/api/test-db`
4. Check browser console for errors
5. Check server logs for detailed error messages

## 🎯 Next Steps

After setup, you can:

1. **Customize the UI** - Modify components in `/components`
2. **Add more providers** - Configure additional OAuth providers
3. **Add email verification** - Implement email verification flow
4. **Add rate limiting** - Implement API rate limiting
5. **Add user profiles** - Extend user profile functionality
6. **Add admin panel** - Create admin interface
7. **Add analytics** - Track user activity
8. **Add notifications** - Implement real-time notifications
