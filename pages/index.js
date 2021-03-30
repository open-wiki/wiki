import Searchbar from '../components/searchbar/Searchbar'
import Styles from './index.module.css'
import ArticleCard from '../components/article-card'

export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.search}>
        <h1>Open Wiki</h1>
        <Searchbar />
      </div>
      <div className={Styles.recentArticles}>
        <h2>Recente artikelen</h2>
        <ArticleCard />
      </div>
    </div>
  )
}
