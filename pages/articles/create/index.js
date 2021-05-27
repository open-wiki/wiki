import NormEdit from '../../../components/markdown-editor/MarkdownEditor'
import Create_Article from '../../api/create'
//import checkTags from '../../api/tags'
//import sendTags from '../../api/tags'
//import getTagID from '../../api/tags'
import * as React from 'react'
import Styles from './create.module.css'
import ReactTagInput from '@pathofdev/react-tag-input'
import '@pathofdev/react-tag-input/build/index.css'
import send from '../../api/tags_2'

export default function Index(/* { props }*/) {
  const [value, setValue] = React.useState('**Hello world!!!**')
  const [title, setTitle] = React.useState('title')
  const [tags, setTags] = React.useState(['example tag'])
  const [newArticle, setNewArticle] = React.useState()
  const sendDataToParent = (index) => {
    console.log(index)
    setValue(index)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    /*
    console.log(props.allTags.length)
    const allTags = props.allTags
    const o = sendTags(tags, allTags, checkTags)
    console.log(o)
    //console.log('sendTags: ' + sendTags(tags, allTags, checkTags))
    */

    send(tags)
    const newArticleData = await Create_Article(title, value, tags)
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
      <div
        style={{
          height: '30px',
        }}
      >
        {' '}
      </div>

      <ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} />
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch(`http://localhost:5000/Tags`)
  const allTags = await res.json()
  console.log('initialprops: ' + res)

  if (!allTags) {
    return {
      notFound: true,
    }
  }

  return {
    props: { allTags },
  }
}
