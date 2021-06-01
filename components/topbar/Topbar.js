import Styles from './Topbar.module.css'
import Navbar from '../navbar/Navbar'
import Searchbar from '../searchbar/Searchbar'
import UserMenu from '../user-menu'

const Topbar = () => {
  return (
    <div className={Styles.topbar}>
      <Navbar />
      <Searchbar />
      <div className={Styles.topbarRight}>
        <UserMenu />
      </div>
    </div>
  )
}

export default Topbar
