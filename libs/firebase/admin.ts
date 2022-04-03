import * as admin from 'firebase-admin'
import type { ServiceAccount } from 'firebase-admin'

const cert: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
}

export const firebase =
  admin.apps.find((app) => app?.name === process.env.FIREBASE_PROJECT_ID) ??
  admin.initializeApp(
    {
      credential: admin.credential.cert(cert),
    },
    process.env.FIREBASE_PROJECT_ID
  )

export const firebaseAuth = firebase.auth()
