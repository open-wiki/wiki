import * as React from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import 'react-mde/lib/styles/css/react-mde-editor.css'
import 'react-mde/lib/styles/css/react-mde-toolbar.css'
import 'react-mde/lib/styles/css/react-mde-preview.css'
import 'react-mde/lib/styles/css/react-mde.css'
import showdownHighlight from 'showdown-highlight'
import 'highlight.js/styles/atom-one-dark.css'

let converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
  extensions: [showdownHighlight({ pre: true })],
})

function NormEdit({ sendDataToParent, value }) {
  const [selectedTab, setSelectedTab] = React.useState('write')
  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={sendDataToParent}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  )
}

export default NormEdit
