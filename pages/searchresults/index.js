import ArticleCard from '../../components/article-card/index'

export default function SearchResults({ articles }) {
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

export async function getServerSideProps({ query }) {
  //const router = useRouter()
  //const { input } = router.query
  //console.log(input)

  const { input } = query
  const inputs = input.split(' ')

  var i = 0
  var Finput = ''
  for (i = 0; i < inputs.length; i++) {
    Finput = Finput + 'Title_contains=' + inputs[i] + '&'
  }
  try {
    const res = await fetch(`http://localhost:5000/Articles/?${Finput}`) //(`http://localhost:5000/Articles/?Title_contains=${input}`)
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
