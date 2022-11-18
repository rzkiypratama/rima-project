import React from "react";
import styles from "../navbar/Navbar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

// IMport Image
import hamburger from "../navbar/menu.png";

function NavbarProvile() {
  return (
    <div>
      <NavDropdown className={styles["menu"]} title={<img className={styles["icon-menu"]} src={hamburger} alt="/"></img>} id="basic-nav-dropdown">
        <Link className={styles["no-underline"]} to={"/about"}>
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/about"}>
          <NavDropdown.Item href="#action/3.1">Chat</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/about"}>
          <NavDropdown.Item href="#action/3.1">Notification</NavDropdown.Item>
        </Link>
        <Link className={styles["no-underline"]} to={"/about"}>
          <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
        </Link>
      </NavDropdown>
    </div>
  );
}

export default NavbarProvile;
