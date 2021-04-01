import React from 'react'
import MarkdownView from 'react-showdown'
import Styles from './article.module.css'

export default function Markdown({ content }) {
  const markdown = content
  console.log(content)
  return (
    <div className={Styles.markdown}>
      <MarkdownView markdown={markdown} options={{ tables: true, emoji: true }} />
    </div>
  )
}
