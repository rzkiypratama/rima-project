import React from "react";
// styles
import styles from "../styles/Homapage.module.css";

// assets
import content_first from "../assets/homepage/img_content_first.png";
import backtowork from "../assets/homepage/img_service_backtowork.png";
import furniture from "../assets/homepage/img_service_furniture.png";
import furnitureoffice from "../assets/homepage/img_service_furniture_office.png";
import workspace from "../assets/homepage/img_service_workspace.png";

function HomePage() {
<<<<<<< HEAD
   return (
      <>
         <main className="container-fluid">
            {/* content main */}
            <section
               className={`${styles.home__bar} d-flex justify-content-center align-items-center`}
            >
               <article className={`${styles.content__home}`}>
                  <h1>Minimal Furniture Store</h1>
                  <p>
                     Donec nunc nunc, gravida vitae diam vel, varius interdum
                     erat. Quisque a nunc vel diam auctor commodo.
                     <br /> Curabitur blandit ultrices ex. Curabitur ut magna
                     dignissim, dignissim
                  </p>
                  <section className={`${styles.explore} text-center`}>
                     <p>Explore now</p>
                     <span>
                        <i className="bi bi-arrow-down-short fs-1 fw-bolder"></i>
                     </span>
                  </section>
               </article>
            </section>
            {/* content first */}
            <section className="row d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-content-center">
               <section className="col-12 col-10 col-sm-12 col-md-5 col-lg-5">
                  <img
                     className={`${styles.images} w-100`}
                     src={content_first}
                     alt="content_first"
                  />
               </section>
               <section className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center">
                  <article
                     className={`${styles.content_article_right} d-flex justify-content-center align-items-center`}
                  >
                     <div>
                        <h1>
                           Mid-Century 1929 <br /> Sofa with Pilow
                        </h1>
                        <p>
                           Donec nunc nunc, gravida vitae diam vel, varius
                           interdum erat. Quisque a nunc vel diam auctor
                           commodo. Curabitur blandit ultrices ex. Curabitur ut
                           magna dignissim, dignissim neque et, placerat risus.
                           Morbi dictum lectus quam
                        </p>
                        <div className="d-flex justify-content-start align-items-center">
                           <div className={`${styles.line} me-4`}></div>
                           <span className="fw-bold">SHOP NOW</span>
                        </div>
                     </div>
                  </article>
               </section>
            </section>
            {/* content two */}
            <section className="row d-flex flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse align-content-center ">
               <section className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center">
                  <article
                     className={`${styles.content_article_left} d-flex justify-content-center align-items-center`}
                  >
                     <div>
                        <h1>
                           Mid-Century 1929 <br /> Sofa with Pilow
                        </h1>
                        <p>
                           Donec nunc nunc, gravida vitae diam vel, varius
                           interdum erat. Quisque a nunc vel diam auctor
                           commodo. Curabitur blandit ultrices ex. Curabitur ut
                           magna dignissim, dignissim neque et, placerat risus.
                           Morbi dictum lectus quam
                        </p>
                        <div className="d-flex justify-content-start align-items-center">
                           <div className={`${styles.line} me-4`}></div>
                           <span className="fw-bold">SHOP NOW</span>
                        </div>
                     </div>
                  </article>
               </section>
               <section className="col-12 col-10 col-sm-12 col-md-5 col-lg-5">
                  <img
                     className={`${styles.images}`}
                     src={content_first}
                     alt="content_first"
                  />
               </section>
            </section>
            {/* content three */}
            <section className="row d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-content-center">
               <section className="col-12 col-10 col-sm-12 col-md-5 col-lg-5">
                  <img
                     className={`${styles.images} w-100`}
                     src={content_first}
                     alt="content_first"
                  />
               </section>
               <section className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center">
                  <article
                     className={`${styles.content_article_right} d-flex justify-content-center align-items-center`}
                  >
                     <div>
                        <h1>
                           Mid-Century 1929 <br /> Sofa with Pilow
                        </h1>
                        <p>
                           Donec nunc nunc, gravida vitae diam vel, varius
                           interdum erat. Quisque a nunc vel diam auctor
                           commodo. Curabitur blandit ultrices ex. Curabitur ut
                           magna dignissim, dignissim neque et, placerat risus.
                           Morbi dictum lectus quam
                        </p>
                        <div className="d-flex justify-content-start align-items-center">
                           <div className={`${styles.line} me-4`}></div>
                           <span className="fw-bold">SHOP NOW</span>
                        </div>
                     </div>
                  </article>
               </section>
            </section>
            {/* content four */}
            <section className="row d-flex flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse align-content-center ">
               <section className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center">
                  <article
                     className={`${styles.content_article_left} d-flex justify-content-center align-items-center`}
                  >
                     <div>
                        <h1>
                           Mid-Century 1929 <br /> Sofa with Pilow
                        </h1>
                        <p>
                           Donec nunc nunc, gravida vitae diam vel, varius
                           interdum erat. Quisque a nunc vel diam auctor
                           commodo. Curabitur blandit ultrices ex. Curabitur ut
                           magna dignissim, dignissim neque et, placerat risus.
                           Morbi dictum lectus quam
                        </p>
                        <div className="d-flex justify-content-start align-items-center">
                           <div className={`${styles.line} me-4`}></div>
                           <span className="fw-bold">SHOP NOW</span>
                        </div>
                     </div>
                  </article>
               </section>
               <section className="col-12 col-10 col-sm-12 col-md-5 col-lg-5">
                  <img
                     className={`${styles.images}`}
                     src={content_first}
                     alt="content_first"
                  />
               </section>
            </section>
            {/* content five */}
            <section className="row d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-content-center">
               <section className="col-12 col-10 col-sm-12 col-md-5 col-lg-5">
                  <img
                     className={`${styles.images} w-100`}
                     src={content_first}
                     alt="content_first"
                  />
               </section>
               <section className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center">
                  <article
                     className={`${styles.content_article_right} d-flex justify-content-center align-items-center`}
                  >
                     <div>
                        <h1>
                           Mid-Century 1929 <br /> Sofa with Pilow
                        </h1>
                        <p>
                           Donec nunc nunc, gravida vitae diam vel, varius
                           interdum erat. Quisque a nunc vel diam auctor
                           commodo. Curabitur blandit ultrices ex. Curabitur ut
                           magna dignissim, dignissim neque et, placerat risus.
                           Morbi dictum lectus quam
                        </p>
                        <div className="d-flex justify-content-start align-items-center">
                           <div className={`${styles.line} me-4`}></div>
                           <span className="fw-bold">SHOP NOW</span>
                        </div>
                     </div>
                  </article>
               </section>
            </section>
            {/* content six */}
            <section className="row d-flex flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse align-content-center ">
               <section className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center">
                  <article
                     className={`${styles.content_article_left} d-flex justify-content-center align-items-center`}
                  >
                     <div>
                        <h1>
                           Mid-Century 1929 <br /> Sofa with Pilow
                        </h1>
                        <p>
                           Donec nunc nunc, gravida vitae diam vel, varius
                           interdum erat. Quisque a nunc vel diam auctor
                           commodo. Curabitur blandit ultrices ex. Curabitur ut
                           magna dignissim, dignissim neque et, placerat risus.
                           Morbi dictum lectus quam
                        </p>
                        <div className="d-flex justify-content-start align-items-center">
                           <div className={`${styles.line} me-4`}></div>
                           <span className="fw-bold">SHOP NOW</span>
                        </div>
                     </div>
                  </article>
               </section>
               <section className="col-12 col-10 col-sm-12 col-md-5 col-lg-5">
                  <img
                     className={`${styles.images}`}
                     src={content_first}
                     alt="content_first"
                  />
               </section>
            </section>
            {/* services */}
            <section
               className={`${styles.services__bar} text-center d-flex flex-column justify-content-around align-items-center`}
            >
               <div className="">
                  <h3 className={`${styles.services__bar__title}`}>
                     Gave 5 stars for excellent customer service. I had a couple
                     of questions which they replied quickly to answer. If I
                     could give multiple reasons for my rating it would also be
                     for the design quality and customization to go along with
                     the great service. The theme is excellent, keep up the
                     great work.
                  </h3>
                  <p className={`${styles.services__line} my-5 mx-auto`}></p>
                  <p className={`${styles.services__ceo}`}>
                     Trevor Rivera - CEO IKEA
                  </p>
               </div>
               <section className="d-flex flex-row justify-content-around flex-wrap w-100">
                  <img
                     width={150}
                     className="p-3"
                     src={backtowork}
                     alt="backtowork"
                  />
                  <img
                     width={150}
                     className="p-3"
                     src={furniture}
                     alt="furniture"
                  />
                  <img
                     width={150}
                     className="p-3"
                     src={furnitureoffice}
                     alt="furnitureoffice"
                  />
                  <img
                     width={150}
                     className="p-3"
                     src={workspace}
                     alt="workspace"
                  />
               </section>
            </section>
         </main>
      </>
   );
=======
  return (
    <>
      <h1>Minimal Furniture Storelo</h1>
    </>
  );
>>>>>>> origin/Navbar
}

export default HomePage;
