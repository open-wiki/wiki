function Create_Article(title, content, tags) {
  console.log('working input: ' + title + ' and ' + content + 'en ids:' + tags)
  const data = {
    Title: title,
    Paragraph: content,
    Tags: tags,
  }
  // function handleErrors(response) {
  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   }
  //   return response;
  // }

  return fetch('http://localhost:5000/Articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/Json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((error) => {
      console.error('There was a problem with fetching:', error)
    })

  // .then(response => response.json)
  // .then(data => console.log('succes:', data))
  // .catch((error) => {
  //   console.error('Erdror:', error)
  // })

  // .then((response) => response.json())
  // .then((data) => {
  //   console.log(data)
  //   return data
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
}

export default Create_Article
