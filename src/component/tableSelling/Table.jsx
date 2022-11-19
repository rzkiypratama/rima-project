import React from "react";
// import { useState } from "react";
import styles from "../tableSelling/Table.module.css";
// import axios from "axios";

// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import authActions from "../redux/actions/auths";

// Import Image
// import chair from "../../assets/sellerProduct/chair.png";
import check from "../../assets/sellerProduct/checklist.png";

function table(props) {
  return (
    <div className="d-flex px-0 justify-content-between">
      {/* <div className="d-flex justify-content-between"> */}
      <div className="d-flex align-items-center col-3 justify-content-center">
        <img src={props.image} alt="/" />
        <p />
        {props.description}
      </div>

      <div className={` d-flex align-items-center col-3 justify-content-center gap-3`}>
        {/* <div className={` ${styles["stock"]} col-4 justify-content-center `}> */}
        <img src={check} alt="/" />
        {props.stock} Stock
      </div>

      <div className={` ${styles["price"]} d-flex align-items-center col-3 justify-content-center gap-5`}>
        <p className=" " /> {props.price}
      </div>
      <div className={` ${styles["price"]} d-flex align-items-center col-lg-1 justify-content-center gap-5`}>
        <button className="btn btn-danger "> Delete</button>
      </div>
    </div>
  );
}

export default table;
