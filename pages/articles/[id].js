import Styles from './[id].module.css'
import Markdown from '../../components/markdown/Markdown'
import IconButton from '../../components/icon-button'

const Article = ({ props }) => {
  return (
    <div>
      <div className={Styles.article}>
        <h1 className={Styles.articleTitle}>{props.data.Title}</h1>
        <Markdown content={props.data.Paragraph} />
      </div>
      <IconButton
        icon={'add_circle'}
        content={'Artikel aanpassen'}
        href={'/articles/update'}
      />
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
    props: { data },
  }
}

export default Article
