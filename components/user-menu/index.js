import Link from 'next/link'
import IconButton from '../icon-button'
import { isUserLoggedIn } from '../../pages/index'
import Router from 'next/router'

const UserMenu = (ctx) => {
  const handleSignOut = () => {
    document.cookie = `jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
    Router.reload()
  }
  const isLoggedIn = isUserLoggedIn(ctx)
  return (
    <>
      {isLoggedIn ? (
        <div>
          <IconButton
            icon={'add_circle'}
            content={'Nieuw artikel'}
            href={'/articles/create'}
          />
          <button onClick={handleSignOut}>log uit</button>
        </div>
      ) : (
        <div>
          <Link href="/login">Registreren</Link>
          <Link href="/login">Login</Link>
        </div>
      )}
    </>
  )
}

export default UserMenu
