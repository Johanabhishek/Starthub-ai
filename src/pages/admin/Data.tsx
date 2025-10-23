import React, { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { auth } from '../../firebase-config'

const DEFAULT_COLLECTIONS = ['users', 'startups', 'investors']

const escapeCSV = (val: any): string => {
  if (val === null || val === undefined) return ''
  if (typeof val === 'object') {
    try {
      val = JSON.stringify(val)
    } catch {
      val = String(val)
    }
  }
  const s = String(val)
  if (s.includes('"') || s.includes(',') || s.includes('\n') || s.includes('\r')) {
    return `"${s.replace(/"/g, '""')}"`
  }
  return s
}

const docsToCSV = (docs: Array<Record<string, any>>): string => {
  const headersSet = new Set<string>()
  docs.forEach((d) => Object.keys(d).forEach((k) => headersSet.add(k)))
  const headers = Array.from(headersSet)
  const rows = docs.map((d) => headers.map((h) => escapeCSV(d[h] ?? '')).join(','))
  return [headers.join(','), ...rows].join('\r\n')
}

const downloadBlob = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

const exportCollection = async (db: any, collectionName: string) => {
  const colRef = collection(db, collectionName)
  const snap = await getDocs(colRef)
  const docs: Array<Record<string, any>> = []
  snap.forEach((doc) => {
    const data = doc.data() as Record<string, any>
    docs.push({ id: doc.id, ...data })
  })
  const csv = docsToCSV(docs)
  return { csv, count: docs.length }
}

const AdminDataPage: React.FC = () => {
  const [exporting, setExporting] = useState(false)
  const [lastResult, setLastResult] = useState<Record<string, number> | null>(null)

  const handleExport = async (collections: string[] = DEFAULT_COLLECTIONS) => {
    setExporting(true)
    setLastResult(null)
    try {
      const db = getFirestore()
      const results: Record<string, number> = {}
      for (const col of collections) {
        try {
          const { csv, count } = await exportCollection(db, col)
          if (!csv || csv.trim() === '') {
            results[col] = 0
            continue
          }
          downloadBlob(csv, `${col}.csv`)
          results[col] = count
        } catch (err) {
          console.error(`Export failed for collection ${col}:`, err)
          results[col] = -1
        }
      }
      setLastResult(results)
      // quick user feedback
      const successCount = Object.values(results).filter((n) => n > 0).length
      if (successCount > 0) {
        // eslint-disable-next-line no-alert
        alert(`Export complete. ${successCount} file(s) downloaded.`)
      } else {
        // eslint-disable-next-line no-alert
        alert('Export finished but no documents found in the requested collections.')
      }
    } catch (err) {
      console.error('Export error:', err)
      // eslint-disable-next-line no-alert
      alert('Export failed. Check console for details.')
    } finally {
      setExporting(false)
    }
  }

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
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Data</h1>

      <p className="text-sm text-gray-600 mb-4">
        Export admin data to CSV. This will fetch the configured Firestore collections and download one CSV per collection.
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => handleExport(DEFAULT_COLLECTIONS)}
          disabled={exporting}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50"
        >
          {exporting ? 'Exporting…' : 'Export to CSV (users, startups, investors)'}
        </button>

        <button
          onClick={() => handleExport(['users'])}
          disabled={exporting}
          className="px-3 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          {exporting ? 'Exporting…' : 'Export users CSV'}
        </button>

        <button
          onClick={() => handleExport(['startups'])}
          disabled={exporting}
          className="px-3 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          {exporting ? 'Exporting…' : 'Export startups CSV'}
        </button>
      </div>

      {lastResult && (
        <div className="mt-4 text-sm">
          <strong>Last export results:</strong>
          <ul className="mt-2 ml-4 list-disc">
            {Object.entries(lastResult).map(([col, count]) => (
              <li key={col}>
                {col}: {count === -1 ? 'error' : count}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AdminDataPage


