import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/contact.module.css'

export default function Info() {
  return (
    <Layout>
      <h1>Registrierungsformular</h1>

      <form
        className={styles.form}
        method="post"
        action="/api/contact"
      >

        <div className={styles.control}>
          <input
            className={styles.input}
            name="name"
            placeholder="Max Mustermann"
          />
        </div>

        <div className={styles.control}>
          <input
            className={styles.input}
            name="udid"
            placeholder="UDID"
          />
          <span className={styles.hint}>
            <a href="http://whatsmyudid.com" target="_blank">Wo finde ich meine Gerätekennung für Entwickler (UDID)?</a>
          </span>
        </div>

        <div className={styles.control}>
          <button
            className={styles.button}
            type="submit"
          >
            Absenden
          </button>
        </div>

      </form>

      <div className={styles.control}>
        <p>
          <Link href="/ios/info"><a>&larr; Infos zu iOS</a></Link>
        </p>
        <p>
          <Link href="/"><a>&larr; Startseite</a></Link>
        </p>
      </div>
    </Layout>
  );
}
