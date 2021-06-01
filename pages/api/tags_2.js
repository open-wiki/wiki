export default async function getTagID(tags) {
  const res = await fetch(`http://localhost:5000/Tags`)
  const ID = await res.json()

  console.log(ID)
  const list3 = ID.filter((tag) => tags.includes(tag.TagName))
  console.log(list3)
  const IDList = list3.map((tag) => tag.id.toString())
  console.log(IDList)

  return IDList
}

// //tags = tags[].split(",");
// console.log('tags na split: ' + tags[1])
// console.log('tags na split: ' + typeof tags[1])
//
// const ID = fetch(`http://localhost:5000/Tags`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Success:', data)
//         for (i=0;i<tags.length;i++) {
//           for (x=0;x<data.length;x++) {
//             if (data[x].TagName == tags[i]){
//               IDList.push('"' + data[x].id + '"')
//               console.log('match ' + data[x].id)
//               break
//             }
//             console.log('data index test: ' + data[x].TagName)
//             console.log('data index test2: ' + tags[i])
//             console.log('new idlist: ' + IDList)
//           }
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error)
//       })

// for (i=0;i<tags.length;i++) {
//   console.log('tags bij fetch: ' + tags[i])
//   const ID = fetch(`http://localhost:5000/Tags?_where[TagName]=${tags[i]}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Success:', data)
//       console.log('Success:', data[0].id)
//       IDList.push('"' + data[0].id + '"')
//       console.log('id List: ' + IDList)
//     })
//     .catch((error) => {
//       console.error('Error:', error)
//     })
//
//   console.log('return id: ' + i + ' = ' + ID)
//
// }
