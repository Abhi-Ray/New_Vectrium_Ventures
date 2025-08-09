import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { dbHelpers } from './db-utils'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        loginType: { label: 'Login Type', type: 'text' }
      },
      async authorize(credentials) {
        if (!credentials?.email) return null
        
        try {
          // Find user by email
          const user = await dbHelpers.findUserByEmail(credentials.email)
          
          if (!user) return null
          
          // Handle OTP login
          if (credentials.loginType === 'otp') {
            const otpCode = await dbHelpers.findValidOTP(credentials.email, credentials.password)
            
            if (otpCode) {
              // Mark OTP as verified
              await dbHelpers.markOTPAsVerified(otpCode.id)
              
              return {
                id: user.id,
                email: user.email,
                name: user.name,
                image: user.image
              }
            }
            return null
          }
          
          // Handle password login
          if (user.password && credentials.password) {
            const isValidPassword = await bcrypt.compare(
              credentials.password,
              user.password
            )
            
            if (isValidPassword) {
              return {
                id: user.id,
                email: user.email,
                name: user.name,
                image: user.image
              }
            }
          }
          
          return null
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        try {
          console.log('Google sign-in attempt for:', user.email);
          
          // Check if user exists
          const existingUser = await dbHelpers.findUserByEmail(user.email)
          
          if (!existingUser) {
            console.log('Creating new user for:', user.email);
            // Create new user
            await dbHelpers.createUser({
              email: user.email,
              name: user.name,
              image: user.image,
              provider: 'google'
            })
            console.log('User created successfully for:', user.email);
          } else {
            console.log('Existing user found:', user.email);
          }
          
          return true
        } catch (error) {
          console.error('Sign in error for', user.email, ':', error);
          console.error('Error stack:', error.stack);
          // Return true to allow sign-in even if database operations fail
          // You can change this to false if you want to prevent sign-in on DB errors
          return true
        }
      }
      
      return true
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
      }
      return session
    }
  }
})