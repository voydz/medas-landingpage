import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
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
          Verteilerportal für iOS und Android
        </p>

        {children}
      </main>
    </div>
  );
}
