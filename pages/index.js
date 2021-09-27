import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/home.module.scss'
import versions from '../versions.json'

// get latest versions
const ios = versions.ios[0];
const android = versions.android[0];

export default function Home() {
  return (
    <Layout>
      <p className={styles.text}>
        Um die App für iOS herunterladen zu können, folge bitte <Link href="/ios/info"><a>diesen Anweisungen</a></Link>.
      </p>

      <div className={styles.grid}>
        <a href={ios.download} className={styles.card}>
          <h3>iOS &rarr;</h3>
          <span className={styles.muted}>Wenn dein Endgerät registriert ist, kannst du hier klicken, um KVKDash für dein iPhone oder iPad herunterzuladen.</span>
          <p>
            Aktuelle Version: {ios.version}
            &nbsp;<span>(Build {ios.build})</span>
          </p>
          <span>vom {ios.date}</span>
        </a>

        <a href={android.download} className={styles.card}>
          <h3>Android &rarr;</h3>
          <span className={styles.muted}>Hier klicken, um KVKDash für dein Android Telefon oder Tablet herunterzuladen.</span>
          <p>Aktuelle Version: {android.version}
            &nbsp;<span>(Build {android.build})</span>
          </p>
          <span>vom {android.date}</span>
        </a>
      </div>

      <p>
        Du möchtest eine <Link href="/versions"><a>ältere Version</a></Link> herunterladen?
      </p>

      <p className={styles.footnote}>
        Derzeit ist KVKDash nur für kleine Bildschirme optimiert.
      </p>
    </Layout>
  )
}
