import NormEdit from '../../../components/markdown-editor/MarkdownEditor'
import Create_Article from '../../api/create'
import * as React from 'react'
import Styles from '../../../build/server/pages/articles/create'

export default function Index() {
  const [value, setValue] = React.useState('**Hello world!!!**')
  const [title, setTitle] = React.useState('title')
  const sendDataToParent = (index) => {
    // the callback. Use a better name
    console.log(index)
    setValue(index)
  }
  const handleSubmit = (event) => {
    Create_Article(title, value)
    event.preventDefault()
    console.log(title, value)
  }
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <NormEdit sendDataToParent={sendDataToParent} value={value} />
        <input type="submit" value="Submit" className={Styles.button} />
      </form>
    </div>
  )
}
