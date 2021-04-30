import Styles from './HomeTopbar.module.css'
import IconButton from '../icon-button'
import Navbar from '../navbar/Navbar'

const HomeTopbar = () => {
  return (
    <div className={Styles.topbar}>
      <Navbar />
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

export default HomeTopbar
