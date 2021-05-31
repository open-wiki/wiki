import NormEdit from '../../../../components/markdown-editor/MarkdownEditor'
import * as React from 'react'
import Styles from './edit.module.css'
import { useRouter } from 'next/router'
import Cookies from 'cookies'

export default function Edit({ data }) {
  const [value, setValue] = React.useState(data?.Paragraph)
  const [title, setTitle] = React.useState('title')
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`/api/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        Title: title,
        Paragraph: value,
        id: data?.id,
      }),
    }).then(() => router.push(`/articles/${data.id}`))
  }

  return (
    <div className={Styles.editArticle}>
      <h2>Titel:</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="title"
          defaultValue={data?.Title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <h2>Content: </h2>
        <NormEdit sendDataToParent={(index) => setValue(index)} value={value} />
        <input type="submit" value="Submit" className={Styles.button} />
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

  return {
    props: { data },
  }
}
