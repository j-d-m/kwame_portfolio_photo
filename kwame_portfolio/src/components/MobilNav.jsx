import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../context/context";
import { AiOutlineInstagram } from "react-icons/ai";
import { Modal } from "react-bootstrap";
import "../styles/_nav.css";

function MobilNav(props) {
  const { isAdminLogin, setIsAdminLogin, setAdmin } = useContext(MyContext);
  function adminSignOut() {
    localStorage.removeItem("admin");
    setIsAdminLogin(false);
    setAdmin({});
  }

  function closeNavModalMobile() {
    props.onHide();
  }
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      fullscreen={true}
      centered
      className="ModalNav"
    >
      <div
        className={props.show ? "  ContainerMobileOpen" : "ContainerMobile "}
      >
        <div className="MenuBtn_Container ">
          <Link to="/">
            <h1 className="text-dark">Kwame Boama</h1>
          </Link>
          <div
            className={props.show ? "Menu-Btn Open " : "Menu-Btn"}
            onClick={() => props.onHide()}
          >
            <div className="Menu-Btn__Burger "></div>
          </div>
        </div>
      </div>

      <ul className="Nav-LinksMobile ">
        <div>
          {isAdminLogin && (
            <input
              type="button"
              value="Sign out"
              onClick={adminSignOut}
              className="SignOutBtnMobile"
            />
          )}

          <NavLink
            to="/work"
            activeclassname="active"
            onClick={closeNavModalMobile}
          >
            Work
          </NavLink>

          <NavLink
            to="/contact"
            activeclassname="active"
            onClick={closeNavModalMobile}
          >
            Contact
          </NavLink>

          <NavLink
            to="/policy"
            activeclassname="active"
            onClick={closeNavModalMobile}
          >
            Privacy Policy
          </NavLink>
        </div>
        <div>
          <a href="https://www.instagram.com/kwame_boama/">
            <AiOutlineInstagram />
          </a>
        </div>
      </ul>
    </Modal>
  );
}

export default MobilNav;
