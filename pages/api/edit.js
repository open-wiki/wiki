export default function Edit_Article(title, content, id) {
  const data = {
    Title: title,
    Paragraph: content,
    id: id,
  }

  return fetch(`http://localhost:5000/Articles/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/Json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

Edit_Article.getInitialProps = async (ctx) => {
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
