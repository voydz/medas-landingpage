import {useState} from 'react';
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/contact.module.css'

export default function Info() {
  const [name, setName] = useState('');
  const [udid, setUDID] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, udid
      }),
    });

    setSuccess(true);
  }

  return (
    <Layout>
      <h1>Registrierungsformular</h1>

      {success ? (
        <p>
          Deine Daten wurden entgegengenommen. Du erhälts eine Rückmeldung,
          sobald du KVKDash herunterladen und installieren kannst.
        </p>
      ) : (
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >

          <div className={styles.control}>
            <input
              className={styles.input}
              placeholder="Max Mustermann"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className={styles.control}>
            <input
              className={styles.input}
              placeholder="UDID"
              onChange={e => setUDID(e.target.value)}
              value={udid}
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
      )}

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
