import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, limit } from 'firebase/firestore'
import { db } from '../../firebase-config'

type UserRow = {
  id: string
  email?: string
  role?: string
}

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<UserRow[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const load = async () => {
      try {
        const q = query(collection(db, 'users'), limit(50))
        const snap = await getDocs(q)
        const rows = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }))
        setUsers(rows)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      {loading ? (
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow border">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="px-4 py-3">UID</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b last:border-0">
                  <td className="px-4 py-3 font-mono text-xs">{u.id}</td>
                  <td className="px-4 py-3">{u.email ?? '—'}</td>
                  <td className="px-4 py-3">{u.role ?? 'user'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AdminUsers


