import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { User } from 'css.gg/icons/tsx/User'
import styles from './Header.module.css'

type Props = {}

const Header: React.VFC<Props & ReactComponent.Props> = ({ className = '' }) => {
  const { data: session } = useSession()

  return (
    <header className={`navbar bg-accent text-accent-content ${className}`}>
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost h-full">
            <h1 className={`ml-2 text-xl font-bold md:text-3xl ${styles.logo}`}>Firebase sample</h1>
          </a>
        </Link>
      </div>
      <div className="flex-none">
        {session && (
          <div className="dropdown dropdown-end">
            <button className="avatar btn btn-ghost btn-circle">
              <div className="flex w-12 items-center justify-center rounded-full">
                <User />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="men-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 text-base-content shadow"
            >
              <li>
                <button onClick={() => signOut()}>Sign out</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
