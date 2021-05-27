import React from 'react'
import MarkdownView from 'react-showdown'
import Styles from './article.module.css'
import showdownHighlight from 'showdown-highlight'
import 'highlight.js/styles/atom-one-dark.css'

export default function Markdown({ content }) {
  const markdown = content
  return (
    <div className={Styles.markdown}>
      <MarkdownView
        extensions={showdownHighlight({ pre: true })}
        markdown={markdown}
        options={{ tables: true, emoji: true }}
      />
    </div>
  )
}
