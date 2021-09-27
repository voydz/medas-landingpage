import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/versions.module.scss'
import versions from '../versions.json'

// get all available versions
const {ios, android} = versions;

export default function Versions() {
  return (
    <Layout>
      <h1>Alle Versionen</h1>

      <p>
        Hier findest du alle im Verteilerportal verfügbaren
        Versionen von KVKDash. Solltest du mit einer aktuellen
        Version Probleme haben, dann kannst du mit einer älteren
        Version weiterarbeiten, bis das Problem behoben wurde.
        Vorher solltest du allerdings KVKDash von deinem
        Telefon deinstallieren.
      </p>

      <h3>iOS</h3>
      <VersionTable versions={ios} />

      <h3>Android</h3>
      <VersionTable versions={android} />

      <p>
        <Link href="/"><a>&larr; Startseite</a></Link>
      </p>
    </Layout>
  )
}

function VersionTable({versions}) {
  return (
    <table className={styles.table}>
      <thead>
        <th>Datum</th>
        <th>Version</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
        {versions.map(version => <VersionRow {...version} />)}
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
