import Link from 'next/link'
import IconButton from '../icon-button'
import { isUserLoggedIn } from '../../pages/index'

const UserMenu = (ctx) => {
  //   let isLoggedIn = false
  //   // const jwt = cookie.get('jwt')
  //   const { jwt } = nextCookies(ctx)
  //   // const jwt = false
  //   if (jwt) {
  //     isLoggedIn = true
  //   }
  const handleSignOut = () => {
    document.cookie = `jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
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
          <a href="#" onClick={handleSignOut}>
            log uit
          </a>
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
