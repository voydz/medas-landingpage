import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <p className={styles.text}>
        Um die App für iOS herunterladen zu können, folge bitte <Link href="/ios/info"><a>diesen Anweisungen</a></Link>.
      </p>

      <div className={styles.grid}>
        <a href="itms-services://?action=download-manifest&url=https://medas-landingpage.vercel.app/apps/manifest.plist" className={styles.card}>
          <h3>iOS &rarr;</h3>
          <span className={styles.muted}>Wenn dein Endgerät registriert ist, kannst du hier klicken um KVKDash für dein iPhone oder iPad herunterzuladen.</span>
          <p>Aktuelle Version: 1.0-r2</p>
          <span>vom 11.11.2020 22:00 Uhr</span>
        </a>

        <a href="/apps/KVKDash.apk" className={styles.card}>
          <h3>Android &rarr;</h3>
          <span className={styles.muted}>Hier klicken um KVKDash für dein Android Telefon oder Tablet herunterzuladen.</span>
          <p>Aktuelle Version: 1.0-r2</p>
          <span>vom 11.11.2020 22:00 Uhr</span>
        </a>
      </div>

      <p className={styles.footnote}>
        Derzeit ist KVKDash nur kleine Bildschirme optimiert.
      </p>
    </Layout>
  )
}
