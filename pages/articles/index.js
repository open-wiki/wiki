import ArticleCard from '../../components/article-card/index'

export default function Home({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/articles')
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
