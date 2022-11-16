import React from 'react'
import styles from '../styles/ForgotPassword.module.css'

export default function ForgotPassword() {
  return (
    <>
    <main className="container-fluid p-0">

    <div className={styles["title-container"]}>
      <div className={styles.title}>
      <h1>My Account</h1>
      <p>Register and log in with your account to be able to shop at will</p>
      </div>
    </div>

    <div className={`${styles["form-container"]} container`}>
    <form action='forgot'>
      <div className={styles["form-forgot"]}>
      <h1>Forgot your Password?</h1>
      <p>Don't worry! Just fill in your email and we'll send you a link</p>
      <div className={styles["input-box"]}>
      <input type="text" name="email" id="email" placeholder='Username or email address *' />
      </div>
      <div className={styles["forgot-btn"]}>
      <button>Reset Password</button>
      </div>
      </div>
    </form>

    
    </div>

    </main>
    </>
  )
}
