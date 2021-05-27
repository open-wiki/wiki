import NormEdit from '../../../../components/markdown-editor/MarkdownEditor'
import Edit_Article from '../../../api/edit'
import * as React from 'react'
import Styles from './edit.module.css'
import Router from 'next/router'
import Cookies from 'cookies'

export default function Edit({ data }) {
  const [value, setValue] = React.useState(data?.Paragraph)
  const [title, setTitle] = React.useState('title')
  const [setEditArticle] = React.useState()
  const sendDataToParent = (index) => {
    setValue(index)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const editArticleData = await Edit_Article(title, value, data?.id)
    Router.push(`/articles/${editArticleData.id}`)
    setEditArticle(editArticleData)
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
        <NormEdit sendDataToParent={sendDataToParent} value={value} />
        <input type="submit" value="Submit" className={Styles.button} />
      </form>
    </div>
  )
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location })
    ctx.res.end()
  } else {
    Router.push(location)
  }
}

//https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries
//https://nextjs.org/docs/authentication
//https://www.youtube.com/watch?v=U2rRxzjruKg&t=25s
export const getServerSideProps = async (ctx) => {
  const query = ctx.query
  const response = await fetch(`http://localhost:5000/Articles/${query.id}`)
  const data = await response.json()

  if (ctx.req) {
    const cookies = new Cookies(ctx.req, ctx.res)

    const jwt = cookies.get('jwt')
    if (!jwt) {
      redirectUser(ctx, '/login')
    }
  }

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
