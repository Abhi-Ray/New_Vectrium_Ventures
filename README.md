# Complete Authentication System

A full-featured authentication system built with Next.js, NextAuth.js, and MySQL. Includes Google OAuth, email/password authentication, OTP login, and password reset functionality.

## Features

- ✅ **Google OAuth Integration** - Sign in with Google
- ✅ **Email/Password Authentication** - Traditional login
- ✅ **OTP Login** - One-time password via email
- ✅ **User Registration** - Create new accounts
- ✅ **Password Reset** - Forgot password functionality
- ✅ **MySQL Database** - Persistent user data
- ✅ **Beautiful UI** - Modern, responsive design
- ✅ **Security** - Password hashing, token expiration
- ✅ **Session Management** - JWT-based sessions

## Prerequisites

- Node.js 18+ 
- MySQL database
- Google OAuth credentials
- Email service (Gmail, SendGrid, etc.)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # Database Configuration
   MYSQL_HOST=localhost
   MYSQL_DATABASE=your_database_name
   MYSQL_USER=your_mysql_user
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

4. **Initialize the database**
   ```bash
   node lib/init-db.js
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## Setup Instructions

### 1. MySQL Database Setup

1. Create a MySQL database
2. Update the database credentials in your `.env.local` file
3. Run the database initialization script

### 2. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create an OAuth 2.0 Client ID
5. Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs
6. Copy the Client ID and Client Secret to your `.env.local` file

### 3. Email Service Setup

For Gmail:
1. Enable 2-factor authentication on your Google account
2. Generate an App Password
3. Use the App Password in `EMAIL_SERVER_PASSWORD`

For other providers, update the SMTP settings accordingly.

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/send-otp` - Send OTP for login
- `POST /api/auth/forgot-password` - Send password reset email
- `POST /api/auth/reset-password` - Reset password with token

### NextAuth Routes
- `GET/POST /api/auth/[...nextauth]` - NextAuth.js handler

## Pages

- `/` - Home page (redirects to login or dashboard)
- `/login` - Authentication page (login/register/OTP)
- `/dashboard` - User dashboard (protected)
- `/reset-password` - Password reset page

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255),
  image VARCHAR(500),
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### OTP Codes Table
```sql
CREATE TABLE otp_codes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  code VARCHAR(6) NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Password Reset Tokens Table
```sql
CREATE TABLE password_reset_tokens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Features in Detail

### 1. Google OAuth
- Seamless sign-in with Google account
- Automatic user creation for new Google users
- Profile picture and name from Google account

### 2. Email/Password Authentication
- Secure password hashing with bcrypt
- Email validation
- Session management with JWT

### 3. OTP Login
- 6-digit OTP sent via email
- 10-minute expiration
- Auto-focus input fields
- Resend functionality with countdown

### 4. Password Reset
- Secure token-based reset
- 1-hour expiration
- Email notifications
- Token verification

### 5. User Registration
- Form validation
- Password strength requirements
- Email uniqueness check
- Success feedback

## Security Features

- Password hashing with bcrypt
- JWT session management
- Token expiration
- Email verification
- Rate limiting (can be added)
- CSRF protection (built into NextAuth)

## UI/UX Features

- Modern, responsive design
- Dark theme with gradients
- Smooth animations
- Loading states
- Error handling
- Success feedback
- Mobile-friendly

## Development

### Running in Development
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

### Database Initialization
```bash
node lib/init-db.js
```

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check MySQL credentials in `.env.local`
   - Ensure MySQL service is running
   - Verify database exists

2. **Google OAuth Error**
   - Verify redirect URI in Google Console
   - Check Client ID and Secret
   - Ensure Google+ API is enabled

3. **Email Not Sending**
   - Check SMTP credentials
   - Verify email service settings
   - Check firewall/network settings

4. **NextAuth Secret Error**
   - Generate a new secret: `openssl rand -base64 32`
   - Update `NEXTAUTH_SECRET` in `.env.local`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
