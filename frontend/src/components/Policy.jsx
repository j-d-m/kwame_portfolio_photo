import React from "react";
import "../styles/_policy.css";

function Policy() {
  return (
    <main>
      <ol>
        {" "}
        <p>Datenchutzerklärung</p>
        <li>
          Name und Kontaktdaten des für die Verarbeitung Verantwortlichen sowie
          des betrieblichen Datenschutzbeauftragten
          <p>
            Diese Datenschutz-Information gilt für die Datenverarbeitung durch:
          </p>
          <address>
            {" "}
            <p>Verantwortlicher: Kwame Boama, Grüntalerstr 26, 13357 Berlin</p>
            <span>Email:</span>
            <a href="mailto:kwameboama@hotmail.com" className="email">
              {" "}
              kwameboama@hotmail.com
            </a>
            <span>Telefon: +49 157 728 160 26</span>
          </address>
        </li>
        <li>
          <p>
            Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck
            von deren Verwendung
          </p>
          <ol>
            {" "}
            <li type="a"></li>
          </ol>
        </li>
      </ol>
    </main>
  );
}

export default Policy;
