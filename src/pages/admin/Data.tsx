import React from 'react'
import { getAuth } from 'firebase/auth'

const AdminData: React.FC = () => {
  const handleExportUsers = async () => {
    const user = getAuth().currentUser
    if (!user) return
    const token = await user.getIdToken()
    const base = `https://us-central1-${import.meta.env.VITE_FIREBASE_PROJECT_ID || 'starthub-866a1'}.cloudfunctions.net`
    const url = `${base}/adminExportUsersCsv`
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
    if (!res.ok) {
      alert('Export failed')
      return
    }
    const blob = await res.blob()
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'users.csv'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Data Management</h1>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-lg font-semibold mb-2">Seed/Reset Demo Data</h2>
          <button className="px-4 py-2 bg-primary text-white rounded-md">Run Seed</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-lg font-semibold mb-2">Export Users (CSV)</h2>
          <button onClick={handleExportUsers} className="px-4 py-2 bg-gray-900 text-white rounded-md">Export Users</button>
        </div>
      </div>
    </div>
  )
}

export default AdminData


