import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/App.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ねこわん</title>
      </Head>

      <main className={styles.main}>
      </main>
    </div>
  )
}
