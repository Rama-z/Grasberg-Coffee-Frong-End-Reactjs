import React, { Component } from "react";
import styles from "../styles/CardHistory.module.css";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function CardHistory({ menu, price, id, idx, image, status }) {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          console.log(display);
          setDisplay(!display);
        }}
        className={`${styles["border"]} col-lg-3 row my-2 mx-1`}
      >
        <div className="col col-sm col-md col-lg-3 py-2">
          <img
            className={`${styles["imagine"]} rounded-circle`}
            src={image}
            key={idx}
            alt=""
          />
        </div>
        <article
          onClick={() => {
            // setDisplay(!display);
          }}
          className="col col-sm col-md col-lg ms-2 py-2"
        >
          <p className={`${styles["title"]}`}>{menu}</p>
          <p className={`${styles["IDR"]}`}>IDR {price}</p>
          <p className={`${styles["delivered"]}`}>{status}</p>
        </article>
        <DeleteIcon
          onClick={() => console.log("deleted")}
          sx={{ fontSize: "50px" }}
          className={`${display ? styles["trash"] : styles["trash-none"]}`}
        />
      </div>
    </>
  );
}
