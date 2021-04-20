import Searchbar from '../../components/searchbar/Searchbar'
import Styles from './index.module.css'
import IconButton from '../../components/icon-button'
import ArticleCard from '../../components/article-card'

export default function SearchResults() {
  return (
    <div className={Styles.container}>
      <div className={Styles.search}>
        <h1>Open WAKA</h1>
        <Searchbar />
        <IconButton icon={'add_circle'} content={'Nieuw artikel'} />
      </div>
      <ArticleCard />
    </div>
  )
}
