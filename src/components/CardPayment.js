import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import transactionAction from "../redux/actions/transaction";
import styles from "../styles/Payment.module.css";

function CardPayment({
  idx,
  menu,
  image,
  quantity,
  size_id,
  subtotal,
  trans_id,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.transaction.cart);
  const [body, setBody] = useState(cart);
  const [productItems, setProductItem] = useState([]);
  const handleTransaction = (change) => {
    dispatch(transactionAction.addToCart(body, change));
  };
  return (
    <>
      <div className={styles["payment-content"]}>
        <img
          src={image}
          alt="Payment1"
          width="100px"
          height="100px"
          key={idx}
        ></img>
        <div className={styles["payment-center"]}>
          <p>{menu}</p>
          <p>x{quantity}</p>
          <p>
            {size_id === 1
              ? "Reguler"
              : size_id === 2
              ? "Large"
              : "Extra Large"}
          </p>
        </div>
        <div className={styles["payment-idr"]}>
          <p>IDR {subtotal}</p>
        </div>
        <CloseIcon
          key={trans_id}
          className={styles.closeIcon}
          onClick={() => {
            const change = cart.product_item.filter((value) => {
              return value.trans_id !== trans_id;
            });
            handleTransaction(change);
            change.length === 0 ? window.scrollTo(0, 0) : null;
          }}
        />
      </div>
    </>
  );
}

export default CardPayment;
