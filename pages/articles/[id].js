import Styles from './[id].module.css'

const Article = ({ props, query }) => {
  console.log(query)
  console.log(props.data.Title)
  console.log(props.data.Paragraph)

  return (
    <div className={Styles.article}>
      <h1>{props.data.Title}</h1>
      <h1>{query.id}</h1>
      <p>{props.data.Paragraph}</p>
    </div>
  )
}

//standaart next.js functie om data op te halen
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
