import Styles from './[id].module.css'
import Markdown from '../../components/markdown/Markdown'

const Article = ({ props }) => {
  return (
    <div className={Styles.article}>
      <h1 className={Styles.articleTitle}>{props.data.Title}</h1>
      <Markdown content={props.data.Paragraph} />
    </div>
  )
}

//standaart next.js functie om data op te halen
Article.getInitialProps = async (ctx) => {
  const query = ctx.query
  const res = await fetch(`http://localhost:5000/Articles/${query.id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

export default Article
