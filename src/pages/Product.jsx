import React from 'react'
import styles from '../styles/Product.module.css'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

function Product() {
  return (
    <>
    <Navbar/>
    <main className="container-fluid p-0">

    <div className={styles["title-container"]}>
      <div className={styles.title}>
      <h1>Let's Shopping</h1>
      <p>Find and buy the one you like</p>
      </div>
    </div>

    <section className={styles["main-product"]}>
    <div className="container-fluid p-0 d-flex">
    <div className="col-4 bg-primer">
      <div className={styles["category-list"]}>
        <div className={styles.category}>
        <h4>Categories</h4>
      <ul>
        <li>Accessories</li>
        <li>Brands</li>
        <li>Clothing</li>
        <li>Fashion</li>
        <li>Furniture</li>
        <li>Men</li>
        <li>Woman</li>
        <li>Shoes</li>
        <li>Wallets</li>
      </ul>
        </div>

        <div className={styles["category-number"]}>
        <h4 className={styles.stock}>&nbsp;</h4>
        <ul>
        <li>5</li>
        <li>15</li>
        <li>3</li>
        <li>8</li>
        <li>9</li>
        <li>6</li>
        <li>8</li>
        <li>10</li>
        <li>11</li>
      </ul>
        </div>
      </div>
      
      <div className="price-slider">
      <label for="customRange1" class="form-label">Price</label>
      <input type="range" class="form-range" id="customRange1"/>
      </div>
    </div>


    <div className="col-8 bg-danger">
      <h1>produk</h1>
    </div>
    </div>
    </section>

    </main>
    <Footer/>
    </>
  )
}

export default Product