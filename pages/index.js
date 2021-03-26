import Searchbar from '../components/searchbar/Searchbar'
import Styles from './index.module.css'
import IconButton from '../components/icon-button'

export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.search}>
        <h1>Open Wiki</h1>
        <Searchbar />
        <IconButton content={'Nieuw artikel'} />
      </div>
    </div>
  )
}
