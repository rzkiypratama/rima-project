import React, { useState } from "react";
import Header from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import styles from "../styles/Register.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerActions from "../redux/actions/register";

function Regist() {
   const navigate = useNavigate();
   const dispacth = useDispatch();
   const [body, setBody] = useState({});
   const [selected, setSelected] = useState("register");

   const [register, setIsRegister] = useState(true)
   const [verify, setIsVerify] = useState(false)
   const [username, setIsUsername] = useState(false)
   const [loading, setIsLoading] = useState(false)

   const changeHandler = (e) =>
      setBody({ ...body, [e.target.name]: e.target.value });
   console.log(body);

   const toLogin = () => navigate("/login");

   const submitHandler = (e) => {
      e.preventDefault();
      if (!body.email || !body.password || !body.role)
         return toast.error("All input must be fulfilled", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      dispacth(registerActions.registerThunk(body, toLogin));
      return toast.success(`Congrats! ${body.email} register success`, {
         position: "top-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
   };

  const showPage = () => {
      if(loading) {
         return (
            <div className={styles["loader-container"]}>
               <div className={styles.spinner}></div>
            </div>
         );
      };

      if (register && !verify && !username) {
         return (
            <div className={`row ${styles["form-container"]}`}>
               <div className="col-lg-3 offset-lg-2">
                  <div className={styles["account"]}>
                     <div className={styles["login-account"]}>
                        <h1 onClick={toLogin}>Login Account</h1>
                     </div>
                     <div className={styles["regist-account"]}>
                        <h1
                           onClick={() => {
                              setSelected("register");
                           }}
                           className={
                              selected === "register" && `${styles["selected"]}`
                           }
                        >
                           Register Account
                        </h1>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 offset-lg-1 col-12">
                  <div className={styles["form"]}>
                     <div className={styles["title-form"]}>
                        <h1>Create Account</h1>
                     </div>
                     <div className={styles["form-login"]}>
                        <form action="">
                           <input
                              type="text"
                              name="email"
                              placeholder="Email address*"
                              onChange={changeHandler}
                           />
                           <input
                              type="password"
                              name="password"
                              placeholder="Password *"
                              onChange={changeHandler}
                           />
                           <div className={styles["radio"]}>
                              <div className={styles["input"]}>
                                 <input
                                    type="checkbox"
                                    name="role"
                                    value="customer"
                                    onChange={changeHandler}
                                 />
                                 <label htmlFor="">I'm Customer</label>
                              </div>
                              <div className={styles["input"]}>
                                 <input
                                    type="checkbox"
                                    name="role"
                                    value="seller"
                                    onChange={changeHandler}
                                 />
                                 <label htmlFor="">I'm Seller</label>
                              </div>
                           </div>
                        </form>
                     </div>
                     <div className={styles["btn-login"]}>
                        <button onClick={submitHandler}>Register</button>
                     </div>
                  </div>
               </div>
            </div>
         )
      }
      if (!register && verify && !username) {
         return (
            <div className={`row ${styles["form-container-verify"]}`}>
               <div className="">
               </div>
               <div className="col-lg-5 col-12 justify-content-center">
                  <div className={styles["form-verify"]}>
                     <div className={styles["title-form-verify"]}>
                        <h1>Verify your email address</h1>
                        <p>Thankyou for signup with us. To verify, we sent OTP to your email</p>
                     </div>
                     <div className={styles["form-login-verify"]}>
                        <form action="">
                           <input
                              type="text"
                              name="email"
                              placeholder="Input OTP here*"
                              onChange={changeHandler}
                           />
                        </form>
                     </div>
                     <div className={styles["btn-verify"]}>
                        <button>Confirm</button>
                     </div>
                  </div>
               </div>
            </div>
         )
      }
      if (!register && !verify && username) {
         return (
            <div className={`row ${styles["form-container-username"]}`}>
               <div className="">
               </div>
               <div className="col-lg-5 col-12 justify-content-center">
                  <div className={styles["form-username"]}>
                     <div className={styles["title-form-username"]}>
                        <h1>Email verified!</h1>
                        <p>Set username and start your journey at Rima Furniture</p>
                     </div>
                     <div className={styles["form-login-username"]}>
                        <form action="">
                           <input
                              type="text"
                              name="email"
                              placeholder="Input username here *"
                              onChange={changeHandler}
                           />
                        </form>
                     </div>
                     <div className={styles["btn-username"]}>
                        <button>Confirm</button>
                     </div>
                  </div>
               </div>
            </div>
         )
      }
  }


   return (
      <>
         <Header />
         <div className="container-fluid">
            <div className="row">
               <main className={`col-lg-12 ${styles["page-title"]}`}>
                  <h1>My Account</h1>
                  <p>
                     Register and log in with your account to be able to shop at
                     will
                  </p>
               </main>
            </div>
         </div>
         <div className="container-fluid">
            <form action="register">{showPage()}</form>

            {/* email verification form start */}

            

            {/* email verification end */}

            {/* setup username start */}

            

            {/* setup username end */}

         </div>
         <ToastContainer />
         <Footer />
      </>
   );
}

export default Regist;
