import Cookies from 'cookies'

export default async function editArticle(req, res) {
  if (req.method === 'POST') {
    const cookies = new Cookies(req, res)
    const jwt = cookies.get('jwt')
    return new Promise((resolve) => {
      fetch(`http://localhost:5000/Articles/${req.body.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(req.body),
      })
        .then((response) => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Cache-Control', 'max-age=180000')
          res.end(JSON.stringify(response))
        })
        .catch((error) => {
          res.json(error)
          res.status(405).end()
          return resolve()
        })
    })
  }
}
