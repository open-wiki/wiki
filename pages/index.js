import Searchbar from '../components/searchbar/Searchbar'
import Styles from './index.module.css'
import ArticleCard from '../components/article-card'
import Image from 'next/image'

export default function Home({ articles }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.homepageLogo}>
        <Image
          src={'/logo.png'}
          alt={'open wiki logo'}
          width={400}
          height={115}
          priority
        />
      </div>
      <div className={Styles.search}>
        <Searchbar height={'48px'} />
      </div>
      <div className={Styles.recentArticles}>
        <h2>Recente artikelen</h2>
        {articles
          ? articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          : 'Geen artikelen gevonden'}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      'http://localhost:5000/articles?' +
        new URLSearchParams({
          _limit: '3',
        })
    )
    const articles = await res.json()
    return {
      props: { articles },
    }
  } catch {
    return {
      props: {},
    }
  }
}
