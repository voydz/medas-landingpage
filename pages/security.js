import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <Layout>
      <div className={styles.block}>
        <h1>Datenschutzerklärung</h1>
        <h2 id="m14">Einleitung</h2>
        <p>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten
          (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten.
          Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im
          Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen
          sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot“).
        </p>

        <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
        <p>Stand: 5. Dezember 2022</p>

        <h2>Inhaltsübersicht</h2>
        <ul class="index">
          <li><a class="index-link" href="#m14">Einleitung</a></li>
          <li><a class="index-link" href="#m3">Verantwortlicher</a></li>
          <li><a class="index-link" href="#mOverview">Übersicht der Verarbeitungen</a></li>
          <li><a class="index-link" href="#m13">Maßgebliche Rechtsgrundlagen</a></li>
          <li><a class="index-link" href="#m27">Sicherheitsmaßnahmen</a></li>
          <li><a class="index-link" href="#m12">Löschung von Daten</a></li>
          <li><a class="index-link" href="#m15">Änderung und Aktualisierung der Datenschutzerklärung</a></li>
          <li><a class="index-link" href="#m10">Rechte der betroffenen Personen</a></li>
          <li><a class="index-link" href="#m42">Begriffsdefinitionen</a></li>
        </ul>

        <h2 id="m3">Verantwortlicher</h2>
        <p>
          Felix Rudat<br />
          Victor-Klemperer-Straße 2<br />
          06118 Halle (Saale)<br />
          <a href="mailto:felix.rudat@hotmail.de">felix.rudat@hotmail.de</a>
        </p>

        <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen
          und verweist auf die betroffenen Personen.
        </p>

        <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
        <p>
          Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene
          Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben
          in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
          maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
        </p>
        <p>
          Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen zum Datenschutz
          in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der
          Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf
          Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten,
          zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling.
          Des Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die Begründung,
          Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten. Ferner können Landesdatenschutzgesetze
          der einzelnen Bundesländer zur Anwendung gelangen.
        </p>

        <h2 id="m27">Sicherheitsmaßnahmen</h2>
        <p>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art,
          des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der
          Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes
          Schutzniveau zu gewährleisten.
        </p>
        <p>
          Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
          und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit
          und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen
          auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von
          Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
        </p>

        <h2 id="m12">Löschung von Daten</h2>
        <p>
          Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen
          widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).
          Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt.
          D.h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt
          werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.
        </p>
        <p>
          Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.
        </p>

        <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
        <p>
          Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen
          der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits
          (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
        </p>
        <p>
          Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die
          Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
        </p>

        <h2 id="m10">Rechte der betroffenen Personen</h2>
        <p>
          Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
        </p>
        <ul>
          <li>
            <strong>Widerspruchsrecht:</strong>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die
              Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
              Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
              personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen
              die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch
              für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.

          </li>
          <li>
            <strong>Widerrufsrecht bei Einwilligungen:</strong>
            Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
          </li>
          <li>
            <strong>Auskunftsrecht:</strong>
            Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet
            werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
          </li>
          <li>
            <strong>Recht auf Berichtigung:</strong>
            Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung
            der Sie betreffenden unrichtigen Daten zu verlangen.
          </li>
          <li>
            <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong>
            Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw.
            alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
          </li>
          <li>
            <strong>Recht auf Datenübertragbarkeit:</strong>
            Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
            gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
          </li>
          <li>
            <strong>Beschwerde bei Aufsichtsbehörde:</strong>
            Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde,
            insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der
            Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
          </li>
        </ul>

        <h2 id="m42">Begriffsdefinitionen</h2>
        <p>
          In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind dem Gesetz
          entnommen und vor allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind verbindlich. Die nachfolgenden Erläuterungen sollen dagegen vor allem
          dem Verständnis dienen. Die Begriffe sind alphabetisch sortiert.
        </p>
        <ul class="glossary">
          <li>
            <strong>Personenbezogene Daten:</strong>
            "Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person“)
            beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
            zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die
            Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
          </li>
          <li>
            <strong>Verantwortlicher:</strong>
            Als "Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die
            Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
          </li>
          <li>
            <strong>Verarbeitung:</strong>
            "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.
            Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.
          </li>
        </ul>

        <p class="seal">
          <a href="https://datenschutz-generator.de/" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow">
            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
          </a>
        </p>
      </div>
    </Layout>
  )
}
