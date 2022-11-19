import React from "react";
import styles from "../tableSelling/Table.module.css";

// Import Image
import chair from "../../assets/sellerProduct/chair.png";
import check from "../../assets/sellerProduct/checklist.png";

function Table() {
  return (
    <div>
      <section className="container mt-5">
        <hr className="my-0" />
        <table className={`${styles["table"]} table `}>
          <thead>
            <tr>
              <th className={`${styles["product"]}`} scope="col">
                Product
              </th>
              <th className="d-flex justify-content-center " scope="col">
                Stock Status
              </th>
              <th className={`${styles["price-title"]}`} scope="col">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <Table />
          </tbody>
        </table>

        <tr>
          <th scope="row">
            <div className="d-flex gap-3 align-items-center">
              <img src={chair} alt="/" />
              <p />
              Dining Side Chair in Beige
            </div>
          </th>
          <td>
            <div className={` ${styles["stock"]} d-flex align-items-center `}>
              <img src={check} alt="/" />
              10 Stock
            </div>
          </td>
          <td>
            <div className={` ${styles["price"]} d-flex align-items-center `}>
              $765.99 <button className="btn btn-danger"> Delete</button>
            </div>
          </td>
        </tr>
      </section>
    </div>
  );
}

export default Table;
