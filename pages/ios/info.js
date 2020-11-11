import Link from 'next/link'
import Layout from '../../components/layout'

export default function Info() {
  return (
    <Layout>
      <h1>Spezielle Anforderungen</h1>

      <p>
        Bevor du die KVKDash App für iOS herunterladen kannst,
        muss dein Endgerät beim Entwickler der App registriert werden.
      </p>

      <p>
        Um dies durchzuführen, kannst du über <Link href="/ios/contact"><a>dieses Formular</a></Link>&nbsp;
        deine <a href="http://whatsmyudid.com" target="_blank">Gerätekennung für Entwickler (UDID)</a> und
        deinen Namen mitteilen.
      </p>

      <h3>Warum existieren diese Vorkehrungen für iOS?</h3>

      <p>
        Apple macht strikte Vorgaben wie Apps verteilt werden dürfen. Vorrangig wird die Verteilung
        aus Datenschutz- und Sicherheitsgründen eingeschränkt. Um eine Weitergabe aus erster Hand zu
        gewährleisten, findet sie normalerweise über den AppStore statt.
      </p>

      <p>
        Da KVKDash abseits des AppStores verteilt wird, muss trotzdem gewährleistet sein, dass die
        Quelle vertrauenswürdig ist. In dem Moment, in dem dein Endgerät vom Entwickler registriert
        wurde, ist es in der Lage die Quelle zu verifizieren und erlaubt die Installation der App.
      </p>

      <p>
        <Link href="/ios/contact"><a>Registrierungsformular &rarr;</a></Link>
      </p>
      <p>
        <Link href="/"><a>&larr; Startseite</a></Link>
      </p>
    </Layout>
  );
}
