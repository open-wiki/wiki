import ArticleCard from '../../components/article-card/index'

export default function Home({ articles }) {
  return (
    <div>
      {articles
        ? articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        : 'Geen artikelen gevonden'}
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:5000/articles?')
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
