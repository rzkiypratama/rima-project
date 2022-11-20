import React, { useEffect, useState } from "react";
// styles
import styles from "../styles/Homapage.module.css";

//component
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import CardImageLeft from "../component/homepage_card/CardLeftImage";
import CardImageRight from "../component/homepage_card/CardRightImage";
// assets
import backtowork from "../assets/homepage/img_service_backtowork.png";
import furniture from "../assets/homepage/img_service_furniture.png";
import furnitureoffice from "../assets/homepage/img_service_furniture_office.png";
import workspace from "../assets/homepage/img_service_workspace.png";
import axios from "axios";
// helper
import title from "../helper/title";
function HomePage() {
   title("RIMA FURNITURE");
   const [product, setProduct] = useState([]);

   useEffect(() => {
      window.scrollTo(0, 0);
      const urlProduct = `${process.env.REACT_APP_BACKEND_HOST}/product?limit=6&page=1&sortby=latest`;
      console.log(product);
      axios
         .get(urlProduct)
         .then((res) => {
            // const images = res.data.data.data[0].image;
            // console.log(images);
            // const listImage = images.replace(/{/g, "").replace(/}/g, "");
            // let imageLink = [];
            // listImage.split(",").map((link) => imageLink.push(link));
            setProduct(res.data.data.data);
            console.log(res.data.data.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         <main className="container-fluid p-0">
            {/* content main */}
            <section className={styles.home__bar}>
               <Navbar />

               <section
                  className={` d-flex justify-content-center align-items-center p-0`}
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
                        <div className={`${styles.arrow}`}>
                           <i
                              className={
                                 "bi bi-arrow-down-short fs-1 fw-bolder"
                              }
                           ></i>
                        </div>
                     </section>
                  </article>
               </section>
            </section>

            {/* content first */}
            {product.map((e, index) => {
               const listImage = e.image
                  .replace(/{/g, "")
                  .replace(/}/g, "")
                  .replace(/"\"/g, "")
                  .replace(/}/g, "");

               let imageLink = [];
               listImage.split(",").map((link) => imageLink.push(link));
               console.log(imageLink);

               index % 2 === 1 ? (
                  <CardImageLeft
                     images={imageLink[0]}
                     title={e.name}
                     desc={e.description}
                     key={e.id}
                     id={e.id}
                  />
               ) : (
                  <CardImageRight
                     images={e.image}
                     title={e.name}
                     desc={e.description}
                     id={e.id}
                     key={e.id}
                  />
               );
            })}

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
         <Footer />
      </>
   );
}

export default HomePage;
