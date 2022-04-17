import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ねこわん</title>
      </Head>

      <main className={styles.main}>
        <Image src="/img/app.png" width="1133" height="744" />
      </main>
    </div>
  )
}
