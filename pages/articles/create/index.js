import NormEdit from '../../../components/markdown-editor/MarkdownEditor'
/*import Create_Article from '../../api/create'*/
import * as React from 'react'
import Styles from './create.module.css'
/*import { useRouter } from 'next/router'*/

export default function Index() {
  /*const router = useRouter()*/
  const [value, setValue] = React.useState('**Hello world!!!**')
  const [title, setTitle] = React.useState('title')
  const [selectedFile, setSelectedFile] = React.useState()
  const [isFilePicked, setIsFilePicked] = React.useState(false)
  const postData = {
    Title: title,
  }
  const sendDataToParent = (index) => {
    setValue(index)
  }

  const onImageChange = (event) => {
    console.log(event.target.files)
    setIsFilePicked(true)

    setSelectedFile(event.target.files[0])
    console.log(selectedFile)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('Thumbnail', selectedFile)
    formData.append('data', JSON.stringify(postData))
    console.log([...formData])

    return fetch('http://localhost:5000/Articles', formData, {
      method: 'POST',
      body: formData,
    })
      .then((data) => {
        console.log('Succesfully uploaded: ', data)
        return data
      })
      .catch((error) => {
        console.log('Error: ', error.message)
      })
  }

  /*  const handleSubmit = async (event) => {
    event.preventDefault()
    const newArticleData = await Create_Article(title, value)
    console.log(newArticleData)
    router.push(`/articles/${newArticleData.id}`)
  }*/

  return (
    <div className={Styles.createArticle}>
      <form onSubmit={(event) => handleSubmission(event)}>
        <div className={Styles.articleText}>
          <input
            type="text"
            name="Title"
            placeholder="Titel"
            onChange={(event) => setTitle(event.target.value)}
          />
          <NormEdit sendDataToParent={sendDataToParent} value={value} />
        </div>
        <div className={Styles.articleCard}>
          <div>
            <div className={Styles.thumbnailPreview}></div>
            <div className={Styles.thumbnailBtnWrapper}>
              <button className={Styles.thumbnailButton}>
                Afbeelding toevoegen
              </button>
              <input type="file" name="Thumbnail" onChange={onImageChange} />
              {isFilePicked ? (
                <div>
                  <p>Filename: {selectedFile.name}</p>
                </div>
              ) : (
                <p>Select a file to show details</p>
              )}
            </div>
          </div>
          <input type="submit" value="Submit" className={Styles.button} />
        </div>
      </form>
    </div>
  )
}
