export default function Edit_Article(title, content, id) {
  const data = {
    Title: title,
    Paragraph: content,
    id: id,
  }

  return fetch(`http://localhost:1337/Articles/${data.id}`, {
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
