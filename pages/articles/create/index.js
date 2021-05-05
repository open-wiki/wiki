import NormEdit from '../../../components/markdown-editor/MarkdownEditor'
import Create_Article from '../../api/create'
import * as React from 'react'
import Styles from './create.module.css'

export default function Index() {
  const [value, setValue] = React.useState('**Hello world!!!**')
  const [title, setTitle] = React.useState('title')
  const [newArticle, setNewArticle] = React.useState()
  const sendDataToParent = (index) => {
    console.log(index)
    setValue(index)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const newArticleData = await Create_Article(title, value)
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
      <div
        style={{
          background: 'antiquewhite',
          height: '50px',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        {newArticle ? (
          <p>created article with title: {newArticle.Title}</p>
        ) : (
          'create an article above'
        )}
      </div>
    </div>
  )
}
