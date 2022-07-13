import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { MyContext } from "../context/context";
import { useState } from "react";
import MobilNav from "./MobilNav";

export default function Nav() {
  const { isAdminLogin, setIsAdminLogin, setAdmin, menuOpen, setMenuOpen } =
    useContext(MyContext);

  function adminSignOut() {
    localStorage.removeItem("admin");
    setIsAdminLogin(false);
    setAdmin({});
  }

  console.log(menuOpen);
  return (
    <>
      <div className="container">
        <Link to="/" className="logoName">
          <h1>Kwame Boama</h1>
        </Link>

        <ul className="nav-links">
          {isAdminLogin && (
            <input
              type="button"
              value="Sign out"
              onClick={adminSignOut}
              className="signOutBtn"
            />
          )}

          <NavLink to="/work" activeclassname="active">
            Work
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
          <NavLink to="/policy" activeclassname="active">
            Privacy Policy
          </NavLink>

          <a href="https://www.instagram.com/kwame_boama/">
            <AiOutlineInstagram />
          </a>
        </ul>
      </div>
      {/* mobile screen  */}
      <div className="containerMobile">
        <div className="menuBtn_Container">
          <Link to="/">
            <h1>Kwame Boama</h1>
          </Link>
          <div
            className={menuOpen ? "menu-Btn open" : "menu-Btn"}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <div className="menu-Btn__Burger"></div>
          </div>
        </div>
        <MobilNav show={menuOpen} onHide={() => setMenuOpen(!menuOpen)} />
      </div>
    </>
  );
}
