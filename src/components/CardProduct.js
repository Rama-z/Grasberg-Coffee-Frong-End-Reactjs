import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/CardProduct.module.css";

export default function CardProduct({ menu, price, id, image }) {
  const navigate = useNavigate();
  return (
    <>
      <section className={`${styles["post-cont"]}`}>
        <img
          onClick={() => {
            navigate(`/product/${id}`);
          }}
          className={`${styles["product-img"]} rounded-circle col-md col col-sm col-lg`}
          src={image}
          alt=""
        />
        <div
          className={`${styles["product-bg"]} col-md-9 col col-sm col-lg-10`}
        >
          <div
            onClick={() => {
              navigate("/product/:id");
            }}
            className={`${styles["product-name"]} col-md col col-sm col-lg`}
          >
            {menu}
          </div>
          <div
            className={`${styles["product-price"]} col-md col col-sm col-lg`}
          >
            IDR {price}
          </div>
        </div>
      </section>
    </>
  );
}
