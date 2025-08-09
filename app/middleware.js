import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Define which routes need authentication
        const { pathname } = req.nextUrl
        
        // Public routes that don't need authentication
        const publicRoutes = ['/', '/login', '/api/auth', '/reset-password']
        
        if (publicRoutes.some(route => pathname.startsWith(route))) {
          return true
        }
        
        // Protected routes require a valid token
        return !!token
      },
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ]
}