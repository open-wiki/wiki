export default function send(tag) {
  const data = {
    TagName: tag,
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
