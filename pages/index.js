import Searchbar from '../components/searchbar/Searchbar'
import Styles from './index.module.css'
import ArticleCard from '../components/article-card'

export default function Home({ articles }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.search}>
        <h1>Open Wiki</h1>
        <Searchbar />
      </div>
      <div className={Styles.recentArticles}>
        <h2>Recente artikelen</h2>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'http://localhost:5000/articles?' +
      new URLSearchParams({
        _limit: '5',
      })
  )
  const articles = await res.json()

  if (!articles) {
    return {
      notFound: true,
    }
  }
  return {
    props: { articles },
  }
}
