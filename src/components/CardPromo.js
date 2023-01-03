import React from "react";
import styles from "../styles/CardPromos.module.css";

export default function CardPromo({ code, desc, discount, image }) {
  return (
    <>
      <div className={`${styles["border-a"]} row mt-4`}>
        <div className="col-md col col-lg-3 col-sm">
          <img className={`${styles["promo-img"]}`} src={image} alt="" />
        </div>
        <div className={`${styles["font-promos"]} col-md-7 col col-lg col-sm`}>
          <strong className="me-">Codes: {code}</strong>
          <p>{desc}</p>
          <p>Discount: {discount}%</p>
        </div>
      </div>
    </>
  );
}
