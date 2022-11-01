import React from "react";
import styles from "../styles/HeaderProduct.module.css";
import { Link } from "react-router-dom";
import search from "../assets/Home/search.png";
import chat from "../assets/chat.png";
import profile from "../assets/profile.png";

export default function NavLogin() {
  return (
    <div>
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
    </div>
  );
}
