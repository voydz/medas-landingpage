import Link from 'next/link'
import {useDevice} from '../lib/device'
import Layout from '../components/layout'
import styles from '../styles/versions.module.scss'
import versions from '../versions.json'

// get all available versions
const {ios, android} = versions;

export default function Versions() {
  const {isIOS} = useDevice()

  return (
    <Layout>
      <h1>Alle Versionen</h1>

      <p>
        Hier findest du alle im Verteilerportal verfügbaren
        Versionen von KVKDash für deine Platform. Solltest du mit
        einer aktuellen Version Probleme haben, dann kannst du mit
        einer älteren Version weiterarbeiten, bis das Problem behoben wurde.
        Vorher solltest du allerdings KVKDash von deinem Telefon deinstallieren.
      </p>

      <p>
        Es wird nur die Platform angezeigt, für die ein Download im aktuellen Browser möglich ist.
        Bitte besuche diese Seite auf dem Gerät, auf dem du die App installieren möchtest und lade sie
        von dort aus herunter.
      </p>

      {isIOS ? (
        <VersionTable title="für iOS" versions={ios} />
      ) : (
        <VersionTable title="für Android" versions={android} />
      )}

      <p>
        <Link href="/"><a>&larr; Startseite</a></Link>
      </p>
    </Layout>
  )
}

function VersionTable({title, versions}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Datum</th>
          <th>Version</th>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>
        {versions.map((version, i) => <VersionRow key={i} {...version} />)}
      </tbody>
    </table>
  )
}

function VersionRow({build, version, date, download}) {
  return (
    <tr>
      <td>{date}</td>
      <td>
        {version}&nbsp;<span>(Build {build})</span>
      </td>
      <td>
        <a href={download}>Herunterladen</a>
      </td>
    </tr>
  );
}
