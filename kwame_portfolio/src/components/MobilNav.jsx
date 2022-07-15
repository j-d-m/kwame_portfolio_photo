import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../context/context";
import { AiOutlineInstagram } from "react-icons/ai";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/_nav.css";

function MobilNav(props) {
  const { isAdminLogin, setIsAdminLogin, setAdmin } = useContext(MyContext);
  function adminSignOut() {
    localStorage.removeItem("admin");
    setIsAdminLogin(false);
    setAdmin({});
  }
  // console.log(props.onHide);
  function closeNavModalMobile() {
    props.onHide();
  }
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      fullscreen={true}
      centered
    >
      {/* i think here is better to merge this component  with nav component because we will use almost same code */}
      {/* 
        <div className="menu-Btn__Burger"></div>
      </div> */}
      <div className="containerMobile bg-light ">
        <div className="menuBtn_Container ">
          <Link to="/">
            <h1 className="text-dark">Kwame Boama</h1>
          </Link>
          <div
            className={props.show ? "menu-Btn open " : "menu-Btn"}
            onClick={() => props.onHide()}
          >
            <div className="menu-Btn__Burger "></div>
          </div>
        </div>
      </div>
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

          <NavLink
            to="/work"
            activeclassname="activeMobile"
            onClick={closeNavModalMobile}
          >
            Work
          </NavLink>

          <NavLink
            to="/contact"
            activeclassname="activeMobile"
            onClick={closeNavModalMobile}
          >
            Contact
          </NavLink>
          <NavLink
            to="/policy"
            activeclassname="activeMobile"
            onClick={closeNavModalMobile}
          >
            Privacy Policy
          </NavLink>

          <a href="https://www.instagram.com/kwame_boama/">
            <AiOutlineInstagram />
          </a>
        </ul>
      </div>
    </Modal>
  );
}

export default MobilNav;
