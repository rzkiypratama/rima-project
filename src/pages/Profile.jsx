import React, { useEffect } from "react";
import styles from "../styles/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/actions/auths";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import title from "../helper/title";
//component
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

// Import Image
import pencil from "../assets/profile/img_pencil.png";
// import { getProfile } from "../utils/fetchers";
import profileActions from "../redux/actions/profile";
// import Parker from "../assets/profile/parker.jpeg";
// import axios from "axios";
function Profile() {
  title("Profile");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState(true);

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
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [display, setDisplay] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [datas, setDatas] = useState([]);
  const profiles = useSelector((state) => state.profile.profileUser);
  const data = useSelector((state) => state.profile.profileData);
  //  console.log(profiles);
  //  handle input image

  //   const [gender, setGender] = useState(profiles.gender);
  //   const [phone, setPhone] = useState(profiles.phone);
  //   const [username, setUsername] = useState(profiles.name);

  const inputImage = (event) => {
    console.log(image);
    if (event.target.files && event.target.files[0]) {
      setDisplay(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };

  //  didmount
  useEffect(() => {
    // console.log(profiles);
    // console.log(userInfo.id);
    // console.log("Data :", datas);
    dispatch(profileActions.profileThunk(setDatas));
    setDisplay(profiles.image);
    setEmail(data.email);
    setRole(userInfo.role);
    // const urlGetProfile = `${process.env.REACT_APP_BACKEND_HOST}/profile/:${userInfo.id}`;
    // axios
    //    .get(urlGetProfile, {
    //       headers: {
    //          "x-access-token": userInfo.token,
    //       },
    //    })
    //    .then((res) => {
    //       console.log(res.data);
    //       // console.log(res.data.data.profileUser[0]);
    //       // console.log(res.data.data.profileData[0].email);
    //       dispatch(profileActions.profileThunk(setDatas));
    //       const data = res.data.data.profileUser[0];
    //       setName(data.name);
    //       setGender(data.gender);
    //       setEmail(res.data.data.profileData[0].email);
    //       setPhone(data.phone);
    //       setImage(data.image);
    //       setDisplay(data.image);
    //    })
    //    .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  //  patch
  const [gender, setGender] = useState(profiles.gender);
  const [phone, setPhone] = useState(profiles.phone);
  const [username, setUsername] = useState(profiles.name);
  const [image, setImage] = useState(profiles.image);
  const [address, setAddress] = useState(profiles.address);

  const SendRequest = (e) => {
    e.preventDefault();
    // console.log(image);
    // console.log(address);
    // console.log(phone);
    // console.log(username);
    // console.log(gender);
    let formData = new FormData();
    // let bodyFromDataUser = null;
    if (address) formData.append("address", address);
    if (image) formData.append("image", image);
    if (phone) formData.append("phone", phone);
    if (username) formData.append("name", username);
    if (gender) formData.append("gender", gender);
    for (var pair of formData.entries()) {
      console.log(pair[0] + " - " + pair[1]);
    }
    console.log(formData);
    if (formData) dispatch(profileActions.updateProfileThunk(formData));
    // const url = `${process.env.REACT_APP_BACKEND_HOST}/profile/edit`;
    // console.log(userInfo.token);
    // axios
    //    .patch(url, formData, {
    //       headers: {
    //          "x-access-token": userInfo.token,
    //          "Content-Type": "multipart/form-data",
    //       },
    //    })
    //    .then((res) => {
    //       console.log(res.data);
    //       // console.log(res.data.data.profileUser[0]);
    //       // console.log(res.data.data.profileData[0].email);
    //       // dispatch(profileActions.profileThunk(setDatas));
    //       // const data = res.data.data.profileUser[0];
    //    })
    //    .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className={`container-fluid p-5 ${styles["cont-fluid"]}`}>
        <div className="container justify-content-center">
          <p className={`text-center  ${styles["profile"]}`}>Profile</p>
          <p className={`text-center fs-6 ${styles["text-profile"]}`}>See your notifications for the latest updates</p>
        </div>
      </div>
      <div className={`container d-flex mt-5 ${styles["cont-profile"]}`}>
        <span>
          <label htmlFor="images">
            <img className={`${styles["profile-picture"]} ${styles["cursor"]}`} src={display} alt="/" />
            {/* <img
                     src={pencil}
                     alt="pencil"
                     className={` ${styles["svg"]} ${styles["cursor"]}`}
                  /> */}
          </label>
          <input type="file" id={"images"} className="d-none" onChange={inputImage} />
        </span>

        <span className={`fs-3 ms-3 mt-2 ${styles["name"]}`}>
          {/* kondisi ketika click muncul jadi input */}
          {showInput ? (
            <p>{username}</p>
          ) : (
            <input
              className={styles.username}
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(username);
              }}
            />
          )}
          <p className="fs-6">
            as <span className="fw-bold">{role}</span>
          </p>
        </span>
        <img
          src={pencil}
          alt="pencil"
          className={` ${styles["svg"]} ${styles["cursor"]}`}
          onClick={() => {
            showInput ? setShowInput(false) : setShowInput(true);
            console.log("click");
          }}
        />
      </div>
      <div className="container mt-5">
        <form className={`form-floating `}>
          <input
            type="text"
            className={`form-control my-auto ${styles["floating-form"]}`}
            id="floatingInputValue"
            placeholder="Male / Female "
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
              console.log(e.target.value);
            }}
          />

          <label htmlFor="floatingInputValue">Gender</label>
          <div className={`d-flex justify-content-end ${styles["cont-edit"]}`}>
            <p className={`my-auto me-3 fs-5 ${styles["edit-text"]}`}>EDIT</p>
            <img src={pencil} alt="pencil" className={` ${styles["pencil"]} ${styles["cursor"]}`} />
          </div>
        </form>
        <section className="form-floating ">
          <input
            type="email"
            className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-2"]}`}
            id="floatingInputValue"
            placeholder="name@example.com"
            defaultValue={email}
            // onChange={(e) => {
            //    setEmail(e.target.value);
            //    console.log(e.target.value);
            // }}
          />
          <label htmlFor="floatingInputValue">Your Email</label>
          <div className={`d-flex justify-content-end ${styles["cont-edit"]}`}>
            <p className={`my-auto me-3 fs-5 ${styles["edit-text"]}`}>EDIT</p>
            <img src={pencil} alt="pencil" className={` ${styles["pencil"]} ${styles["cursor"]}`} />
          </div>
        </section>
        <section className="form-floating">
          <input
            type="tel"
            className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-3"]}`}
            id="floatingInputValue"
            placeholder=" "
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              console.log(e.target.value);
            }}
          />
          <label htmlFor="floatingInputValue">Phone</label>
          <div className={`d-flex justify-content-end ${styles["cont-edit"]}`}>
            <p className={`my-auto me-3 fs-5 ${styles["edit-text"]}`}>EDIT</p>
            <img src={pencil} alt="pencil" className={` ${styles["pencil"]} ${styles["cursor"]}`} />
          </div>
        </section>
        <section className="form-floating">
          <input
            type="tel"
            className={`form-control my-auto ${styles["floating-form"]} ${styles["floating-form-3"]}`}
            id="floatingInputValue"
            placeholder=" "
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              console.log(address);
            }}
          />
          <label htmlFor="floatingInputValue">address</label>
          <div className={`d-flex justify-content-end ${styles["cont-edit"]}`}>
            <p className={`my-auto me-3 fs-5 ${styles["edit-text"]}`}>EDIT</p>
            <img src={pencil} alt="pencil" className={` ${styles["pencil"]} ${styles["cursor"]}`} />
          </div>
        </section>

        <div className={`${styles.buttons} d-flex flex-md-row flex-column justify-content-between align-items-center`}>
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
            <button type="submit" className={`btn btn-warning my-3 fa-xs ${styles["logout"]} `}>
              <div className="d-flex justify-content-center">
                <i className="bi bi-credit-card-2-front fa-2x"></i>
                <p className="my-auto ms-3 fs-5">Edit Password</p>
              </div>
            </button>
          </section>
          {/* button saved data buat kondisi jika edit pada form diklik kan muncul button */}
          <button onClick={SendRequest} type="submit" className={`btn btn-success my-3 fa-xs ${styles["logout"]} d-flex justify-content-center align-items-center`}>
            <div className="d-flex justify-content-center">
              <i className="bi bi-person-check fa-2x"></i>
              <p className="my-auto ms-3 fs-5">Save</p>
            </div>
          </button>
        </div>
      </div>
      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>{/* <Modal.Title>Monlight</Modal.Title> */}</Modal.Header>
        <Modal.Body>Are you sure to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={logoutHandler}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Profile;
