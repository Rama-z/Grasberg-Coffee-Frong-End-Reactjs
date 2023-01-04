import React, { useState } from "react";

import styles from "../styles/ProductDetails.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import productActions from "../redux/actions/product";
import transactionAction from "../redux/actions/transaction";
import { toast } from "react-toastify";
import CreateIcon from "@mui/icons-material/Create";

export default function ProductDetails() {
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role);
  const user = useSelector((state) => state.user);
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.transaction.cart);
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState(true);
  const [counter, setCounter] = useState(0);
  const [sizes, setSizes] = useState(1);
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState();
  const [subtotal, setSubTotal] = useState();
  const [productItem, setProductItem] = useState([...cart.product_item]);
  const [body, setBody] = useState({
    total_price: null,
    delivery_address: user.profile.address,
    delivery_method: "Door Delivery",
    delivery_time: "now",
    phone: user.profile.phone,
    promo_id: cart.promo_id,
    payment_method: cart.payment_method,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  useEffect(() => {
    dispatch(transactionAction.addToCart(body, productItem));
  }, [productItem]);
  useEffect(() => {
    dispatch(productActions.getProductByIdThunk(id));
  }, [dispatch]);
  return (
    <>
      <Header />
      <main
        className={`${styles["main-detail"]} row d-flex justify-content-center align-content-center flex-column flex-md-row mb-5`}
      >
        {product.isLoading ? (
          <div className={styles["lds-spinner"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            <section className="col-6 col-sm-12 col-lg-6 col-md-6 text-center">
              <nav className="text-start">
                <section className="text-start align-items-start fs-5">
                  Favorite & Promo <i className="bi bi-chevron-right"></i>
                  <span>
                    <a className={styles.title_product} href="/">
                      {product.productDetail.menu}
                    </a>
                  </span>
                </section>
              </nav>
              <div style={{ position: "relative" }}>
                <div
                  className={
                    product.productDetail.discount === 0
                      ? styles.promos
                      : styles.promo
                  }
                >
                  {product.productDetail.discount} %
                </div>
                <img
                  className={`${styles.content_left} my-5`}
                  src={product.productDetail.image}
                  alt="prod_cold_brew"
                />
              </div>
              <section
                className={`${styles.delivery_time_bar} d-flex flex-column justify-content-start text-start p-4 mx-auto`}
              >
                <h3 className="fs-3 fw-bold">Delivery and Time</h3>
                <section className="my-4 d-flex flex-wrap">
                  <button
                    className={`${styles.btn_delivery_time} ${
                      body.delivery_method === "Dine in" ? styles.selected : ""
                    } my-sm-2`}
                    onClick={() => {
                      setBody({
                        ...body,
                        delivery_method: "Dine in",
                      });
                    }}
                  >
                    Dine in
                  </button>
                  <button
                    className={`${styles.btn_delivery_time} ${
                      body.delivery_method === "Door Delivery"
                        ? styles.selected
                        : ""
                    } my-sm-2`}
                    onClick={() => {
                      setBody({
                        ...body,
                        delivery_method: "Door Delivery",
                      });
                    }}
                  >
                    Door Delivery
                  </button>
                  <button
                    className={`${styles.btn_delivery_time} ${
                      body.delivery_method === "Pick Up" ? styles.selected : ""
                    } my-sm-2`}
                    onClick={() => {
                      setBody({
                        ...body,
                        delivery_method: "Pick Up",
                      });
                    }}
                  >
                    Pick Up
                  </button>
                </section>
                <section className="mt-2 mb-4">
                  <span className={styles.now}>Now</span>
                  <button
                    className={`${styles.btn_delivery_time} ${
                      delivery ? styles.selected : ""
                    }`}
                    onClick={() => {
                      setDelivery(true);
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className={`${styles.btn_delivery_time} ${
                      !delivery ? styles.selected : ""
                    }`}
                    onClick={() => {
                      setDelivery(false);
                    }}
                  >
                    No
                  </button>
                </section>
                <section className="d-flex align-items-center">
                  <span className="fs-5 me-3 fw-light">Set Time</span>
                  <input
                    disabled={delivery}
                    className={styles.set_time}
                    type="datetime-local"
                    name="set_time"
                    id="set_time"
                    placeholder="Enter time for reservation"
                    onChange={(e) => {
                      setBody({
                        ...body,
                        delivery_time: e.target.value,
                      });
                    }}
                  />
                </section>
              </section>
            </section>
            <article
              style={{ position: "relative" }}
              className={`${styles.content_right} col-6 col-sm-12 col-md-6 col-lg-6 text-center d-flex flex-column justify-content-between mx-auto`}
            >
              {role === "admin" ? (
                <button
                  className={styles["edit-product"]}
                  onClick={() => {
                    navigate("/editProduct");
                  }}
                >
                  <div>Edit Product</div>
                  <CreateIcon />
                </button>
              ) : null}
              <h2 className={styles.title}>{product.productDetail.menu}</h2>
              <div className="text-start">
                {product.productDetail.description}
              </div>
              <p className={`${styles.info} text-start mt-5`}>
                Delivery only on <span>Monday to</span> <br />
                <span>friday</span> at <span>1 - 7 pm</span>
              </p>
              <section className="d-flex justify-content-between align-items-center">
                <div
                  className={`${styles.qty} d-flex justify-content-center align-items-center`}
                >
                  <span>
                    <button
                      type="button"
                      onClick={() => {
                        if (counter === 0) return;
                        setCounter(counter - 1);
                        setQuantity(counter - 1);
                        setSubTotal(
                          sizes === 2
                            ? product.productDetail.discount
                              ? (product.productDetail.price + 3000) *
                                  (counter - 1) -
                                (product.productDetail.price *
                                  product.productDetail.discount) /
                                  100
                              : (product.productDetail.price + 3000) *
                                (counter - 1)
                            : sizes === 3
                            ? product.productDetail.discount
                              ? (product.productDetail.price + 5000) *
                                  (counter - 1) -
                                (product.productDetail.price *
                                  product.productDetail.discount) /
                                  100
                              : (product.productDetail.price + 5000) *
                                (counter - 1)
                            : product.productDetail.discount
                            ? product.productDetail.price * (counter - 1) -
                              (product.productDetail.price *
                                product.productDetail.discount) /
                                100
                            : product.productDetail.price * (counter - 1)
                        );
                        setItem({
                          ...item,
                          quantity: counter - 1,
                          subtotal: product.productDetail.price * (counter - 1),
                        });
                      }}
                    >
                      -
                    </button>
                  </span>
                  <input type="text" maxLength="2" disabled value={counter} />
                  <span>
                    <button
                      type="button"
                      onClick={() => {
                        setCounter(counter + 1);
                        setQuantity(counter + 1);
                        setSubTotal(
                          sizes === 2
                            ? product.productDetail.discount
                              ? (product.productDetail.price + 3000) *
                                  (counter + 1) -
                                (product.productDetail.price *
                                  product.productDetail.discount) /
                                  100
                              : (product.productDetail.price + 3000) *
                                (counter + 1)
                            : sizes === 3
                            ? product.productDetail.discount
                              ? (product.productDetail.price + 5000) *
                                  (counter + 1) -
                                (product.productDetail.price *
                                  product.productDetail.discount) /
                                  100
                              : (product.productDetail.price + 5000) *
                                (counter + 1)
                            : product.productDetail.discount
                            ? product.productDetail.price * (counter + 1) -
                              (product.productDetail.price *
                                product.productDetail.discount) /
                                100
                            : product.productDetail.price * (counter + 1)
                        );
                        setItem({
                          ...item,
                          quantity: counter + 1,
                          subtotal: product.productDetail.discount
                            ? product.productDetail.price * (counter + 1) -
                              (product.productDetail.price *
                                product.productDetail.discount) /
                                100
                            : product.productDetail.price * (counter + 1),
                        });
                      }}
                    >
                      +
                    </button>
                  </span>
                </div>
                <p className={styles.price}>
                  IDR
                  {subtotal}
                </p>
              </section>
              <span
                onClick={() => {
                  if (counter === 0)
                    return toast.error("Insert quantity first!");
                  setProductItem((productItem) => [
                    ...productItem,
                    {
                      product_id: product.productDetail.id,
                      menu: product.productDetail.menu,
                      size_id: sizes,
                      quantity: quantity,
                      promo_id: product.productDetail.promo_id,
                      subtotal: subtotal,
                      image: product.productDetail.image,
                      trans_id: Math.floor(Math.random() * 100000000000),
                    },
                  ]);
                  toast.success("Add to cart success");
                }}
                className={`${styles.cart} mb-3 mb-sm-5 mb-md-5 mb-lg-3`}
              >
                Add to Cart
              </span>{" "}
              <br />
              {role === "admin" ? (
                <span className={styles.staff}>Edit Product</span>
              ) : (
                <span
                  className={styles.staff}
                  onClick={() => {
                    dispatch(transactionAction.deleteCart());
                    setProductItem([]);
                  }}
                >
                  Ask a Staff
                </span>
              )}
            </article>
            <section
              className={`${styles.choose_checkout} row justify-content-between flex-md-column flex-lg-row`}
            >
              <section className={`${styles.size} col-4 text-center ms-0`}>
                <h4>Choose a size</h4>
                <button
                  onClick={() => {
                    setSizes(1);
                    setSubTotal(
                      counter === 0
                        ? subtotal
                        : sizes === 2
                        ? subtotal - 3000 * counter
                        : sizes === 3
                        ? subtotal - 5000 * counter
                        : subtotal
                    );
                    setItem({
                      ...item,
                      size_id: 1,
                    });
                  }}
                  className={`${
                    sizes === 1 ? styles.sizes : ""
                  } rounded-circle`}
                >
                  R
                </button>
                <button
                  onClick={() => {
                    setSizes(2);
                    setSubTotal(
                      counter === 0
                        ? subtotal
                        : sizes === 1
                        ? subtotal + 3000 * counter
                        : sizes === 3
                        ? subtotal - 2000 * counter
                        : subtotal
                    );
                    setItem({
                      ...item,
                      size_id: 2,
                    });
                  }}
                  className={`${
                    sizes === 2 ? styles.sizes : ""
                  } rounded-circle`}
                >
                  L
                </button>
                <button
                  onClick={() => {
                    setSizes(3);
                    setSubTotal(
                      counter === 0
                        ? subtotal
                        : sizes === 2
                        ? subtotal + 2000 * counter
                        : sizes === 1
                        ? subtotal + 5000 * counter
                        : subtotal
                    );
                    setItem({
                      ...item,
                      size_id: 3,
                    });
                  }}
                  className={`${
                    sizes === 3 ? styles.sizes : ""
                  } rounded-circle`}
                >
                  XL
                </button>
              </section>
              <section
                className={`${styles.checkout} col-6 d-flex justify-content-between align-content-center`}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    className="me-3"
                    src={product.productDetail.image}
                    alt="prod_cold_brew"
                  />
                  <section className="d-flex flex-column justify-content-center">
                    <h5 className="fw-bold fs-4">
                      {product.productDetail.menu}
                    </h5>
                    <span>x1 (Large)</span>
                    <span>x1 (Regular)</span>
                  </section>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="fs-4 fw-bold">Checkout</span>
                  <button className={styles.button_checkout}>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </section>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
