import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../context/context";
import { AiOutlineInstagram } from "react-icons/ai";
import { Button, Modal } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/_nav.css";
function MobilNav() {
  const { isAdminLogin, setIsAdminLogin, setAdmin } = useContext(MyContext);
  function adminSignOut() {
    localStorage.removeItem("admin");
    setIsAdminLogin(false);
    setAdmin({});
  }

  return (
    <div
      //       {...props}
      size="xxl"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal-dialog modal-fullscreen"
      centered
    >
      <div>
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
      </div>
    </div>
  );
}

export default MobilNav;
