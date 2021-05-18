export default function checkTags(tags, allTags) {
  console.log(tags)
  console.log('alltags' + allTags)
  var i
  var x

  for (i = 0; i < tags.length; i++) {
    for (x = 0; x < allTags.length; x++) {
      if (tags[i] == allTags[x]) {
        tags.splice(i, 1)
        break
      }
    }
  }
  return tags
}

/*
function sendTags() {

}

function getTagID() {

} */
