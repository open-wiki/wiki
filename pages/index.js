import Searchbar from '../components/searchbar/Searchbar'
import Styles from './index.module.css'

export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.search}>
        <h1>Open Wiki</h1>
        <Searchbar />
      </div>
    </div>
  )
}
