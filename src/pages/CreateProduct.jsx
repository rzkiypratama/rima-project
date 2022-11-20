import React from "react";
import styles from "../styles/CreateProduct.module.css";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import NavDropdown from "react-bootstrap/NavDropdown";

import sofa1 from "../assets/productDetail/Sofa2.png";

function CreateProduct() {
  return (
    <div>
      <Navbar />
      <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
        <div className="container justify-content-center">
          <p className={`text-center  ${styles["profile"]}`}>Selling Product</p>
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

      <form className={`container ${styles["cont-form"]} `}>
        <div class="form-group">
          <p className={`${styles["inventory"]}`}>Inventory</p>
          <input type="text" className="form-control mb-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of goods *" />
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Description Product *" rows="3"></textarea>
        </div>
        <div class="form-group mt-5">
          <p className={`${styles["inventory"]} ${styles["item-detail"]}`}>Item Details</p>
          <input type="text" className="form-control mb-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unit price *" />
          <input type="text" className="form-control mb-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unit Stock *" />
          <small id="emailHelp" class="form-text text-muted">
            Stock Condition
          </small>
          <div className={`${styles["radio"]} d-flex gap-5 align-items-center`}>
            <div className={styles["input"]}>
              <input className={`${styles["checkbox"]} ${styles["cursor"]}`} type="checkbox" name="role" value="New Product" />
              <label htmlFor="">New Product</label>
            </div>
            <div className={styles["input"]}>
              <input className={`${styles["checkbox"]} ${styles["cursor"]}`} type="checkbox" name="role" value="Second Product" />
              <label htmlFor="">Second Product</label>
            </div>
          </div>
          <div className="">
            <p> Photo of Goods</p>
            <img src={sofa1} alt="/" />
            <button className="btn btn-dark">Sell Product</button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default CreateProduct;
