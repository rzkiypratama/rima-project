import React from "react";
import styles from "../footer/Footer.module.css";

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section> */}

        <section className="p-4 pb-2 bg-black">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 ms-0 mb-4">
                <h6 className={`text-uppercase fw-bold mb-4 ${styles["company"]}`}>RIMA</h6>
                <p>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</p>
                <div className={`${styles["a"]}`}>
                  <a href=" " className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href=" " className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href=" " className="me-4 text-reset">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href=" " className="me-4 text-reset">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}>COMPANY</h6>
                <p>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    ABOUT US
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    HELP CENTER
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    LICENSES
                  </a>
                </p>

                <p>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    MARKET API
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    SITE MAP
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}>USERFUL</h6>
                <p>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    The Collections
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    Size Guide
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    Lookbook
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    Instagram Shop
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}>Contact us</h6>
                <p>
                  <i className="fas fa-envelope me-3"></i> info@la-studioweb.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +44.954.954.86
                </p>
                <p>
                  <i className="fas fa-clock me-3"></i>
                  <span /> 9:00am - 19:00pm Monday - Sunday
                </p>
              </div>
            </div>
          </div>
          <div className={`text-center pt-4 ${styles["text-copyright"]}`}>© 2022 RIMA STORE ALL RIGHT RESERVED</div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
