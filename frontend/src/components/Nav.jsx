import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { MyContext } from "../context/context";
import { useState } from "react";

export default function Nav() {
  const { isAdminLogin, setIsAdminLogin, setAdmin } = useContext(MyContext);
  const [showNavMobile, setShowNavMobile] = useState(false);

  function adminSignOut() {
    localStorage.removeItem("admin");
    setIsAdminLogin(false);
    setAdmin({});
  }

  return (
    <>
      <div className="container">
        <Link to="/">
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
        <Link to="/">
          <h1>Kwame Boama</h1>
        </Link>

        <div>
          {!showNavMobile ? (
            <HiMenuAlt3
              color="#fff"
              size={25}
              onClick={() => setShowNavMobile(true)}
              className="menuIcon"
            />
          ) : (
            <BsArrowDownShort
              color="#fff"
              size={25}
              onClick={() => setShowNavMobile(false)}
              className="arrowIcon"
            />
          )}
        </div>

        {showNavMobile && (
          <ul className="nav-linksMobile">
            {isAdminLogin && (
              <input
                type="button"
                value="Sign out"
                onClick={adminSignOut}
                className="signOutBtnMobile"
              />
            )}

            <NavLink to="/work" activeclassname="activeMobile">
              Work
            </NavLink>
            <NavLink to="/contact" activeclassname="activeMobile">
              Contact
            </NavLink>
            <NavLink to="/policy" activeclassname="activeMobile">
              Privacy Policy
            </NavLink>

            <a href="https://www.instagram.com/kwame_boama/">
              <AiOutlineInstagram />
            </a>
          </ul>
        )}
      </div>
    </>
  );
}
