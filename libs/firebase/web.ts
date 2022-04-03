import { getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'
import { getPerformance } from 'firebase/performance'

export const app = getApp(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)
export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app, `gs://${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`)
export const analytics = process.env.NODE_ENV === 'production' ? getAnalytics(app) : null
export const performance = process.env.NODE_ENV === 'production' ? getPerformance(app) : null
