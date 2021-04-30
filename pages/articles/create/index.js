import NormEdit from '../../../components/markdown-editor/MarkdownEditor'
import Create_Article from '../../api/create'
import * as React from 'react'
import Styles from './create.module.css'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const [value, setValue] = React.useState('**Hello world!!!**')
  const [title, setTitle] = React.useState('title')
  const [setNewArticle] = React.useState()
  const sendDataToParent = (index) => {
    // the callback. Use a better name
    console.log(index)
    setValue(index)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const newArticleData = await Create_Article(title, value)
    router.push(`/articles/${newArticleData.id}`)
    setNewArticle(newArticleData)
  }
  return (
    <div className={Styles.createArticle}>
      <h2>Titel:</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <h2>Content: </h2>
        <NormEdit sendDataToParent={sendDataToParent} value={value} />
        <input type="submit" value="Submit" className={Styles.button} />
      </form>
    </div>
  )
}
