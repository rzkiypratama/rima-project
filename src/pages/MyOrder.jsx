import React from "react";
import styles from "../styles/CreateProduct.module.css";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import NavDropdown from "react-bootstrap/NavDropdown";
// import axios from "axios";
// import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Order from "../component/tableOrder/Order";

function MyOrder() {
  return (
    <div>
      <div>
        <Navbar />
        <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
          <div className="container justify-content-center">
            <p className={`text-center  ${styles["profile"]}`}>My Order</p>
            <p className={`text-center fs-6 ${styles["text-profile"]}`}>See your notifications for the latest updates</p>
          </div>
        </div>
        <div className=" container justify-content-evenly d-flex  my-5">
          <p className="nav-item">
            <Link className={` text-decoration-none ${styles["no-underline"]}`} to={"/admin/profile"}>
              <p className={`nav-link ${styles["color-text"]}`}>Profile</p>
            </Link>
          </p>

          <div className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}>
            <Link className={` text-decoration-none ${styles["no-underline"]} `} to={"/admin/my-product"}>
              <p className={`${styles["cursor"]} ${styles["color-text"]}`}> My Product </p>
            </Link>
            <NavDropdown className={` ${styles["menu"]} ${styles["color-text"]}`} id="basic-nav-dropdown">
              <NavDropdown.Item>All</NavDropdown.Item>
              <NavDropdown.Item>Archive</NavDropdown.Item>
              <NavDropdown.Item>Sold Out</NavDropdown.Item>
            </NavDropdown>
          </div>
          <p className="nav-item">
            <Link className={` text-decoration-none ${styles["no-underline"]} `} to={"/admin/create-product"}>
              <p className={`nav-link ${styles["color-text"]}`}>Selling Product</p>
            </Link>
          </p>
          <div className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}>
            <p className={`${styles["cursor"]} ${styles["color-text"]}`}> My Order </p>
            <NavDropdown className={` ${styles["menu"]} ${styles["color-text"]}`} id="basic-nav-dropdown">
              <NavDropdown.Item>All</NavDropdown.Item>
              <NavDropdown.Item>Archive</NavDropdown.Item>
              <NavDropdown.Item>Sold Out</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div className="container d-flex justify-content-between ">
          <p className="col-lg-4 d-flex justify-content-start">PRODUCTS</p>
          <p className="col-lg-2 d-flex justify-content-center">PRICE</p>
          <p className="col-lg-2 d-flex justify-content-center">QUANTITY</p>
          <p className="col-lg-2 d-flex justify-content-center">STATUS ORDER</p>
          <p className="col-lg-2 d-flex justify-content-center">TOTAL</p>
        </div>
        <Order />
        <Footer />
      </div>
    </div>
  );
}

export default MyOrder;
