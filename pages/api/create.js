function Create_Article(title, content) {
  const data = {
    Title: title,
    Paragraph: content,
  }

  fetch('http://localhost:1337/Articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/Json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

export default Create_Article
