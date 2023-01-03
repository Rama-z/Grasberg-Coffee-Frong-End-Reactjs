import React from "react";
import styles from "../styles/NavLogin.module.css";
import { useNavigate } from "react-router-dom";
import searching from "../assets/Home/search.png";
import { useState } from "react";
import { useEffect } from "react";
// import { getProfile } from "../utils/profile";
import sample from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import transactionAction from "../redux/actions/transaction";

export default function NavLogin() {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  return (
    <>
      <section className={`${styles["searching"]}`}>
        <div className={styles.searching}>
          <input type="text" placeholder="search here ..." />
          <div className={styles["search-img"]}>
            <img
              src={searching}
              alt="searching"
              onClick={() => {
                dispatch(transactionAction.deleteCart());
              }}
            />
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
