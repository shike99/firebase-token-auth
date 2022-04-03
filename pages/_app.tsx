import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SessionProvider, useSession } from 'next-auth/react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { onAuthStateChanged } from 'firebase/auth'
import '@/libs/firebase/init'
import '@/styles/globals.css'
import { auth } from '@/libs/firebase/web'
import { userState } from '@/atoms/user'
import Layout from '@/components/Layout/Layout'

function AppInit() {
  const { data: session, status } = useSession()
  const { route } = useRouter()
  const [user, setUser] = useRecoilState(userState)

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        if (!user) {
          setUser({ ...firebaseUser })
        }
      } else {
        console.log('unauthenticated')
      }
    })
  }, [])

  useEffect(() => {
    if (status === 'loading' || route.startsWith('/auth')) return

    if (!session) {
      // const queries = {
      //   client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
      //   redirect_uri: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI,
      //   response_type: 'token',
      //   scope: 'identify+email+guilds',
      // }
      // const queryParam = Object.entries(queries)
      //   .map(([key, value]) => `${key}=${value}`)
      //   .join('&')
      // window.location.assign(`https://discord.com/api/oauth2/authorize?${queryParam}`)
    }
  }, [session, status, route])

  return null
}

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <AppInit />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </RecoilRoot>
  )
}

export default App
