import React, { Component } from "react";
import styles from "../styles/CardHistory.module.css";
import gambar from "../assets/image2.png";
import { Link } from "react-router-dom";

export default class CardHistory extends Component {
  render() {
    return (
      <>
        <Link to={"#"} className={`${styles["border"]} col-lg-3 row my-2 mx-1`}>
          <div className="col col-sm col-md col-lg-3 py-2">
            <img
              className={`${styles["imagine"]} rounded-circle`}
              src={gambar}
              alt=""
            />
          </div>
          <article className="col col-sm col-md col-lg ms-2 py-2">
            <p className={`${styles["title"]}`}>Veggie tomato mix</p>
            <p className={`${styles["IDR"]}`}>IDR 34.000</p>
            <p className={`${styles["delivered"]}`}>Delivered </p>
          </article>
        </Link>
      </>
    );
  }
}
