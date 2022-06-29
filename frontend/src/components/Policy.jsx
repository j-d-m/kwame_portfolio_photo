import React from "react";
import "../styles/_policy.css";

function Policy() {
  return (
    <div className="policyMainContainer">
      <main className="policy--container">
        <ol>
          {" "}
          {/* NUMBER 1 */}
          <p>Datenchutzerklärung</p>
          <section>
            <li>
              Name und Kontaktdaten des für die Verarbeitung Verantwortlichen
              sowie des betrieblichen Datenschutzbeauftragten
              <p>
                Diese Datenschutz-Information gilt für die Datenverarbeitung
                durch:
              </p>
              <address>
                {" "}
                <p>
                  Verantwortlicher: Kwame Boama, Grüntalerstr 26, 13357 Berlin
                </p>
                <span>Email:</span>
                <a href="mailto:kwameboama@hotmail.com" className="email">
                  {" "}
                  kwameboama@hotmail.com
                </a>
                <span>Telefon: +49 157 728 160 26</span>
              </address>
            </li>
          </section>
          {/* NUMBER 2 */}
          <section>
            <li>
              <p>
                Erhebung und Speicherung personenbezogener Daten sowie Art und
                Zweck von deren Verwendung
              </p>
              <ol>
                {" "}
                {/* START OF INTERNAL LIST (a) */}
                <li type="a">
                  Beim Besuch der Website
                  <span>Beim Aufrufen unserer website </span>
                  <a href="http://www.kwameboama.com" className="email">
                    www.kwameboama.com
                  </a>
                  <p>
                    werden durch den auf Ihrem Endgerät zum Einsatz kommenden
                    Browser automatisch Informationen an den Server unserer
                    Website gesendet. Diese Informationen werden temporär in
                    einem sog. Logfile gespeichert. Folgende Informationen
                    werden dabei ohne Ihr Zutun erfasst und bis zur
                    automatisierten Löschung gespeichert:
                  </p>
                  {/* nested list 1 */}
                  <ol>
                    <li type="i">IP-Adresse des anfragenden Rechners,</li>
                    <li type="i">Datum und Uhrzeit des Zugriffs,</li>
                    <li type="i">Name und URL der abgerufenen Datei,</li>
                    <li type="i">
                      Website, von der aus der Zugriff erfolgt (Referrer-URL),
                    </li>
                    <li type="i">
                      verwendeter Browser und ggf. das Betriebssystem Ihres
                      Rechners sowie der Name Ihres Access-Providers.
                    </li>
                    <span>
                      Die genannten Daten werden durch uns zu folgenden Zwecken
                      verarbeitet:
                    </span>
                    <li type="i">
                      Gewährleistung eines reibungslosen Verbindungsaufbaus der
                      Website,
                    </li>
                    <li type="i">
                      Gewährleistung einer komfortablen Nutzung unserer Website
                    </li>
                    <li type="i">
                      Auswertung der Systemsicherheit und -stabilität sowie
                    </li>
                    <li type="i">
                      zu weiteren administrativen Zwecken{" "}
                      <p>
                        Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6
                        Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse
                        folgt aus oben aufgelisteten Zwecken zur Datenerhebung.
                        In keinem Fall verwenden wir die erhobenen Daten zu dem
                        Zweck, Rückschlüsse auf Ihre Person zu ziehen. Darüber
                        hinaus setzen wir beim Besuch unserer Website Cookies
                        sowie Analysedienste ein. Nähere Erläuterungen dazu
                        erhalten Sie unter den Ziff. 4 und 5 dieser
                        Datenschutzerklärung.
                      </p>
                    </li>
                  </ol>
                </li>
                {/* START OF INTERNAL LIST (b) */}
                <li type="a">Bei Anmeldung für unseren Newsletter</li>
                <p>
                  Sofern Sie nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrücklich
                  eingewilligt haben, verwenden wir Ihre E-Mail-Adresse dafür,
                  Ihnen regelmäßig unseren Newsletter zu übersenden. Für den
                  Empfang des Newsletters ist die Angabe einer E-Mail-Adresse
                  ausreichend. Die Abmeldung ist jederzeit möglich, zum Beispiel
                  über einen Link am Ende eines jeden Newsletters. Alternativ
                  können Sie Ihren Abmeldewunsch gerne auch jederzeit an
                  kwameboama@hotmail.com per E-Mail senden
                </p>
                {/* START OF INTERNAL LIST (c) */}
                <li type="a">Bei Nutzung unseres Kontaktformulars</li>
                <p>
                  Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit
                  uns über ein auf der Website bereitgestelltes Formular Kontakt
                  aufzunehmen. Dabei ist die Angabe einer gültigen
                  E-Mail-Adresse erforderlich, damit wir wissen, von wem die
                  Anfrage stammt und um diese beantworten zu können. Weitere
                  Angaben können freiwillig getätigt werden. Die
                  Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns
                  erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage
                  Ihrer freiwillig erteilten Einwilligung. Die für die Benutzung
                  des Kontaktformulars von uns erhobenen personenbezogenen Daten
                  werden nach Erledigung der von Ihnen gestellten Anfrage
                  automatisch gelöscht.
                </p>
                <li type="a">Blog</li>
                <p>
                  Sie haben die Möglichkeit auf unserer Internetseite Fragen,
                  Antworten, Meinungen oder Bewertungen (Beiträge) zu
                  veröffentlichen. In diesem Fall verarbeiten wir Ihren Beitrag
                  und veröffentlichen diesen auf unserer Internetseite. Eine
                  inhaltliche Prüfung findet nicht statt. Rechtsgrundlage
                  hierbei ist die von Ihnen nach Art. 6 Abs. 1 lit. a) DSGVO
                  erteilte Einwilligung. Die Einwilligung können Sie nach Art. 7
                  Abs. 3 DSGVO jederzeit widerrufen. Weiter werden das Datum und
                  die Uhrzeit der Einreichung, ein ggf. genutztes Pseudonym, IP-
                  und E-Mail-Adresse verarbeitet. Die Rechtsgrundlage ergibt
                  sich aus Art. 6 Abs. 1 lit. f. DSGVO. Unser überwiegendes
                  berechtigtes Interesse ergibt sich daraus weitere Schritte
                  einzuleiten oder zu unterstützen zu können, wenn Ihr Beitrag
                  rechtswidrig ist. Die im Rahmen der Beiträge angegebenen
                  Daten, werden von uns bis zum Widerspruch durch den Nutzer
                  dauerhaft gespeichert.
                </p>
              </ol>
            </li>
          </section>
          <section>
            <li>
              Weitergabe von Daten
              <p>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen
                als den im Folgenden aufgeführten Zwecken findet nicht statt.
              </p>
              <span>
                Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
              </span>
              <ol>
                <li>
                  {" "}
                  Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche
                  Einwilligung dazu erteilt haben,
                </li>
                <li>
                  {" "}
                  - die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
                  Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen erforderlich ist und kein Grund zur Annahme
                  besteht, dass Sie ein überwiegendes schutzwürdiges Interesse
                  an der Nichtweitergabe Ihrer Daten haben,
                </li>
                <li>
                  {" "}
                  für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1
                  lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie
                </li>
                <li>
                  dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b
                  DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen
                  erforderlich ist.
                </li>
              </ol>
            </li>
          </section>
        </ol>
      </main>
    </div>
  );
}

export default Policy;
