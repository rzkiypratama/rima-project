import React from "react";
import styles from "../footer/Footer.module.css";

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section> */}

        <section className="p-4 pb-4 bg-black">
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
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    ABOUT US
                  </a>
                </p>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    HELP CENTER
                  </a>
                </p>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    LICENSES
                  </a>
                </p>

                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    MARKET API
                  </a>
                </p>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    SITE MAP
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}>USERFUL</h6>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    The Collections
                  </a>
                </p>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    Size Guide
                  </a>
                </p>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    Lookbook
                  </a>
                </p>
                <p className={`mb-4`}>
                  <a href="#!" className={`text-reset text-decoration-none ${styles["li"]}`}>
                    Instagram Shop
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
                <h6 className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}>Contact us</h6>
                <p>
                  <svg className={` my-2 ${styles["svg"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                  info@la-studioweb.com
                </p>
                <p>
                  <svg className={`my-2 ${styles["svg"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                  </svg>
                  +44.954.954.86
                </p>
                <p>
                  <svg className={`my-2 ${styles["svg"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                  </svg>
                  9:00am - 19:00pm Monday - Sunday
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
