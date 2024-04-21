import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>KVKDash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/" className={styles.logo}>

          <Image
            src="/logo/512px.png"
            alt="KVKDash"
            width={150}
            height={150}
          />

        </Link>

        <h1 className={styles.title}>
          KVKDash
        </h1>

        <p className={styles.footer}>
          <Link href="/">Startseite</Link>&nbsp;&middot;&nbsp;
          <Link href="mailto:Dash@kvk-halle.de">Kontakt</Link>&nbsp;&middot;&nbsp;
          <Link href="/security">Datenschutz</Link>&nbsp;&middot;&nbsp;
          <Link href="/imprint">Impressum</Link>
        </p>

        {children}

        <p className={styles.footer}>
          <Link href="#top">&uarr; Nach oben &uarr;</Link>
        </p>
      </main>
    </div>
  );
}
