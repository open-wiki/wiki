import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function notFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <div>
      <h1>Ooopppssss......</h1>
      <h2>Deze pagina kan niet gevonden worden</h2>
      <p>
        Wacht 5 seconden of klik{' '}
        <Link href="/">
          <a>hier</a>
        </Link>{' '}
        om naar de homepage te gaan.
      </p>
    </div>
  )
}
