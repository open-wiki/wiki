export default async function getTagID(tags) {
  const res = await fetch(`http://localhost:5000/Tags`)
  const ID = await res.json()

  const list3 = ID.filter((tag) => tags.includes(tag.TagName))
  const IDList = list3.map((tag) => tag.id.toString())

  return IDList
}
