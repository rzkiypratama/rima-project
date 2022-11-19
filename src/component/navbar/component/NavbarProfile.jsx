import React from "react";
import styles from "../../navbar/Navbar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from "../../../redux/actions/auths";

// IMport Image
import hamburger from "../../navbar/menu.png";

function NavbarProvile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage["userInfo"] || "{}")

  const toLogout = () => navigate("/login")
  const logoutHandler = () => {
    dispatch(authActions.logoutThunk(userInfo.token, toLogout))
    localStorage.removeItem("userInfo");
  }


  return (
    <div>
      <NavDropdown className={styles["menu"]} title={<img className={styles["icon-menu"]} src={hamburger} alt="/"></img>} id="basic-nav-dropdown">
        <Link className={styles["no-underline"]} to={"/profile"}>
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/chat"}>
          <NavDropdown.Item href="#action/3.1">Chat</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/notification"}>
          <NavDropdown.Item href="#action/3.1">Notification</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/"}>
          <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>
        </Link>
      </NavDropdown>
    </div>
  );
}

export default NavbarProvile;
