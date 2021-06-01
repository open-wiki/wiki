import NormEdit from '../../../../components/markdown-editor/MarkdownEditor'
import Edit_Article from '../../../api/edit'
import * as React from 'react'
import Styles from './edit.module.css'
import { useRouter } from 'next/router'

export default function Edit({ props }) {
  const router = useRouter()
  const [value, setValue] = React.useState(props.data.Paragraph)
  const [title, setTitle] = React.useState('title')
  const sendDataToParent = (index) => {
    // the callback. Use a better name
    console.log(index)
    setValue(index)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const editArticleData = await Edit_Article(title, value, props.data.id)
    router.push(`/articles/${editArticleData.id}`)
  }
  return (
    <div className={Styles.editArticle}>
      <h2>Titel:</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="title"
          defaultValue={props.data.Title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <h2>Content: </h2>
        <NormEdit sendDataToParent={sendDataToParent} value={value} />
        <input type="submit" value="Submit" className={Styles.button} />
      </form>
    </div>
  )
}

//standaart next.js functie om data op te halen
Edit.getInitialProps = async (ctx) => {
  const query = ctx.query
  const res = await fetch(`http://localhost:5000/Articles/${query.id}`)
  const data = await res.json()
  console.log(res)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
