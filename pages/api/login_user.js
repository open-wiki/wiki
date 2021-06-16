export default async function Login_User(req, res) {
  return new Promise((resolve) => {
    fetch('http://localhost:5000/auth/local', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/Json',
      },
      body: JSON.stringify(req.body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Cache-Control', 'max-age=180000')
        res.end(JSON.stringify(data))
      })
      .catch((error) => {
        res.status(405).end(error)
        return resolve()
      })
  })
}
