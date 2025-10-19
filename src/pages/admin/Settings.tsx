import React from 'react'

const AdminSettings: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Site Name</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="StartHub" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Support Email</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="support@example.com" />
          </div>
        </div>
        <div className="mt-6">
          <button className="px-4 py-2 bg-primary text-white rounded-md">Save</button>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings


