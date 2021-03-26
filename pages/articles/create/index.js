import NormEdit from '../../../components/markdown-editor/MarkdownEditor'
import Link from 'next/link'
import Styles from './create.module.css'

export default function Index() {
  return (
    <div>
      <NormEdit></NormEdit>
      <Link href="/articles">
        <button className={Styles.button}>Submit</button>
      </Link>
    </div>
  )
}
