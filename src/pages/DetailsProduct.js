import React, { Fragment, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/HeaderHome";
import styles from "../styles/DetailsProduct.module.css";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.png";
import { getData } from "../utils/product";
const DetailsProduct = () => {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const [size, setSize] = useState("Regular");
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const res = await getData(`/products/${id}`);
      setProduct({ product, ...res.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

  const changeSize = (size) => {
    setSize(size);
  };

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => {
      if (prevState === 0) return 0;
      return prevState - 1;
    });
  };

  return (
    <Fragment>
      <Header />
      <main className={styles["main-details"]}>
        <div className="container">
          <section className={`col-12 ${styles["categories"]}`}>
            <p className={styles["category-name"]}>
              {product.category_name}{" "}
              <span className={styles["span-brown"]}>
                &gt; {product.product_name}
              </span>
            </p>
          </section>
          <section className={`col-12 ${styles["details-container"]}`}>
            <aside className={styles["side-container"]}>
              <img
                src={`http://localhost:8080/${product.image}`}
                alt=""
                className={styles["product-image"]}
              />

              <section className={styles["delivery-container"]}>
                <p className={styles["delivery-title"]}>Delivery and Time</p>

                <section className={styles["delivery-method"]}>
                  <div className={styles["method-name"]}>Dine in</div>
                  <div className={styles["method-name"]}>Door delivery</div>
                  <div className={styles["method-name"]}>Pick up</div>
                </section>
                <section className={`${styles["now-container"]} row`}>
                  <p className={`${styles["text-now"]} col-2`}>Now</p>
                  <div className={`${styles["pick"]} col-7`}>
                    <div className={styles["method-name"]}>Yes</div>
                    <div className={styles["method-name"]}>No</div>
                  </div>
                </section>
                <section className={`${styles["reservation-container"]} row`}>
                  <p className={`${styles["text-now"]} col-4`}>Set Time</p>
                  <input
                    type="time"
                    className={`${styles["input-time"]} col-7`}
                  />
                </section>
              </section>
            </aside>
            <aside className={styles["side-container"]}>
              <h1 className={`text-center ${styles["product-main-title"]}`}>
                {product.product_name}
              </h1>
              <div className={styles["desc-container"]}>
                <p className={styles["description"]}>{product.description}</p>
                <p className={`${styles["delivery-desc"]}`}>
                  Delivery only on{" "}
                  <span className={styles["span-brown"]}>
                    Monday to friday at 1 - 7 pm
                  </span>
                </p>
              </div>
              <div className={`${styles["qty-price"]} col-12`}>
                <div className={styles["qty-value"]}>
                  <span
                    onClick={() => {
                      decrement();
                    }}
                    className={styles["minus"]}
                  >
                    &#60;
                  </span>
                  <input
                    type="text"
                    value={count}
                    className={styles["input-qty"]}
                  />
                  <span
                    onClick={() => {
                      increment();
                    }}
                    className={styles["plus"]}
                  >
                    &#62;
                  </span>
                </div>
                <p className={styles["price"]}>
                  {currency(product.price * count)}
                </p>
              </div>
              <div className={styles["buttons"]}>
                <button className={`${styles["btn"]} ${styles["add-to-cart"]}`}>
                  Add to cart
                </button>
                <button className={`${styles["btn"]} ${styles["ask-a-staff"]}`}>
                  Ask a staff
                </button>
              </div>
            </aside>
          </section>
          <section
            className={`col-12 row align-items-center ${styles["finalize-container"]}`}
          >
            <div className={`col-12 col-md-3 ${styles["sizes-container"]}`}>
              <p className={`${styles["choose-text"]} text-center`}>
                Choose a size
              </p>
              <div className={`${styles["sizes"]}`}>
                <p
                  onClick={() => {
                    changeSize("Regular");
                  }}
                  className={`${styles["size"]}`}
                >
                  R
                </p>
                <p
                  onClick={() => {
                    changeSize("Large");
                  }}
                  className={`${styles["size"]}`}
                >
                  L
                </p>
                <p
                  onClick={() => {
                    changeSize("Extra Large");
                  }}
                  className={`${styles["size-xl"]}`}
                >
                  XL
                </p>
              </div>
            </div>
            <div className={`col-12 col-md-8 ${styles["check-out"]}`}>
              <div className={styles["checkout-left"]}>
                <img
                  src={`http://localhost:8080/${product.image}`}
                  alt=""
                  className={`${styles["selected-item"]}`}
                />
                <div className={`${styles["selected-item-detail"]}`}>
                  <p className={`${styles["item-name"]} `}>
                    {product.product_name}
                  </p>
                  <p className={`${styles["qty"]} `}>
                    ({count}) {size}
                  </p>
                </div>
              </div>
              <div className={`${styles["final-container"]}`}>
                <p className={`${styles["checkout-title"]}`}>Checkout</p>
                <img className={styles["arrow"]} src={arrow} alt="arrow" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
export default DetailsProduct;
