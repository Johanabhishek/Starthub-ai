import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { isCurrentUserAdmin } from '../../lib/utils'

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(auth.currentUser)
  const [loading, setLoading] = useState<boolean>(true)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (current) => {
      setUser(current)
      if (!current) {
        setIsAdmin(false)
        setLoading(false)
        return
      }
      try {
        const admin = await isCurrentUserAdmin()
        setIsAdmin(admin)
      } finally {
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
      </div>
    )
  }

  if (!user) return <Navigate to="/signin" replace />
  if (!isAdmin) return <Navigate to="/" replace />

  return <>{children}</>
}

export default AdminRoute


