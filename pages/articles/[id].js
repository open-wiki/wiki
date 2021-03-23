const Article = ({ props, query }) => {
  console.log(query)
  console.log(props.data.Title)
  console.log(props.data.Paragraph)

  return (
    <div>
      <h1>{props.data.Title}</h1>
      <h1>{query.id}</h1>
      <h1>{props.data.Paragraph}</h1>
    </div>
  )
}

Article.getInitialProps = async (ctx) => {
  const query = ctx.query
  const res = await fetch(`http://localhost:1337/Articles/${query.id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
    query,
  }
}

export default Article
