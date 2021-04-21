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

export async function getServerSideProps() {
  try {
    const res = await fetch(
      'http://localhost:5000/articles?' +
        new URLSearchParams({
          _limit: '3',
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
  } catch (error) {
    console.log(error)
    return {}
  }
}
