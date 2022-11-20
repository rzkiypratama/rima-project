/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "../styles/CreateProduct.module.css";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

import sofa1 from "../assets/productDetail/Sofa2.png";
// import { useNavigate } from "react-router-dom";

function CreateProduct() {
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
   return (
      <div>
         <Navbar />
         <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
            <div className="container justify-content-center">
               <p className={`text-center  ${styles["profile"]}`}>
                  Selling Product
               </p>
               <p className={`text-center fs-6 ${styles["text-profile"]}`}>
                  See your notifications for the latest updates
               </p>
            </div>
         </div>
         <div className=" container justify-content-evenly d-flex  my-5">
            <p className="nav-item">
               <Link
                  className={` text-decoration-none ${styles["no-underline"]}`}
                  to={"/profile"}
               >
                  <p className={`nav-link ${styles["color-text"]}`}>Profile</p>
               </Link>
            </p>

            <div
               className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}
            >
               <Link
                  className={` text-decoration-none ${styles["no-underline"]} `}
                  to={"/admin/my-product"}
               >
                  <p className={`${styles["cursor"]} ${styles["color-text"]}`}>
                     {" "}
                     My Product{" "}
                  </p>
               </Link>
               <NavDropdown
                  className={` ${styles["menu"]} ${styles["color-text"]}`}
                  id="basic-nav-dropdown"
               >
                  <NavDropdown.Item onClick={HandleProduct}>
                     All
                  </NavDropdown.Item>
                  <NavDropdown.Item>Archive</NavDropdown.Item>
                  <NavDropdown.Item>Sold Out</NavDropdown.Item>
               </NavDropdown>
            </div>
            <p className="nav-item">
               <Link
                  className={` text-decoration-none ${styles["no-underline"]} `}
                  to={"/admin/create-product"}
               >
                  <p className={`nav-link ${styles["color-text"]}`}>
                     Selling Product
                  </p>
               </Link>
            </p>
            <div
               className={`d-flex gap-2 align-items-center ${styles["cursor"]} ${styles["color"]}`}
            >
               <Link
                  className={` text-decoration-none ${styles["no-underline"]} `}
                  to={"/admin/my-order"}
               >
                  <p className={`${styles["cursor"]} ${styles["color-text"]}`}>
                     {" "}
                     My Order{" "}
                  </p>
               </Link>
               <NavDropdown
                  className={` ${styles["menu"]} ${styles["color-text"]}`}
                  id="basic-nav-dropdown"
               >
                  <NavDropdown.Item onClick={HandleProduct}>
                     All
                  </NavDropdown.Item>
                  <NavDropdown.Item>Archive</NavDropdown.Item>
                  <NavDropdown.Item>Sold Out</NavDropdown.Item>
               </NavDropdown>
            </div>
         </div>

         <form className={`container ${styles["cont-form"]} `}>
            <div className="form-group">
               <p className={`${styles["inventory"]}`}>Inventory</p>
               <input
                  type="text"
                  className="form-control mb-5"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name of goods *"
               />
               <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Description Product *"
                  rows="3"
               ></textarea>
            </div>
            <div className="form-group mt-5">
               <p className={`${styles["inventory"]} ${styles["item-detail"]}`}>
                  Item Details
               </p>
               <input
                  type="text"
                  className="form-control mb-5"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Unit price *"
               />
               <input
                  type="text"
                  className="form-control mb-5"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Unit Stock *"
               />

               <div>
                  <div className="d-flex row">
                     <p
                        className={`${styles["inventory"]} ${styles["item-detail"]}`}
                     >
                        {" "}
                        Photo of Goods
                     </p>
                     <img
                        className={`${styles["image"]}`}
                        src={sofa1}
                        alt="/"
                     />
                     <img
                        className={`${styles["image"]}`}
                        src={sofa1}
                        alt="/"
                     />
                  </div>
                  <button className={`${styles["btn"]} btn btn-dark`}>
                     Sell Product
                  </button>
               </div>
            </div>
         </form>
         <Footer />
      </div>
   );
}

export default CreateProduct;
