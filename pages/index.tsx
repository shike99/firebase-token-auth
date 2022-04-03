import type { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-xl font-bold">Test Application</h2>
          <p className="py-6">This application is firebase token authentication sample.</p>
          {session ? (
            <button className="btn btn-secondary" onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <Link href={{ pathname: '/auth/callback', hash: 'token_type=test&access_token=test' }}>
              <a className="btn btn-primary">Sign in</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
