import React from "react";
import styles from "../styles/HeaderHome.module.css";
import { Link } from "react-router-dom";

export default function NavGuest() {
  return (
    <>
      <nav
        className={`${styles["drop-nav2"]} ${styles["gap-nav"]} col col-lg col-md`}
      >
        <Link to={"/auth"}>
          <p className={`${styles["visited"]}`}>Login</p>
        </Link>
        <Link to={"/signup"}>
          <p className={`${styles["signup"]}`}>Sign Up</p>
        </Link>
      </nav>
      ;
    </>
  );
}
