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
        <meta name="robots" content="index,follow" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

        <meta name="author" content="Felix Rudat" />
        <meta name="language" content="DE" />

        <meta name="description" content="Diese App fungiert als Adressbuch für klinische Ansprechpartner, ermöglicht die Suche und das Teilen von Kontaktdaten, und die Datenaktualisierung erfolgt ausschließlich durch den Import einer spezifischen Excel-Tabelle, ohne Cloud- oder Internetverbindung." />
        <meta name="keywords" content="KVK, Adressbuch, klinische Ansprechpartner, Suche, Teilen von Kontaktdaten, Datenaktualisierung, Excel-Tabelle, Offline, KVKDash" />
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
