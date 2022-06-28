import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Nav() {
  return (
    <div className="container">
      <NavLink to="/" activeclassname="active">
        <h1>Kwame Boama</h1>
      </NavLink>
      <ul className="nav-links">
        <NavLink to="/work" activeclassname="active">
          Work
        </NavLink>
        <NavLink to="/contact" activeclassname="active">
          Contact
        </NavLink>
        <NavLink to="/policy" activeclassname="active">
          Privacy Policy
        </NavLink>

        <a href="#">
          <AiOutlineInstagram />
        </a>
      </ul>
    </div>
  );
}
