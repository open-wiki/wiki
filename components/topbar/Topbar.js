import Styles from './Topbar.module.css'
import Navbar from '../navbar/Navbar'
import Searchbar from '../searchbar/Searchbar'
import UserMenu from '../user-menu'
import { useRouter } from 'next/router'

const Topbar = () => {
  const router = useRouter()
  return (
    <div
      className={`${Styles.topbar} ${
        router.pathname === '/' ? Styles.homeTopBar : ''
      }`}
    >
      <Navbar />
      {router.pathname === '/' ? '' : <Searchbar />}
      {/* <Searchbar /> */}
      <div className={Styles.topbarRight}>
        <UserMenu />
      </div>
    </div>
  )
}

export default Topbar
