import NormEdit from '../../../../components/markdown-editor/MarkdownEditor'
import Edit_Article from '../../../api/edit'
import * as React from 'react'
import Styles from './edit.module.css'

export default function Edit({ props }) {
  const [value, setValue] = React.useState(props.data.Paragraph)
  const [title, setTitle] = React.useState('title')
  const [editArticle, setEditArticle] = React.useState()
  const sendDataToParent = (index) => {
    // the callback. Use a better name
    console.log(index)
    setValue(index)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const editArticleData = await Edit_Article(title, value, props.data.id)
    setEditArticle(editArticleData)
  }
  return (
    <div className={Styles.editArticle}>
      <h2>Titel:</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="title"
          placeholder={props.data.Title}
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
        {editArticle ? (
          <p>edited article with title: {editArticle.Title}</p>
        ) : (
          'Edit your article above'
        )}
      </div>
      <div
        style={{
          height: '30px',
        }}
      >
        {' '}
      </div>
      <div>
        <form>
          <input
            type="text"
            name="title"
            style={{
              width: '450px',
            }}
          />
        </form>
        <button className={Styles.tag}>hallo</button>
      </div>
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
