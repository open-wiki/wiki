import Styles from './Topbar.module.css'
import IconButton from '../icon-button'
import Navbar from '../navbar/Navbar'
import Searchbar from '../searchbar/Searchbar'

const Topbar = () => {
  return (
    <div className={Styles.topbar}>
      <Navbar />
      <Searchbar />
      <div className={Styles.topbarRight}>
        <IconButton
          icon={'add_circle'}
          content={'Nieuw artikel'}
          href={'/articles/create'}
        />
      </div>
    </div>
  )
}

export default Topbar
