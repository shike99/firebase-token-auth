import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { signInWithCustomToken } from 'firebase/auth'
import { Spinner } from 'css.gg/icons/tsx/Spinner'
import { AuthCallbackResponse } from '@/pages/api/auth_callback'
import { fetchJson } from '@/libs/apiClient'
import { auth } from '@/libs/firebase/web'

const AuthCallback: NextPage = () => {
  const { asPath, push } = useRouter()

  useEffect(() => {
    ;(async () => {
      const [_, params] = asPath.split('#')
      if (!params) {
        push({ pathname: '/' })
        return
      }

      const fragments = new URLSearchParams(params)
      const tokenType = fragments.get('token_type')
      const accessToken = fragments.get('access_token')
      if (!(tokenType && accessToken)) {
        push({ pathname: '/' })
        return
      }

      const response = await fetchJson<AuthCallbackResponse>('/api/auth_callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokenType,
          accessToken,
        }),
      })
      if ('error' in response) {
        push({ pathname: '/' })
        return
      }

      try {
        // FIXME: failed at 'signInWithCustomToken'
        const { user } = await signInWithCustomToken(auth, response.token)
        const token = await user.getIdToken(true)
        await signIn('credentials', { token, callbackUrl: '/' })
      } catch (error) {
        console.error(error)
        push({ pathname: '/' })
      }
    })()
  }, [])

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner />
      <p className="ml-4">Now authenticating...</p>
    </div>
  )
}

export default AuthCallback
