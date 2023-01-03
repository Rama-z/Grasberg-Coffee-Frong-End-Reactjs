import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import transactionAction from "../redux/actions/transaction";
import styles from "../styles/CardPromos.module.css";

export default function CardPromo({ code, desc, discount, image, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const role = useSelector((state) => state.auth.role);
  const cart = useSelector((state) => state.transaction.cart);
  const [productItem, setProductItem] = useState([...cart.product_item]);
  const [click, setClick] = useState(false);
  const [body, setBody] = useState({
    total_price: null,
    delivery_address: user.profile.address,
    delivery_method: "Door Delivery",
    delivery_time: "now",
    phone: user.profile.phone,
    promo_id: 999,
    payment_method: "BRI",
  });
  useEffect(() => {
    dispatch(transactionAction.addToCart(body, productItem));
  }, [body]);
  return (
    <>
      <div
        className={`${
          !click ? styles["border-a"] : styles["border-b"]
        } row mt-4`}
        onClick={() => {
          setClick(!click);
        }}
      >
        <div className="col-md col col-lg-3 col-sm">
          <img className={`${styles["promo-img"]}`} src={image} alt="" />
        </div>
        <div className={`${styles["font-promos"]} col-md-7 col col-lg col-sm`}>
          <strong className="me-">Codes: {code}</strong>
          <p>{desc}</p>
          <p>Discount: {discount}%</p>
        </div>
        <div className={click ? styles.apply : styles["apply-none"]}>
          {role === "admin" ? (
            <p
              className={styles.applyText}
              onClick={() => {
                navigate("/editPromo");
              }}
            >
              Edit
            </p>
          ) : null}
          <p
            className={styles.applyText}
            onClick={() => {
              setBody({
                ...body,
                promo_id: id,
              });
              toast.success(
                `Promo Codes ${code} with discount ${discount}% applied!`
              );
            }}
          >
            Apply
          </p>
        </div>
      </div>
    </>
  );
}
