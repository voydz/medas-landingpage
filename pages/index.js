import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KVKDash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image
            src="/logo/512px.png"
            alt="KVKDash"
            width={150}
            height={150}
          />
        </div>

        <h1 className={styles.title}>
          KVKDash
        </h1>

        <p className={styles.description}>
          Verteilerportal für Android und iOS
        </p>

        <div className={styles.grid}>
          <a href="/apps/current.ipa" className={styles.card}>
            <h3>iOS &rarr;</h3>
            <p>Lade KVKDash für dein iPhone oder iPad herunter.</p>
          </a>

          <a href="/apps/current.aab" className={styles.card}>
            <h3>Android &rarr;</h3>
            <p>Lade KVKDash für dein Android Telefon oder Tablet herunter.</p>
          </a>
        </div>

        <p className={styles.footnote}>
          Derzeit ist KVKDash nur für Telefone und kleinere Bildschirme optimiert.
        </p>
      </main>
    </div>
  )
}
