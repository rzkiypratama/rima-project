import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import styles from "../styles/ProductDetail.module.css";
// import Slider from "react-slick";
import title from "../helper/title";

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
import related from "../assets/productDetail/related.png";
import checklist from "../assets/productDetail/checklist.png";
// import hot from "../assets/productDetail/hot.png";

function ProductDetail() {
  title("Product");
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={`${styles["cont-faq"]}`}>
          <p className={` d-flex  ${styles["title-faq"]} mt-4 `}>
            FAQ <i className="bi bi-chevron-right mx-3" />
            <p className={`d-flex ${styles["title-faq"]} `}>
              Shop Right Sidebar
              <i className="bi bi-chevron-right mx-3" />
            </p>
            <p className="d-flex ">Product</p>
          </p>
        </div>

        <div className="container mx-auto justify-content-between">
          <section className={`${styles["cont-1"]}py-5  d-flex mt-5 justify-content-between`}>
            <div className="row ">
              <div className="container col-12 col-md-12 col-lg-3 ps-lg-0 col-sm-3 ">
                <img className={`border-bottom me-3 ${styles["img-left"]}`} src={sofa1} alt="/" />
                <img className={` me-3 ${styles["img-left"]}`} src={sofa2} alt="/" />
                <img className={`me-3 ${styles["img-left"]}`} src={sofa3} alt="/" />
                <img className={`me-3 ${styles["img-left"]}`} src={sofa4} alt="/" />
                <img className={` me-3${styles["img-left"]} ${styles["img-left-5"]}`} src={sofa5} alt="/" />
              </div>
              <div className=" col-12 col-md-12 col-sm-8 col-lg-8 my-auto  ">
                <img className={` w-100 my-md auto ${styles["img-right"]}`} src={sofa1} alt="/" />
                {/* <img className={`${styles["hot"]} `} src={hot} alt="/" /> */}
              </div>
            </div>
          </section>
          <section className={`container px-5 ${styles["cont-2"]}`}>
            <h1 className={`${styles["title-coast"]}`}> Coaster Home Furnishings Sofa in Oatmeal</h1>
            <div className={`${styles["cont-star"]}`}>
              <img className={`${styles["star"]}`} src={star} alt="/" /> <span>2 (reviews)</span>
            </div>
            <div className={`d-flex col-12 col-lg-12 col-md-12  align-items-center ${styles["cont-price"]}`}>
              <p className={` ${styles["price"]}`}>$765.99 </p>
              <img className={` ${styles["sold-out"]}`} src={checklist} alt="/"></img>
              <p className={` ${styles["stock"]}`}>19 Sold / 40 In Stock</p>
            </div>
            <p className={`mt-5 ${styles["donec"]}`}>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices exurabitur ut magna dignissim, dignissiNullam vitae venenatis elit. Proin dui lacus, viverra at
              imperdiet non, facilisis eget orci. Vivamus ac elit tellus. Vestibulum nulla dui, consequat vitae diam eu, pretium finibus libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Aliquam vitae neque tellus.
            </p>
            <div className="mt-5">
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className={`btn btn-outline-dark ${styles["height-btn"]}`}>
                  -
                </button>
                <button type="button" className="btn btn-outline-dark">
                  0
                </button>
                <button type="button" className="btn btn-outline-dark">
                  +
                </button>
              </div>
              <button type="button" className={`btn btn-dark rounded-0 mx-2 ${styles["cart-btn"]} ${styles["height-btn"]}`}>
                Add to cart
              </button>
              <button type="button" className={`btn btn-dark rounded-0 ${styles["love"]} ${styles["height-btn"]} ${styles["heart-btn"]}`}>
                <i className="bi bi-heart"></i>
              </button>
            </div>
            <div className={`mt-0 mt-md-5 mt-lg-5 ${styles["Sku"]} `}>
              <p className={`${styles["SKU"]}`}> SKU: N/A </p>
              <p className={`${styles["SKU"]}`}> Categories: Furniture, Interior, Chair </p>
              <p className={`${styles["SKU"]}`}> Tag: Furniture, Chair, Scandinavian, </p>
              <p className={`${styles["SKU"]}`}> Modern Product ID: 274</p>
            </div>
            <div className="mt-5 d-flex gap-5">
              <div className="d-flex gap-2 align-items-center">
                <img src={delivery} alt="/" /> <p className={`${styles["spantext"]}`}>Delivery and return</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <img src={size} alt="/" /> <p className={`${styles["spantext"]}`}>Size Guide</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <img src={location} alt="/" /> <p className={`${styles["spantext"]}`}>Store availability</p>
              </div>
            </div>
            <div className="d-flex gap-3 mt-5 ">
              <img src={fb} alt="/" />

              <img src={twitter} alt="/" />

              <img src={youtube} alt="/" />
            </div>
            <ul className="nav mt-5 mb-md-5d-flex justify-content-between">
              <li className="nav-item col-lg-2 col-md-1  text-align-cente r mb-3 me-3">
                <a className={`nav-link active ${styles["title-desc"]}`} href=" ">
                  Description
                </a>
              </li>
              <li className="nav-item col-lg-2 col-md-1  text-align-cente r mb-3 me-3">
                <a className={`nav-link active ${styles["title-desc"]}`} href=" ">
                  Review
                </a>
              </li>
              <li className="nav-item col-lg-2 col-md-1 text-align-center  mb-3 me-3">
                <a className={`nav-link active ${styles["title-desc"]}`} href=" ">
                  Additional Information
                </a>
              </li>
              <li className="nav-item col-lg-2 col-md-1 text-align-center  mb-3 me-3">
                <a className={`nav-link active ${styles["title-desc"]}`} href=" ">
                  About Brand
                </a>
              </li>
              <li className="nav-item col-lg-2 col-md-1 text-align-center pb-3 mb-3 me-3">
                <a className={`nav-link active ${styles["title-desc"]} ${styles["shipping"]}`} href=" ">
                  Shipping & Delivery
                </a>
              </li>
            </ul>
            <div className="row d-flex flex-sm-column mb-md-5 flex-md-row flex-lg-row">
              <section className={`${styles.content_left} d-flex align-items-center col-12 col-sm-12 col-md-6 col-lg-6 mb-5 mb-md-0 mb-lg-0 pe-0`}>
                <img className="w-100" src={sofa1} alt="sofa" />
              </section>
              <div className={`${styles.content_right} col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center`}>
                <div>
                  <p className={`${styles["donec"]} pb-3 pb-sm-3 py-md-3 pt-lg-3 pb-lg-3`}>
                    Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque.
                    Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..
                  </p>
                  <ul className={`ps-3 ${styles["donec"]} `}>
                    <li>
                      <p>Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper</p>
                    </li>
                    <li>
                      <p>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</p>
                    </li>
                  </ul>
                  <p className={` ${styles["donec"]} `}>Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accum</p>
                </div>
              </div>
            </div>
            <div className={`${styles["cont-card-down"]} container mb-5 mt-5`}>
              <h1 className="text-center">Related Products</h1>
              <div className={`container mt-5 `}>
                <div className=" row">
                  <div className={`col-4`}>
                    <div className={`container `}>
                      <img className={` ${styles["image"]}`} src={related} alt="Card" />
                      <p className={` mt-3 ${styles["card-title"]}`}>Coaster 506222-CO Loveseat</p>
                      <p className={` mt-3 ${styles["card-text"]} `}>$765.99</p>
                    </div>
                  </div>
                  <div className={`col-4`}>
                    <div className={`container `}>
                      <img className={` ${styles["image"]}`} src={related} alt="Card" />
                      <p className={` mt-3 ${styles["card-title"]}`}>Coaster 506222-CO Loveseat</p>
                      <p className={` mt-3 ${styles["card-text"]} `}>$765.99</p>
                    </div>
                  </div>
                  <div className={`col-4`}>
                    <div className={`container `}>
                      <img className={` ${styles["image"]}`} src={related} alt="Card" />
                      <p className={` mt-3 ${styles["card-title"]}`}>Coaster 506222-CO Loveseat</p>
                      <p className={` mt-3 ${styles["card-text"]} `}>$765.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetail;
