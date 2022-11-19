import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import styles from "../styles/SellerProduct.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";

// Import Image
import chair from "../assets/sellerProduct/chair.png";
import check from "../assets/sellerProduct/checklist.png";

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
      <section className="container mt-5">
        <hr className="my-0" />
        <table className={`${styles["table"]} table `}>
          <thead>
            <tr>
              <th className={`${styles["product"]}`} scope="col">
                Product
              </th>
              <th className="d-flex justify-content-center " scope="col">
                Stock Status
              </th>
              <th className={`${styles["price-title"]}`} scope="col">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div className="d-flex gap-3 align-items-center">
                  <img src={chair} alt="/" />
                  <p />
                  Dining Side Chair in Beige
                </div>
              </th>
              <td>
                <div className={` ${styles["stock"]} d-flex align-items-center `}>
                  <img src={check} alt="/" />
                  10 Stock
                </div>
              </td>
              <td>
                <div className={` ${styles["price"]} d-flex align-items-center `}>
                  $765.99 <button className="btn btn-danger"> Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="d-flex gap-3 align-items-center">
                  <img src={chair} alt="/" />
                  <p />
                  Eugene Accent Table 18.9 inches Espresso
                </div>
              </th>
              <td>
                <div className={` ${styles["stock"]} d-flex align-items-center `}>
                  <img src={check} alt="/" />
                  10 Stock
                </div>
              </td>
              <td>
                <div className={` ${styles["price"]} d-flex align-items-center `}>
                  $765.99 <button className="btn btn-danger"> Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="d-flex gap-3 align-items-center">
                  <img src={chair} alt="/" />
                  <p />
                  Dining Side Chair in Beige
                </div>
              </th>
              <td>
                <div className={` ${styles["stock"]} d-flex align-items-center `}>
                  <img src={check} alt="/" />
                  10 Stock
                </div>
              </td>
              <td>
                <div className={` ${styles["price"]} d-flex align-items-center `}>
                  $765.99 <button className="btn btn-danger"> Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
}

export default SellerProduct;
