import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { getDoc, doc, getFirestore } from 'firebase/firestore'

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

      setLoading(true)
      try {
        const db = getFirestore()
        // 1) Check Firestore users collection for role/isAdmin
        try {
          const userDoc = await getDoc(doc(db, 'users', current.uid))
          if (userDoc.exists()) {
            const data = userDoc.data() as any
            if (data?.role === 'admin' || data?.isAdmin === true) {
              setIsAdmin(true)
              return
            }
          }
        } catch (e) {
          // continue to other checks if Firestore read fails
          console.error('Firestore user role check failed:', e)
        }

        // 2) Check Firebase custom claims as fallback
        try {
          const idTokenResult = await current.getIdTokenResult()
          if (idTokenResult?.claims?.admin) {
            setIsAdmin(true)
            return
          }
        } catch (e) {
          console.error('Token claims check failed:', e)
        }

        // default to non-admin
        setIsAdmin(false)
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


