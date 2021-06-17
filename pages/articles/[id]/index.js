import Styles from './index.module.css'
import Markdown from '../../../components/markdown/Markdown'
import ReactTagInput from '@pathofdev/react-tag-input'
import '@pathofdev/react-tag-input/build/index.css'
import Link from 'next/link'

const ApiUrl = `http://localhost:5000`

const Article = ({ data }) => {
  const tags = data.Tags.map((tag) => <p key={tag.id}>{tag.TagName}</p>)

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
            background: `url(${ApiUrl + data?.Thumbnail?.formats?.small?.url})`,
          }}
        ></div>
        <h1>{data.Title}</h1>
        <h3>Datum</h3>
        <p>{data.published_at.slice(0, 10)}</p>
        <h3>Tags</h3>
        <p className={Styles.tags}>
          <ReactTagInput tags={tags} readOnly={true} />
        </p>
        <Link href={`/articles/${data.id}/edit`}>
          <button className={Styles.editButton}>
            Artikel aanpassen
            <i className="material-icons md-12">edit</i>
          </button>
        </Link>
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
