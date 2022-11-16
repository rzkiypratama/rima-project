import React from 'react'
import styles from '../styles/Chat.module.css'

function Chat() {
  return (
    <>
    <main className="container-fluid p-0">

    <div className={styles["title-container"]}>
      <div className={styles.title}>
      <h1>Chat</h1>
      <p>See your notifications for the latest updates</p>
      </div>
    </div>

    <div className={`${styles["form-container"]} container`}>
    
    </div>

    </main>
    </>
  )
}

export default Chat