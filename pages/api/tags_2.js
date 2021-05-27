export default function send(tags) {
  console.log('tags: ' + tags)
  console.log('AAAAAAAAAAAAAAAA')
  const data = {
    TagName: tags[0],
  }

  return fetch('http://localhost:5000/Tags', {
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
}
