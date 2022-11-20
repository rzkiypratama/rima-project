import React from "react";
//component
import Navbar from "../../component/navbar/Navbar";
// import Footer from "../../component/footer/Footer";
import title from "../../helper/title";
import styles from "./ComingSoon.module.css";

function ComingSoon() {
   title("Coming Soon");
   return (
      <>
         <Navbar />
         <main></main>
      </>
   );
}

export default ComingSoon;
