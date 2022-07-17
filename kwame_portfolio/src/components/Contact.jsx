import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div className="Contact--Container">
      {" "}
      <h2>
        Photographer <span>|</span> Director
      </h2>
      <main className="Contact--Main">
        <a className="Mail" href="mailto:kwameboama@hotmail.com">
          {" "}
          Mail:<span>kwameboama@hotmail.com</span>
        </a>
        <p>Telephone: +49 15772816026</p>
        <p>
          Berlin based photographer <span>&amp;</span> director
        </p>
        <a href="https://www.instagram.com/kwame_boama/">
          <AiOutlineInstagram size={30} color="black" />
        </a>
      </main>
    </div>
  );
}

export default Contact;
