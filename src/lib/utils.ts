import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Admin role utilities
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase-config'

export async function getCurrentUserRole(): Promise<string | null> {
  const user = auth.currentUser
  if (!user) return null
  const userDocRef = doc(db, 'users', user.uid)
  const snap = await getDoc(userDocRef)
  const data = snap.exists() ? (snap.data() as { role?: string }) : null
  return data?.role ?? null
}

export async function isCurrentUserAdmin(): Promise<boolean> {
  const role = await getCurrentUserRole()
  return role === 'admin'
}