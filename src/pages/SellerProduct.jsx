/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import axios from "axios";
import styles from "../styles/SellerProduct.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Table from "../component/tableSelling/Table";
import Loader from '../component/loader/Loader'

function SellerProduct() {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/product`;

  const [stock, setStock] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState("");

  const HandleProduct = () => {
    return axios
      .get(url)
      .then((res) => {
        setStock(res.data.data.data.stock);
        setDesc(res.data.data.data.description);
        setPrice(res.data.data.data.price);
        setImage(res.data.data.data.image);
        setData(res.data.data.data);
        console.log("data : ", res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const costing = (price) => {
    return parseFloat(price)
      .toFixed()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

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
                <NavDropdown.Item onClick={HandleProduct}>All</NavDropdown.Item>
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

      <hr className="container" />
      <section className="container d-flex px-5 justify-content-between ">
        <p className={`${styles["title"]} col-4 d-flex justify-content-start ms-4 `}>Product</p>
        <p className={`${styles["title"]} col-4 d-flex justify-content-start ms-4 `}> Stock Status</p>
        <p className={`${styles["title"]} col-4 d-flex justify-content-start ms-4 `}>Price</p>
      </section>
      <hr className="container" />
      <div className="container">
        {data.length > 0 ? (
          data.map((data, index) => {
            return <Table key={index} stock={data.stock} description={data.desc} image={data.image} price={`${"IDR"} ${costing(data.price)}`} />;
          })
        ) : (
          <>
            <Loader/>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SellerProduct;
