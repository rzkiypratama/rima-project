import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import styles from "../styles/SellerProduct.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Table from "../component/tableSelling/Table";

function SellerProduct() {
  return (
    <div>
      <Navbar />
      <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
        <div className="container justify-content-center">
          <p className={`text-center  ${styles["profile"]}`}>My Product</p>
          <p className={`text-center fs-6 ${styles["text-profile"]}`}>See your notifications for the latest updates</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="row">
          <ul className="nav ">
            <li className="nav-item">
              <a className="nav-link " href=" ">
                Profile
              </a>
            </li>

            <div>
              <NavDropdown className={`${styles["menu"]}`} title="My Product" id="basic-nav-dropdown">
                <NavDropdown.Item>All</NavDropdown.Item>
                <NavDropdown.Item>Archive</NavDropdown.Item>
                <NavDropdown.Item>Sold Out</NavDropdown.Item>
              </NavDropdown>
            </div>
            <li className="nav-item">
              <a className="nav-link " href=" ">
                Selling Product
              </a>
            </li>
            <div>
              <NavDropdown className={styles["menu"]} title="My Order" id="basic-nav-dropdown">
                <NavDropdown.Item>All</NavDropdown.Item>
                <NavDropdown.Item>Get Paid</NavDropdown.Item>
                <NavDropdown.Item>Processed</NavDropdown.Item>
                <NavDropdown.Item>Sent</NavDropdown.Item>
                <NavDropdown.Item>Completed</NavDropdown.Item>
                <NavDropdown.Item>Order Cancel</NavDropdown.Item>
              </NavDropdown>
            </div>
          </ul>
        </div>
      </div>
      {/* <Table /> */}
      <Footer />
    </div>
  );
}

export default SellerProduct;
