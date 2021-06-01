export default async function registerUser(req, res) {
  if (req.method === 'POST') {
    const response = await fetch(`http://localhost:5000/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })
    res.status(response.status).send()
  }
}
