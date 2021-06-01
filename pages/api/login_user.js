function Login_User(identifier, password) {
  const data = {
    identifier: identifier,
    password: password,
  }

  return fetch('http://localhost:5000/auth/local', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
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
      return data
    })
    .catch((error) => {
      console.error('There was a problem with fetching:', error)
    })
}

export default Login_User
