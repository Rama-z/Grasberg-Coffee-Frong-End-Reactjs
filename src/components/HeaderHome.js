import React from "react";
import styles from "../styles/HeaderHome.module.css";
import imageCoba from "../assets/Profiles/coffee 3.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import NavLogin from "./NavLogin";
import NavGuest from "./NavGuest";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/actions/product";

export default function Header({ setTrigger }) {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <>
      <header
        className={`container-lg container container-sm container-xl ${styles["drop-nav"]} ${styles["header-margin"]} ${styles["dropdown"]}`}
      >
        <article
          className={`col col-sm col-lg-3 col-md-3 ${styles["drop-nav3"]} ${styles["gap-nav1"]}`}
        >
          <img src={imageCoba} alt="coffee" />
          <div className={`${styles["grasberg"]}`}>Grasberg Coffee</div>
        </article>
        <div className={`${styles["menu-toggle"]}`}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav
          className={`col col-sm-8 col-lg-6 col-md-6 ${styles["drop-nav"]} ${styles["gap-nav"]} ${styles["mid"]} ${styles["dropdown-content"]}`}
        >
          <p
            className={`${styles["visited"]}`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p
            className={`${styles["visited"]}`}
            onClick={() => {
              if (window.location.pathname === "/products") {
                setSearchParams({
                  search: "",
                  sort: "popular",
                  filter: "",
                  page: "1",
                });
                dispatch(
                  productActions.getProductsThunk(
                    `?search=&sort=popular&filter=&page=1&limit=12`
                  )
                );
              }
              navigate("/products");
            }}
          >
            Product
          </p>
          <p
            className={`${styles["visited"]}`}
            onClick={() => {
              navigate("/payment");
            }}
          >
            Your Cart
          </p>
          <p
            className={`${styles["visited"]}`}
            onClick={() => {
              console.log("history");
              navigate("/history");
            }}
          >
            History
          </p>
          {!token ? (
            <p
              className={`${styles["login"]}`}
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Login
            </p>
          ) : (
            ""
          )}
          {!token ? (
            <p
              className={`${styles["signup"]}`}
              onClick={() => {
                navigate("/auth/register");
              }}
            >
              Sign Up
            </p>
          ) : (
            ""
          )}
        </nav>
        {token ? <NavLogin /> : <NavGuest />}
      </header>
    </>
  );
}
