import React from "react";
import styles from "../styles/HalfHeaderLogin.module.css";
import coffee from "../assets/Profiles/coffee 3.png";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function HalfHeader() {
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const pathname = window.location.pathname;
  return (
    <>
      <section
        className={`${styles["grasberg"]} container row d-flex align-items-center`}
      >
        <section
          className={`${styles["center"]} ${styles["logo-name"]} col`}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={coffee} className={`${styles["logo-img"]} me-3`} alt="" />
          Grasberg Coffee
        </section>
        {pathname === "/auth/login" ? (
          <p className={`${styles["login"]} text-end col`}>Login</p>
        ) : (
          <p className={`${styles["login"]} text-end col`}>Sign Up</p>
        )}
      </section>
    </>
  );
}
