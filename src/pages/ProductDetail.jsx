import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import styles from "../styles/ProductDetail.module.css";
// Import Image
import sofa1 from "../assets/productDetail/Sofa1.png";
import sofa2 from "../assets/productDetail/Sofa2.png";
import sofa3 from "../assets/productDetail/Sofa3.png";
import sofa4 from "../assets/productDetail/Sofa4.png";
import sofa5 from "../assets/productDetail/Sofa5.png";
import star from "../assets/productDetail/star.png";
import delivery from "../assets/productDetail/delivery-fast.png";
import size from "../assets/productDetail/measurement.png";
import location from "../assets/productDetail/pin-check.png";
import fb from "../assets/productDetail/fb.png";
import twitter from "../assets/productDetail/twitter.png";
import youtube from "../assets/productDetail/youtube.png";

function ProductDetail() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <p>
          FAQ <i className="bi bi-chevron-right mx-3" />
          Shop Right Sidebar
          <i className="bi bi-chevron-right mx-3" />
          Product
        </p>
        <section className="container d-flex mt-5 justify-content-between">
          <div className="row ">
            <div className="container col-12 col-md-1 col-sm-3 ">
              <img className={`${styles["img-left"]}`} src={sofa1} alt="/" />
              <img className={`${styles["img-left"]}`} src={sofa2} alt="/" />
              <img className={`${styles["img-left"]}`} src={sofa3} alt="/" />
              <img className={`${styles["img-left"]}`} src={sofa4} alt="/" />
              <img className={`${styles["img-left"]}`} src={sofa5} alt="/" />
            </div>
            <div className="col-12 col-md-8 col-sm-8 my-auto  ">
              <img className={` w-100 my-md auto ${styles["img-right"]}`} src={sofa1} alt="/" />
            </div>
          </div>
        </section>
        <section className="container ">
          <h1>Coaster Home Furnishings Sofa in Oatmeal</h1>
          <img src={star} alt="/" /> <span>2 (reviews)</span>
          <p />
          $765.99
          <span>
            <svg className={`${styles["checklist"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg>
            19 Sold / 40 In Stock
          </span>
          <p />
          <p>
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices exurabitur ut magna dignissim, dignissiNullam vitae venenatis elit. Proin dui lacus, viverra at
            imperdiet non, facilisis eget orci. Vivamus ac elit tellus. Vestibulum nulla dui, consequat vitae diam eu, pretium finibus libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Aliquam vitae neque tellus.
          </p>
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary">
              -
            </button>
            <button type="button" className="btn btn-outline-primary">
              0
            </button>
            <button type="button" className="btn btn-outline-primary">
              +
            </button>
          </div>
          <button type="button" className="btn btn-dark rounded-0 mx-2">
            Add to cart
          </button>
          <button type="button" className="btn btn-dark rounded-0">
            <i className="bi bi-heart"></i>
          </button>
          <button type="button" className="btn btn-light border rounded-0 mx-2">
            Add to wishlist
          </button>
          <p> SKU: N/A </p>
          <p> Categories: Furniture, Interior, Chair </p>
          <p> Tag: Furniture, Chair, Scandinavian, </p>
          <p> Modern Product ID: 274</p>
          <div>
            <img src={delivery} alt="/" /> <span />
            Delivery and return
            <img src={size} alt="/" /> <span />
            Size Guide
            <img src={location} alt="/" /> <span />
            Store availability
          </div>
          <div>
            <img src={fb} alt="/" />

            <img src={twitter} alt="/" />

            <img src={youtube} alt="/" />
          </div>
          <ul className="nav ">
            <li className="nav-item  border-bottom mb-3 me-3">
              <a className="nav-link active" href=" ">
                Description
              </a>
            </li>
            <li className="nav-item  border-bottom mb-3 me-3">
              <a className="nav-link" href=" ">
                Review
              </a>
            </li>
            <li className="nav-item  border-bottom mb-3 me-3">
              <a className="nav-link" href=" ">
                Additional Information
              </a>
            </li>
            <li className="nav-item  border-bottom mb-3 me-3">
              <a className="nav-link" href=" ">
                About Brand
              </a>
            </li>
            <li className="nav-item pb-3 border-bottom mb-3 me-3">
              <a className="nav-link" href=" ">
                Shipping & Delivery
              </a>
            </li>
          </ul>
          <section className="row d-flex flex-sm-column flex-md-row flex-lg-row">
            <section className={`${styles.content_left} col-12 col-sm-12 col-md-6 col-lg-6 mb-5 mb-md-0 mb-lg-0 pe-0`}>
              <img className="w-100" src={sofa1} alt="maps" />
            </section>
            <section className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center`}>
              <div>
                <p className=" pb-3 pb-sm-3 py-md-3 pt-lg-3 pb-lg-5">
                  Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque.
                  Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..
                </p>
                <ul className="ps-3">
                  <li>
                    <p>Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper</p>
                  </li>
                  <li>
                    <p>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</p>
                  </li>
                </ul>
                <p>Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accum</p>
              </div>
            </section>
            <section>
              <h1 className="text-center">Related Products</h1>
            </section>
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetail;
