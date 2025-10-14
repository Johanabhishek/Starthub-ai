import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin</h1>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900'}>Dashboard</NavLink>
          <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900'}>Users</NavLink>
          <NavLink to="/admin/data" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900'}>Data</NavLink>
          <NavLink to="/admin/settings" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900'}>Settings</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default AdminLayout


