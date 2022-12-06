import Link from 'next/link'
import {useDevice} from '../lib/device'
import Layout from '../components/layout'
import styles from '../styles/home.module.scss'
import versions from '../versions.json'

// get latest versions
const ios = versions.ios[0];
const android = versions.android[0];

export default function Home() {
  const {isIOS} = useDevice()

  return (
    <Layout>
      <p>
        Diese App ist eine Art Adressbuch für klinische Ansprechpartner und weiterer Kontaktdaten die ein KVK für ihre Tätigkeit nutzt.
        Über eine Suche können Ansprechpartner nach Indikation und Fachgebiet schnell gefunden werden. Einzelne Datensätze können auf Inhalte geprüft werden. Über die Webverlinkung kann die Homepage der Fachabteilung geöffnet werden. Es ist möglich über die Datensätze Telefonnummern anzuwählen, die Route zur Adresse über einen Routenplaner zu öffnen oder eine Mail an einen Ansprechpartner zu senden.
        Die Teilen Funktion ermöglicht Teile von selektierten Datensätze an den Fragesteller per Mailapp, WhatsApp etc. zu versenden.
        Insbesondere wenn man nicht ständig im Homeoffice ist, unterstützt und erleichtert die App dabei, Anfragen schnell und unkompliziert beantworten zu können.
      </p>
      <p>
        Die Daten werden ausschließlich über eine separate Excel-Tabelle importiert, die von einem zuständigen Bearbeiter des KVK zur Verfügung gestellt werden muss. Sie dient "nicht" dazu Adresssätze in der App zu erstellen oder zu bearbeiten.
      </p>
      <p>
        Die Daten werden "nicht" über eine Cloud oder sonstige externe Internetverbindungen gehostet. Müssen Datensätze aktualisiert werden, kann dies ausschließlich über einen neuen Import der Exceltabelle geschehen.
        Die App benötigt eine "bestimmte" Excel Datentabelle mit einem bestimmten Schema, die zunächst angefordert werden muss. Nutze dazu in der App im Bereich Einstellungen die Kontaktanfrage. Sie wird "NUR" KVK Mitarbeitern zur Verfügung gestellt.
      </p>

      <div className={styles.grid}>
        {isIOS ? (
          <a href={ios.download} className={styles.card}>
            <h3>iOS &rarr;</h3>
            <span className={styles.muted}>Wenn dein Endgerät registriert ist, kannst du hier klicken, um KVKDash für dein iPhone oder iPad herunterzuladen.</span>
            <p>
              Aktuelle Version: {ios.version}
              &nbsp;<span>(Build {ios.build})</span>
            </p>
            <span>vom {ios.date}</span>
          </a>
        ) : (
          <a href={android.download} className={styles.card}>
            <h3>Android &rarr;</h3>
            <span className={styles.muted}>Hier klicken, um KVKDash für dein Android Telefon oder Tablet herunterzuladen.</span>
            <p>Aktuelle Version: {android.version}
              &nbsp;<span>(Build {android.build})</span>
            </p>
            <span>vom {android.date}</span>
          </a>
        )}
      </div>

      <p>
        Es wird nur die Platform angezeigt, für die ein Download im aktuellen Browser möglich ist.
        Bitte besuche diese Seite auf dem Gerät, auf dem du die App installieren möchtest und lade sie
        von dort aus herunter.
      </p>
    </Layout>
  )
}
