import React, { Component } from "react";
import styles from "../styles/CardHistory.module.css";
import { Link } from "react-router-dom";

export default class CardHistory extends Component {
  render() {
    return (
      <>
        <Link to={"#"} className={`${styles["border"]} col-lg-3 row my-2 mx-1`}>
          <div className="col col-sm col-md col-lg-3 py-2">
            <img
              className={`${styles["imagine"]} rounded-circle`}
              src={`http://localhost:8080/${this.props.image}`}
              alt=""
            />
          </div>
          <article className="col col-sm col-md col-lg ms-2 py-2">
            <p className={`${styles["title"]}`}>{this.props.menu}</p>
            <p className={`${styles["IDR"]}`}>IDR {this.props.price}</p>
            <p className={`${styles["delivered"]}`}>{this.props.status}</p>
          </article>
        </Link>
      </>
    );
  }
}
