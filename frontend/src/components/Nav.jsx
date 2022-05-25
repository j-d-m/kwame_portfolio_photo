import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Nav() {
  return (
    <div className="container">
      <NavLink to="/" activeClassName="active">
        <h1>Kwame Boama</h1>
      </NavLink>
      <ul className="nav-links">
        <NavLink to="/work" activeClassName="active">
          Work
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/policy" activeClassName="active">
          Privacy Policy
        </NavLink>

        <a href="#">
          <AiOutlineInstagram />
        </a>
      </ul>
    </div>
  );
}
