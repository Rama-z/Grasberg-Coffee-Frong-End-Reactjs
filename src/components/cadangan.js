import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import styles from "../styles/HeaderProduct.module.css";
import imageCoba from "../assets/Profiles/coffee 3.png";
import { Link } from "react-router-dom";
import search from "../assets/Home/search.png";
import chat from "../assets/chat.png";
import profile from "../assets/profile.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <header
          className={`container-lg container container-sm container-xl ${styles["drop-nav"]} ${styles["header-margin"]} ${styles["dropdown"]}`}
        >
          <article
            className={`col col-sm col-lg-3 col-md-3 ${styles["drop-nav3"]} ${styles["gap-nav1"]}`}
          >
            <img src={imageCoba} alt="coffee" className="" />
            <div>Grasberg Coffee</div>
          </article>
          <div className={`${styles["dropbtn"]}`}>Menu</div>
          <nav
            className={`col col-sm-8 col-lg-6 col-md-6 ${styles["drop-nav"]} ${styles["gap-nav"]} ${styles["mid"]} ${styles["dropdown-content"]}`}
          >
            <Link to={"/homeauth"}>
              <p className={`${styles["visited"]}`}>Home</p>
            </Link>
            <Link to={"/productauth"}>
              <p className={`${styles["visited"]}`}>Product</p>
            </Link>
            <Link to={"/paymentauth"}>
              <p className={`${styles["visited"]}`}>Your Chart</p>
            </Link>
            <Link to={"/historyauth"}>
              <p className={`${styles["visited"]}`}>History</p>
            </Link>
          </nav>
          <nav
            className={`${styles["drop-nav2"]} ${styles["gap-nav"]} col col-lg col-md`}
          >
            <Link to={"#"}>
              <img className={`${styles["profpict"]}`} src={search} alt="" />
            </Link>
            <Link to={"#"}>
              <img className={`${styles["profpict"]}`} src={chat} alt="" />
            </Link>
            <Link to={"/profile"}>
              <img
                className={`${styles["profpict"]} rounded-circle`}
                src={profile}
                alt=""
              />
            </Link>
          </nav>
        </header>
      </>
    );
  }
}
