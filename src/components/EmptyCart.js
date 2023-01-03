import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "../styles/Payment.module.css";
import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className={styles["empty-cart"]}>Your cart are empty</div>
        <div className={styles["sub-empty-cart"]}>
          Click icon below to add product to your cart
        </div>
        <div
          className={styles["cart"]}
          onClick={() => {
            navigate("/products");
          }}
        >
          <AddShoppingCartIcon sx={{ fontSize: "300px" }} />
        </div>
      </div>
    </>
  );
}
