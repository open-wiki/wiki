import ArticleCard from '../../components/article-card/index'

export default function SearchResults({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export async function getServerSideProps({ query }) {
  //const router = useRouter()
  //const { input } = router.query
  //console.log(input)

  const { input } = query
  console.log(input)
  const inputs = input.split(' ')
  console.log(inputs)

  var i = 0
  var Finput = ''
  for (i = 0; i < inputs.length; i++) {
    Finput = Finput + 'Title_contains=' + inputs[i] + '&'
    console.log(inputs[i])
  }

  const res = await fetch(`http://localhost:1337/Articles/?${Finput}`) //(`http://localhost:1337/Articles/?Title_contains=${input}`)
  const articles = await res.json()
  console.log(Finput)
  //console.log(articles)

  if (!articles.length > 0) {
    return {
      notFound: true,
    }
  }
  return {
    props: { articles },
  }
}
