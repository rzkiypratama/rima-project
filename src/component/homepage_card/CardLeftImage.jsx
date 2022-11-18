import React from "react";

// assets
import content_first from "../../assets/homepage/img_content_first.png";
import styles from "./CardLeftImage.module.css";

function CardLeftImage() {
   return (
      <>
         <section className="row row-cols-sm-2 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-content-center">
            <section
               className={`${styles.content__left} col-12 col-sm-12 col-md-5 col-lg-5`}
            >
               <img
                  className={`${styles.images}`}
                  src={content_first}
                  alt="content_first"
               />
            </section>
            <section className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center px-0 px-sm-0">
               <article
                  className={`${styles.content_article_right} d-flex justify-content-center align-items-center p-4`}
               >
                  <div>
                     <h1>
                        Mid-Century 1929 <br /> Sofa with Pilow
                     </h1>
                     <p>
                        Donec nunc nunc, gravida vitae diam vel, varius interdum
                        erat. Quisque a nunc vel diam auctor commodo. Curabitur
                        blandit ultrices ex. Curabitur ut magna dignissim,
                        dignissim neque et, placerat risus. Morbi dictum lectus
                        quam
                     </p>
                     <div className="d-flex justify-content-start align-items-center">
                        <div className={`${styles.line} me-4`}></div>
                        <span className="fw-bold">SHOP NOW</span>
                     </div>
                  </div>
               </article>
            </section>
         </section>
      </>
   );
}

export default CardLeftImage;
