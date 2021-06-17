import NormEdit from '../../../../components/markdown-editor/MarkdownEditor'
import * as React from 'react'
import Styles from './edit.module.css'
import Cookies from 'cookies'
import ReactTagInput from '@pathofdev/react-tag-input'
import send from '../../../api/tags'
import getTagID from '../../../api/tags_2'
import '@pathofdev/react-tag-input/build/index.css'

export default function Edit({ data, allTags }) {
  const [value, setValue] = React.useState(data?.data.Paragraph)
  const [title, setTitle] = React.useState('title')
  const [tags, setTags] = React.useState(['example tag'])
  const [selectedFile, setSelectedFile] = React.useState()
  const [isFilePicked, setIsFilePicked] = React.useState(false)

  const sendDataToParent = (index) => {
    setValue(index)
  }

  const onImageChange = (event) => {
    console.log(event.target.files)
    setIsFilePicked(true)

    setSelectedFile(event.target.files[0])
    console.log(selectedFile)
  }

  const handleSubmission = async (event) => {
    event.preventDefault()

    var i
    var x
    var y

    for (i = 0; i < tags.length; i++) {
      y = 1
      for (x = 0; x < allTags.length; x++) {
        if (tags[i] == allTags[x].TagName) {
          y = 0
        }
      }
      if (y == 1) {
        send(tags[i])
      }
    }

    const IDList = await getTagID(tags)
    const postData = {
      Title: title,
      Paragraph: value,
      Tags: IDList,
    }
    const formData = new FormData()
    formData.append('files.Thumbnail', selectedFile)
    formData.append('data', JSON.stringify(postData))
    console.log([...formData])

    return fetch(`http://localhost:5000/Articles/${data.id}`, {
      method: 'PUT',
      body: formData,
    })
      .then((data) => {
        console.log('Succesfully uploaded: ', data)
      })
      .catch((error) => {
        console.log('Error: ', error.message)
      })
  }

  return (
    <div className={Styles.createArticle}>
      <form
        onSubmit={(event) => handleSubmission(event)}
        encType="multipart/form-data"
      >
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
          <div className={Styles.thumbnailPreview}>
            <img src={selectedFile ? URL.createObjectURL(selectedFile) : null} />
          </div>
          <div className={Styles.thumbnailBtnWrapper}>
            <button className={Styles.thumbnailButton}>
              <i className="material-icons md-24">add_circle</i>
              <span>Afbeelding toevoegen</span>
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
          <ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} />
          <input type="submit" value="Artikel aanpassen" className={Styles.button} />
        </div>
      </form>
    </div>
  )
}

export const getServerSideProps = async ({ req, res, query }) => {
  let jwt = false
  if (req) {
    const cookies = new Cookies(req, res)
    jwt = cookies.get('jwt')
    if (!jwt) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }
  }
  const response = await fetch(`http://localhost:5000/Articles/${query.id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
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

  const oke = await fetch(`http://localhost:5000/Tags`)
  const allTags = await oke.json()

  if (!allTags) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, allTags },
  }
}
