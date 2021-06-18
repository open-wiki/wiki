import Link from 'next/link'
import IconButton from '../icon-button'
import { isUserLoggedIn } from '../../pages/index'
import Router from 'next/router'
import Styles from './UserMenu.module.css'

const UserMenu = (ctx) => {
  const handleSignOut = () => {
    document.cookie = `jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
    Router.reload()
  }
  const isLoggedIn = isUserLoggedIn(ctx)
  return (
    <>
      {isLoggedIn ? (
        <div
          className={Styles.userMenu}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <IconButton
            icon={'add_circle'}
            content={'Nieuw artikel'}
            href={'/articles/create'}
          />
          <button className={Styles.logoutBtn} onClick={handleSignOut}>
            log uit
          </button>
        </div>
      ) : (
        <div>
          <Link href="/login">Registreren / Login</Link>
        </div>
      )}
    </>
  )
}

export default UserMenu
