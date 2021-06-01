import Cookies from 'cookies'

export default async function editArticle(req, res) {
  if (req.method === 'POST') {
    const cookies = new Cookies(req, res)
    const jwt = cookies.get('jwt')
    const response = await fetch(`http://localhost:5000/Articles/${req.body.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(req.body),
    })
    res.status(response.status).send()
  }
}
