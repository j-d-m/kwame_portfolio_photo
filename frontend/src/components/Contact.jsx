import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <main className="contact--main">
      <h2>
        Photographer <span>|</span> Director
      </h2>

      <p className="mail">
        Mail:
        <a className="mail" href="mailto:kwameboama@hotmail.com">
          {" "}
          kwameboama@hotmail.com
        </a>
      </p>

      <p>Telephone: +49 15772816026</p>

      <p>
        Berlin based photographer <span>&amp;</span> director
      </p>

      <a href="https://www.instagram.com/kwame_boama/">
        <AiOutlineInstagram style={{ "font-size": "1.6rem" }} />
      </a>
    </main>
  );
}

export default Contact;
