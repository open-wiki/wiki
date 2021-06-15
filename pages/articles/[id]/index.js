import Styles from './index.module.css'
import Markdown from '../../../components/markdown/Markdown'
import ReactTagInput from '@pathofdev/react-tag-input'
import '@pathofdev/react-tag-input/build/index.css'

const ApiUrl = `http://localhost:5000`

const Article = ({ data }) => {
  const tags = data.Tags.map((d) => <p key={d.id}>{d.TagName}</p>)

  return (
    <div className={Styles.articleOverview}>
      <div className={Styles.article}>
        <h1 className={Styles.articleTitle}>{data.Title}</h1>
        <Markdown content={data.Paragraph} />
      </div>
      <div className={Styles.informationCard}>
        <div
          className={Styles.Thumbnail}
          style={{
            background: `url(${ApiUrl + data?.Thumbnail?.formats?.thumbnail?.url})`,
          }}
        ></div>
        <h1>{data.Title}</h1>
        <h3>Datum</h3>
        <p>{data.published_at.slice(0, 10)}</p>
        <h3>Tags</h3>
        {/*{data.map(data => <div>{data.Tags[0].TagName}</div>)}*/}
        <p className={Styles.tags}>
          <ReactTagInput tags={tags} readOnly={true} />
        </p>
        <button className={Styles.editButton}>
          Artikel aanpassen
          <i className="material-icons md-24">add_circle</i>
        </button>
      </div>
    </div>
  )
}

//standaart next.js functie om data op te halen
export const getServerSideProps = async ({ query }) => {
  const response = await fetch(`http://localhost:5000/Articles/${query.id}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  if (data.statusCode) {
    return {
      props: {
        statusCode: data.statusCode,
      },
    }
  }

  return {
    props: { data },
  }
}
export default Article
