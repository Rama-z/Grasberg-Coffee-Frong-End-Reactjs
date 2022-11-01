import React, { Component } from "react";
import styles from "../styles/HeaderHome.module.css";
import imageCoba from "../assets/Profiles/coffee 3.png";
import { Link } from "react-router-dom";
import NavLogin from "./NavLogin";
import NavGuest from "./NavGuest";

// import withNavigate from "../helpers/withNavigate";

export default class Header extends Component {
  render() {
    const token = localStorage.getItem("token");
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
            <Link to={"/"}>
              <p className={`${styles["visited"]}`}>Home</p>
            </Link>
            <Link to={"/product"}>
              <p className={`${styles["visited"]}`}>Product</p>
            </Link>
            <Link to={"/payment"}>
              <p className={`${styles["visited"]}`}>Your Chart</p>
            </Link>
            <Link to={"/history"}>
              <p className={`${styles["visited"]}`}>History</p>
            </Link>
          </nav>
          {token ? <NavLogin /> : <NavGuest />}
        </header>
      </>
    );
  }
}
