import React from "react";
import { Link } from "react-router-dom";
// components
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
// assets
import styles from "../styles/OrderTracking.modules.css";
function OrderTracking() {
   return (
      <>
         <Navbar />
         <main>
            {/* breadcrumb */}
            <section className="bg-danger h-50">
               <h1>hello</h1>
            </section>
            <section className={styles.order}></section>
            <nav>
               <Link to={"/tracking"}>Tracking</Link>
               <i className="bi bi-chevron-right"></i>
            </nav>
            <div className="text-center">
               <h1>Order Tracking</h1>
               <p>Track where your order arrived</p>
            </div>
         </main>
         <Footer />
      </>
   );
}

export default OrderTracking;
