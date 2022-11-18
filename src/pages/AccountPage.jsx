import React from 'react';
import styles from '../styles/AccountPage.module.css'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

function accountPage() {
  return (
    <>
    <Navbar/>
    <main className="container-fluid p-0">

    <div className={styles["title-container"]}>
      <div className={styles.title}>
      <h1>My Account</h1>
      <p>Register and log in with your account to be able to shop at will</p>
      </div>
    </div>

    <div className={`${styles["form-container"]} container`}>
    <form action='login'>
      <div className={styles["form-login"]}>
      <h1>Login</h1>
      <div className={styles["input-box"]}>
      <input type="text" name="email" id="email" placeholder='Username or email address *' />
      <input type="text" name="password" id="password" placeholder='Password *' />
      </div>
      <div className={styles["login-btn"]}>
      <button>Login</button>
      </div>
      <div className={styles["remember-password"]}>
        <div className={styles["checkbox-remember"]}>
        <input type="checkbox" name="rememberpwd" id="" />
        <label htmlFor="rememberpwd">Remember me</label>
        </div>
        <div className={styles["forgot-password"]}>
        <p>Forget your password?</p>
        </div>
      </div>
      </div>
    </form>

    <form action="create-account">
      <div className={styles["form-create"]}>
        <h1>Create Account</h1>
        <div className={styles["input-box"]}>
      <input type="text" name="email" id="email" placeholder='Email address *' />
      <input type="text" name="password" id="password" placeholder='Password *' />
      </div>
      <div className={styles["checkbox-create"]}>
        <input type="checkbox" name="customer" id="" />
        <label htmlFor="register">I'm Customer</label>
        <input type="checkbox" name="register" id="" />
        <label htmlFor="register">I'm Seller</label>
      </div>
      <div className={styles["register-btn"]}>
      <button>Register</button>
      </div>
      </div>
    </form>
    </div>

    </main>
    <Footer/>
    </>
  )
}

export default accountPage