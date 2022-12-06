import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <Layout>
      <div className={styles.block}>
        <h1>Impressum</h1>
        <h2 id="m46">Diensteanbieter</h2>
        <p>
          Felix Rudat<br />
          Beuditzstraße 87D<br />
          06667 Weißenfels<br />
          Deutschland
        </p>

        <h2 id="m56">Kontaktmöglichkeiten</h2>
        <p>
          E-Mail-Adresse: <a href="mailto:felix.rudat@hotmail.de">felix.rudat@hotmail.de</a>
        </p>
      </div>
    </Layout>
  )
}
