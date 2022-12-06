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
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/logo/512px.png"
              alt="KVKDash"
              width={150}
              height={150}
            />
          </a>
        </Link>

        <h1 className={styles.title}>
          KVKDash
        </h1>

        <p className={styles.footer}>
          <Link href="/"><a>Startseite</a></Link>&nbsp;&middot;&nbsp;
          <Link href="mailto:Dash@kvk-halle.de"><a>Kontakt</a></Link>&nbsp;&middot;&nbsp;
          <Link href="/security"><a>Datenschutz</a></Link>&nbsp;&middot;&nbsp;
          <Link href="/imprint"><a>Impressum</a></Link>
        </p>

        {children}

        <p className={styles.footer}>
          <Link href="#top"><a>&uarr; Nach oben &uarr;</a></Link>
        </p>
      </main>
    </div>
  );
}
