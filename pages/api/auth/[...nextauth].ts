import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { firebaseAuth } from '@/libs/firebase/admin'

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        token: {},
      },
      async authorize(credentials, _) {
        if (credentials && credentials.token) {
          try {
            const decodedToken = await firebaseAuth.verifyIdToken(credentials.token)
            return decodedToken
          } catch (error) {
            console.error(error)
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = user
      }
      return token
    },
  },
})
