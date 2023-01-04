import React from "react";
import styles from "../styles/NavLogin.module.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import searching from "../assets/Home/search.png";
import { useState } from "react";
import { useEffect } from "react";
// import { getProfile } from "../utils/profile";
import sample from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import transactionAction from "../redux/actions/transaction";
import productActions from "../redux/actions/product";

export default function NavLogin({ setTriggers }) {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = `?search=${searchParams.get("search") || ""}&sort=${
    searchParams.get("sort") || ""
  }&filter=${searchParams.get("filter") || ""}&page=${
    searchParams.get("page") || ""
  }&limit=12`;

  return (
    <>
      <section className={`${styles["searching"]}`}>
        <div className={styles.searching}>
          <input
            type="text"
            placeholder="search here ..."
            onChange={(e) => {
              e.preventDefault();
              setSearchParams({
                search: e.target.value,
                sort: "",
                filter: "",
                page: 1,
              });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (window.location.pathname === "/product") {
                  e.preventDefault();
                  setSearchParams({
                    search: e.target.value,
                    sort: "",
                    filter: "",
                    page: 1,
                  });
                  setTriggers(!true);
                }
                navigate(
                  `/products?search=${
                    searchParams.get("search") || ""
                  }&sort=popular&filter=&page=1`
                );
              }
            }}
          />
          <div className={styles["search-img"]}>
            <img
              src={searching}
              alt="searching"
              onClick={(e) => {
                if (window.location.pathname === "/product") {
                  e.preventDefault();
                  setSearchParams({
                    search: e.target.value,
                    sort: "",
                    filter: "",
                    page: 1,
                  });
                }
                navigate(
                  `/products?search=${
                    searchParams.get("search") || ""
                  }&sort=popular&filter=&page=1`
                );
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
