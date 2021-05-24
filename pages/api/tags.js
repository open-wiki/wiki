export default function checkTags(tags, allTags) {
  // tags= tags[0]
  // allTags = allTags[0]
  //console.log('tags: ' + tags)
  //console.log(allTags)
  let filteredTags = tags
  var i
  var x

  for (i = 0; i < tags.length; i++) {
    //console.log(i)
    //console.log(tags[i])
    for (x = 0; x < allTags.length; x++) {
      //console.log(x)
      //console.log(allTags[x].TagName)
      if (tags[i] == allTags[x].TagName) {
        filteredTags.splice(i, 1)
        //console.log(filteredTags)
      }
    }
  }
  return filteredTags
}

export function sendTags(tags, allTags, checkTags) {
  console.log('push tags: ' + checkTags)
  const data = {
    Tags: checkTags,
  }

  return fetch('http://localhost:5000/Tags', {
    method: 'POST',
    headers: {
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
      console.log(data)
      return data
    })
    .catch((error) => {
      console.error('There was a problem with fetching:', error)
    })
}

/*
function getTagID() {

} */
