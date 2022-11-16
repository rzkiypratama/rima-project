import React from 'react';
import styles from '../styles/AccountPage.module.css'

function accountPage() {
  return (
    <>
    <div className={styles["title-container"]}>
      <div className={styles.title}>
      <h1>My Account</h1>
      <p>Register and log in with your account to be able to shop at will</p>
      </div>
    </div>
    </>
  )
}

export default accountPage