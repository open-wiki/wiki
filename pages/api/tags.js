// export default function checkTags(tags, allTags) {
//   var filteredTags = []
//   var i
//   var x
//
//   for (i = 0; i < tags.length; i++) {
//     console.log('big loop')
//     var y = 0
//     for (x = 0; x < allTags.length; x++) {
//       if (tags[i] != allTags[x].TagName) {
//         console.log('compairison = ' + tags[i] + '--' + allTags[x].TagName)
//         y = y + 1
//         console.log('TAG+1: '+ y)
//       }
//       }
//     if (y == allTags.length) {
//       console.log('ifcheck: ' + y + '--' + allTags.length)
//       filteredTags.push(tags[i]);
//     }
//
//   }
//   console.log('filteredTags: ' + filteredTags)
//   return filteredTags
// }
//
// export function sendTags(tags, allTags, checkTags) {
//   console.log('push tags: ' + checkTags)
//   console.log('AAAAAAAAAAAAAAAA')
//   const data = {
//     TagName: checkTags,
//   }
//
//   return fetch('http://localhost:5000/Tags', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/Json',
//     },
//     body: JSON.stringify(data),
//   })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok')
//         }
//         return response.json()
//       })
//       .then((data) => {
//         console.log(data)
//         return data
//       })
//       .catch((error) => {
//         console.error('There was a problem with fetching:', error)
//       })
// }
//
// /*
// function getTagID() {
//
// } */
