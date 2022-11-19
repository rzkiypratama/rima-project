import React, { useEffect } from "react";
import styles from "../styles/Profile.module.css";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/auths";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
//component
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

// Import Image
import pencil from "../assets/profile/img_pencil.png";
// import Parker from "../assets/profile/parker.jpeg";

function Profile() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const userInfo = JSON.parse(localStorage["userInfo"] || "{}");

   const toLogout = () => navigate("/login");
   const logoutHandler = (e) => {
      e.preventDefault();
      dispatch(authActions.logoutThunk(userInfo.token, toLogout));
      localStorage.removeItem("userInfo");
   };
   // get profile
   const [name, setName] = useState("");
   const [gender, setGender] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState(0);
   const [image, setImage] = useState("");
   const [display, setDisplay] = useState("");

   //  handle input image
   const inputImage = (event) => {
      // console.log(image);
      if (event.target.files && event.target.files[0]) {
         setDisplay(URL.createObjectURL(event.target.files[0]));
         setImage(event.target.files[0]);
      }
   };

   //  didmount
   useEffect(() => {
      console.log(userInfo.id);
      const urlGetProfile = `${process.env.REACT_APP_BACKEND_HOST}/profile/:${userInfo.id}`;
      axios
         .get(urlGetProfile, {
            headers: {
               "x-access-token": userInfo.token,
            },
         })
         .then((res) => {
            console.log(res.data);
            // console.log(res.data.data.profileUser[0]);
            // console.log(res.data.data.profileData[0].email);
            const data = res.data.data.profileUser[0];
            setName(data.name);
            setGender(data.gender);
            setEmail(res.data.data.profileData[0].email);
            setPhone(data.phone);
            setImage(data.image);
            setDisplay(data.image);
         })
         .catch((err) => console.log(err));
   }, []);
   return (
      <>
         <Navbar />
         <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
            <div className="container justify-content-center">
               <p className={`text-center  ${styles["profile"]}`}>Profile</p>
               <p className={`text-center fs-6 ${styles["text-profile"]}`}>
                  See your notifications for the latest updates
               </p>
            </div>
         </div>
         <div className={`container d-flex mt-5 ${styles["cont-profile"]}`}>
            <img
               className={`${styles["profile-picture"]} ${styles["cursor"]}`}
               src={display}
               alt="/"
            />

            <p className={`fs-3 ms-3 mt-2 ${styles["name"]}`}>
               {name}
               <p className="fs-6">as Costumer</p>
            </p>
            <span>
               <input
                  type="file"
                  id={"images"}
                  className="d-none"
                  onChange={inputImage}
               />
               <label htmlFor="images">
                  <img
                     src={pencil}
                     alt="pencil"
                     className={` ${styles["svg"]} ${styles["cursor"]}`}
                  />
               </label>
            </span>
         </div>
         <form className="container mt-5">
            <form className={`form-floating `}>
               <input
                  type="text"
                  className={`form-control my-auto ${styles["floating-form"]}`}
                  id="floatingInputValue"
                  placeholder="Male / Female "
                  value={gender}
               />

               <label for="floatingInputValue">Gender</label>
               <div
                  className={`d-flex justify-content-end ${styles["cont-edit"]}`}
               >
                  <p className={`my-auto me-3 fs-5 ${styles["edit-text"]}`}>
                     EDIT
                  </p>
                  <img
                     src={pencil}
                     alt="pencil"
                     className={` ${styles["pencil"]} ${styles["cursor"]}`}
                  />
               </div>
            </form>
            <form className="form-floating ">
               <input
                  type="email"
                  className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-2"]}`}
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  value={email}
               />
               <label for="floatingInputValue">Your Email</label>
               <div
                  className={`d-flex justify-content-end ${styles["cont-edit"]}`}
               >
                  <p className={`my-auto me-3 fs-5 ${styles["edit-text"]}`}>
                     EDIT
                  </p>
                  <img
                     src={pencil}
                     alt="pencil"
                     className={` ${styles["pencil"]} ${styles["cursor"]}`}
                  />
               </div>
            </form>
            <form className="form-floating">
               <input
                  type="tel"
                  className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-3"]}`}
                  id="floatingInputValue"
                  placeholder=" "
                  value={phone}
               />
               <label for="floatingInputValue">Phone</label>
               <div
                  className={`d-flex justify-content-end ${styles["cont-edit"]}`}
               >
                  <p className={`my-auto me-3 fs-5 ${styles["edit-text"]}`}>
                     EDIT
                  </p>
                  <img
                     src={pencil}
                     alt="pencil"
                     className={` ${styles["pencil"]} ${styles["cursor"]}`}
                  />
               </div>
            </form>

            <div
               className={`${styles.buttons} d-flex flex-md-row flex-column justify-content-between align-items-center`}
            >
               <section className="d-flex flex-md-row flex-column w-100">
                  <button
                     type="submit"
                     className={`btn btn-danger my-3 fa-xs ${styles["logout"]} me-4`}
                     onClick={(e) => {
                        e.preventDefault();
                        handleShow();
                     }}
                  >
                     <div className="d-flex justify-content-center">
                        <i className="bi bi-box-arrow-right fa-2x"></i>
                        <p className="my-auto ms-3 fs-5">Logout</p>
                     </div>
                  </button>

                  {/* edit password dengan modal form data post to api*/}
                  <button
                     type="submit"
                     className={`btn btn-warning my-3 fa-xs ${styles["logout"]} `}
                  >
                     <div className="d-flex justify-content-center">
                        <i class="bi bi-credit-card-2-front fa-2x"></i>
                        <p className="my-auto ms-3 fs-5">Edit Password</p>
                     </div>
                  </button>
               </section>
               {/* button saved data buat kondisi jika edit pada form diklik kan muncul button */}
               <button
                  type="submit"
                  className={`btn btn-success my-3 fa-xs ${styles["logout"]} d-flex justify-content-center align-items-center`}
               >
                  <div className="d-flex justify-content-center">
                     <i class="bi bi-person-check fa-2x"></i>
                     <p className="my-auto ms-3 fs-5">Save</p>
                  </div>
               </button>
            </div>
         </form>
         <Footer />
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>RIMA Furniture</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to logout?</Modal.Body>
            <Modal.Footer>
               <Button variant="danger" onClick={logoutHandler}>
                  Yes
               </Button>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default Profile;
