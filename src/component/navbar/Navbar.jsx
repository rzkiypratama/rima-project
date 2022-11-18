import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import NavbarRegister from "./component/NavbarRegister";
// import { useState } from "react";

import wishlist from "../navbar/wishlist.png";
import search from "../navbar/search.png";
import cart from "../navbar/cart.png";

function BasicExample() {
  // const [navbar, setnavbar] = useState(NavbarLogin);
  // navType = () => {
  //   if (this.state.userInfo.token) {
  //     if (this.state.userInfo.role === "user") {
  //       return this.state.navLogin;
  //     } else {
  //       return this.state.navAdmin;
  //     }
  //   } else {
  //     return this.state.navnotLogin;
  //   }
  // };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className={`${styles["company"]}`} href="#home">
          RIMA
          <div className="dropdown"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto gap-5 ${styles["navbar"]}`}>
            <Nav.Link className={styles["title"]} href="/">
              HOME
            </Nav.Link>
            <NavDropdown className={styles["title"]} title="PAGES" id="basic-nav-dropdown">
              <Link className={styles["no-underline"]} to={"/about"}>
                <NavDropdown.Item href="#action/3.1">About Us </NavDropdown.Item>
              </Link>

              <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coming Soon </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">404 Page </NavDropdown.Item>
              <Link className={styles["no-underline"]} to={"/faq"}>
                <NavDropdown.Item href="#action/3.1">FAQ Page</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown className={styles["title"]} title="SHOP" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Other Page</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2"> Shopping Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Check Out</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Order Tracking</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className={styles["title"]} href="#home">
              BLOG
            </Nav.Link>
          </Nav>
          <div className={` d-flex gap-5 ${styles["icon"]}`}>
            <img className={`  ${styles["icon-1"]} ${styles["cursor"]}`} src={search} alt="/" />
            <img className={`   ${styles["cursor"]}`} src={wishlist} alt="/" />
            <img className={`   ${styles["cursor"]}`} src={cart} alt="/" />
            <NavbarRegister />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
