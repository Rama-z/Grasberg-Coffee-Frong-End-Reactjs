import React from "react";
import styles from "../styles/NavLogin.module.css";
import { useNavigate } from "react-router-dom";
import searching from "../assets/Home/search.png";
import { useState } from "react";
import { useEffect } from "react";
// import { getProfile } from "../utils/profile";
import sample from "../assets/profile.png";
import { useSelector } from "react-redux";

export default function NavLogin() {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.user.profile);

  return (
    <>
      <section className={`${styles["searching"]}`}>
        <div className={styles.searching}>
          <input type="text" placeholder="search here ..." />
          <div className={styles["search-img"]}>
            <img src={searching} alt="searching" />
          </div>
        </div>
        <div
          className={styles.profile}
          onClick={() => {
            navigate("/profile");
          }}
        >
          {profile.image ? (
            <img src={profile.image} alt="profile" />
          ) : (
            <img src={sample} alt="profile" />
          )}
        </div>
      </section>
    </>
  );
}
