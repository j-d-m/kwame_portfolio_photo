import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { MyContext } from "../context/context";
import { useState } from "react";
import MobilNav from "./MobilNav";

export default function Nav() {
  const { isAdminLogin, setIsAdminLogin, setAdmin } = useContext(MyContext);
  const [modalShow, setModalShow] = useState(false);
  const [isModalMobileClose, setIsModalMobileClose] = useState(false);

  function adminSignOut() {
    localStorage.removeItem("admin");
    setIsAdminLogin(false);
    setAdmin({});
  }
  // this function is called when the modal is open on small size and user resize the width for window to bigger than 790px then the modal will close automatically
  // function handleResize() {
  //   if (window.innerWidth > 790) {

  //     setModalShow(false);
  //     setIsModalMobileClose(true);
  //   }
  // }
  // window.addEventListener("resize", handleResize);
  // //////
  return (
    <>
      <div
        // className={!isModalMobileClose ? "Container" : "ContainerModalClose"}
        className="Container"
      >
        <Link to="/" className="LogoName ">
          <h1>Kwame Boama</h1>
        </Link>

        <ul className="Nav-Links ">
          {isAdminLogin && (
            <input
              type="button"
              value="Sign out"
              onClick={adminSignOut}
              className="SignOutBtn"
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
      <div className="ContainerMobile">
        <div className="MenuBtn_Container">
          <Link to="/">
            <h1>Kwame Boama</h1>
          </Link>
          <div
            className={modalShow ? "Menu-Btn Open" : "Menu-Btn"}
            onClick={() => setModalShow(true)}
          >
            <div className="Menu-Btn__Burger"></div>
          </div>
          <MobilNav show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </>
  );
}
