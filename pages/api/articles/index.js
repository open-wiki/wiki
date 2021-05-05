export default async function getAllArticles(req, res) {
  if (req.method === 'GET') {
    const articles = await fetch(`http://localhost:1337/articles`)
    const data = await articles.json()
    res.json({
      message: 'success',
      data: data,
    })
  } else {
    res.json({ message: 'method not allowed' })
    res.status(405)
  }
}
