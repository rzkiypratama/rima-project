import React from 'react';

//import css
import styles from '../styles/Favorite.module.css';

//import components
import Header from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';
import CardWhislist from '../component/whislist/whislist';

const Favorite = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className={styles['content']}>
            <div className={styles['favorite']}>
              favorite <span className={styles['arrow']}>{'>'}</span>
            </div>
            <div className={styles['content-favorite']}>favorite</div>
            <p className={styles['text']}>Pay and get your ordered items</p>
          </div>
          <div className={`${styles['content-border']} container-fluid`}>
            <div className={styles['line-top']}></div>
            <div className={styles['text-product']}>
              <div className={styles['']}>Product</div>
              <div className={styles['text-stock']}>Stock Status</div>
              <div className={styles['text-price']}>Price</div>
            </div>
            <div className={styles['content-border-botom']}></div>
            <CardWhislist />
            <CardWhislist />
            <CardWhislist />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Favorite;