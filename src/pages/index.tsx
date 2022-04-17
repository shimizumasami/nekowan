import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ねこわん</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image src="/img/home_title.png" width="640" height="250" alt="ねこわん" />
        </h1>

        <div className={styles.container}>
          <div className={styles.neko}>
            <Image src="/img/home_neko.png" width="240" height="240" alt="ねこ" />
          </div>

          <div className={styles.buttons}>
            <a href="/app">
              <Image src="/img/home_btn_start.png" width="290" height="150" alt="スタート" />
            </a>
            <a href="/etc">
              <Image src="/img/home_btn_etc.png" width="290" height="150" alt="いろいろ" />
            </a>
          </div>

          <div className={styles.wan}>
            <Image src="/img/home_wan.png" width="240" height="240" alt="わん" />
          </div>
        </div>
      </main>
    </div>
  )
}
