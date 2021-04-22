const Find_Article = (event) => {
  event.preventDefault()
  var input = event.target.input.value

  fetch(`http://localhost:1337/Articles/?Title_contains=${input}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })

  console.log('Success:')
  //console.log(event)
  console.log(event.target.input.value)
}

export default Find_Article
