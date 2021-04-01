function Create_Article(title, content) {
  const data = {
    Title: title,
    Paragraph: content,
  }

  return fetch('http://localhost:5000/Articles', {
    method: 'POST',
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

export default Create_Article
