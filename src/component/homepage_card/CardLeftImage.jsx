import React from "react";

// assets
import content_first from "../../assets/homepage/img_content_first.png";
import styles from "./CardLeftImage.module.css";
import { Link } from "react-router-dom";

function CardLeftImage(props) {
   return (
      <>
         <section className="row row-cols-sm-2 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-content-center">
            <section
               className={`${styles.content__left} col-12 col-sm-12 col-md-5 col-lg-5`}
            >
               <img
                  className={`${styles.images}`}
                  src={props.images}
                  alt="content_first"
               />
            </section>
            <section className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center px-0 px-sm-0">
               <article
                  className={`${styles.content_article_right} d-flex justify-content-center align-items-center p-4`}
               >
                  <div>
                     <h1>{props.title}</h1>
                     <p>{props.desc}</p>
                     <Link
                        to={`/product/detail/${props.id}`}
                        className={styles.links}
                     >
                        <div className="d-flex justify-content-start align-items-center">
                           <div className={`${styles.line} me-4`}></div>
                           <span className="fw-bold">SHOP NOW</span>
                        </div>
                     </Link>
                  </div>
               </article>
            </section>
         </section>
      </>
   );
}

export default CardLeftImage;
