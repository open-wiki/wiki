import Styles from './Topbar.module.css'
import IconButton from '../icon-button'
import Navbar from '../navbar/Navbar'

const Topbar = () => {
  return (
    <div className={Styles.topbar}>
      <Navbar />
      <div className={Styles.buttons}>
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
