import React, { useEffect, useState } from 'react'
import { collection, getCountFromServer, query, where } from 'firebase/firestore'
import { db } from '../../firebase-config'

const AdminDashboard: React.FC = () => {
  const [usersCount, setUsersCount] = useState<number | null>(null)
  const [startupsCount, setStartupsCount] = useState<number | null>(null)
  const [investorsCount, setInvestorsCount] = useState<number | null>(null)

  useEffect(() => {
    const load = async () => {
      const usersQ = collection(db, 'users')
      const startupsQ = collection(db, 'startups')
      const investorsQ = query(collection(db, 'users'), where('userType', '==', 'investor'))

      const [usersAgg, startupsAgg, investorsAgg] = await Promise.all([
        getCountFromServer(usersQ),
        getCountFromServer(startupsQ),
        getCountFromServer(investorsQ),
      ])

      setUsersCount(usersAgg.data().count)
      setStartupsCount(startupsAgg.data().count)
      setInvestorsCount(investorsAgg.data().count)
    }
    load().catch(() => {
      setUsersCount(0)
      setStartupsCount(0)
      setInvestorsCount(0)
    })
  }, [])

  const renderValue = (v: number | null) => (v === null ? '—' : v.toLocaleString())

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow border">
          <div className="text-gray-500 text-sm">Total Users</div>
          <div className="text-3xl font-semibold">{renderValue(usersCount)}</div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border">
          <div className="text-gray-500 text-sm">Startups</div>
          <div className="text-3xl font-semibold">{renderValue(startupsCount)}</div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border">
          <div className="text-gray-500 text-sm">Investors</div>
          <div className="text-3xl font-semibold">{renderValue(investorsCount)}</div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard


