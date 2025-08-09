"use client"
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { 
  User, 
  Mail, 
  Calendar, 
  LogOut,
  Shield,
  Settings,
  Home
} from 'lucide-react'

const DashboardPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/login')
    return null
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' })
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-800/10 via-slate-700/10 to-slate-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-700/10 via-slate-600/10 to-slate-800/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
              Welcome to Dashboard
            </h1>
            <p className="text-slate-400">
              You have successfully logged in to your account
            </p>
          </div>

          {/* User info card */}
          <div className="bg-black/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              {session?.user?.image ? (
                <img 
                  src={session.user.image} 
                  alt={session.user.name}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {session?.user?.name || 'User'}
                </h2>
                <p className="text-slate-400 text-sm">
                  {session?.user?.email}
                </p>
              </div>
            </div>

            {/* User details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-lg">
                <Mail className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm text-white">{session?.user?.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-lg">
                <Calendar className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Member Since</p>
                  <p className="text-sm text-white">Today</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center space-x-2 p-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group">
              <Home className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-white">Home</span>
            </button>
            
            <button className="flex items-center justify-center space-x-2 p-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group">
              <Settings className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-white">Settings</span>
            </button>
            
            <button 
              onClick={handleSignOut}
              className="flex items-center justify-center space-x-2 p-4 bg-red-900/20 backdrop-blur-xl border border-red-500/30 rounded-lg hover:bg-red-800/20 transition-all duration-300 group"
            >
              <LogOut className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
              <span className="text-red-400 group-hover:text-red-300">Sign Out</span>
            </button>
          </div>

          {/* Security badge */}
          <div className="flex items-center justify-center space-x-2 mt-8 text-xs text-slate-500">
            <Shield className="w-3 h-3" />
            <span>Your session is secure</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default DashboardPage
