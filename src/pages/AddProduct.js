import React from "react";
import styles from "../styles/AddProduct.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
// import Button from "../components/Button";

import Camera from "../assets/camera.png";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { postData } from "../utils/product";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import productActions from "../redux/actions/product";

function AddProduct() {
  const promo = useSelector((state) => state.promo.promo);
  const dispatch = useDispatch();
  const [body, setBody] = useState({});
  const [imgPrev, setImgPrev] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isPromoActive, setIsPromoActive] = useState(false);
  const [category, setCategory] = useState("Select Categories");
  const [coupon, setCoupon] = useState("Select Coupon");
  const [value, setValue] = useState(0);
  const [expire, setExpire] = useState("hh/bb/tttt");
  const refTarget = useRef(null);
  const token = useSelector((state) => state.auth.token);
  console.log(body);

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    const photo = e.target.files[0];
    setBody({ ...body, image: photo });
    setImgPrev(URL.createObjectURL(photo));
  };
  const postProduct = () => {
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    dispatch(productActions.addProductThunk(formData, token));
  };

  return (
    <>
      <Header />
      <main className={styles["main-add-product"]}>
        <p className={styles["category-text"]}>
          Favorites and Promos{" "}
          <span className={styles["add-title"]}> &#62; Add new product</span>
        </p>
        <section className={styles["main-section"]}>
          <section className={styles["left-content"]}>
            <form action="">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
                className={`${styles["image-container"]} ${styles["pointer"]}`}
              >
                <img
                  src={Camera}
                  className={styles[!imgPrev ? "dummy-preview" : "none"]}
                  alt="product"
                />
                <img
                  className={styles[!imgPrev ? "none" : "image-preview"]}
                  src={imgPrev}
                  alt="preview"
                />
              </div>
              <button
                className={`${styles["btn"]} ${styles["btn-take-pic"]} my-3`}
              >
                Take Picture
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
                className={`${styles["btn"]} ${styles["btn-choose-gallery"]}`}
              >
                Choose From Gallery
              </button>
              <input
                onChange={(e) => imageHandler(e)}
                type="file"
                ref={refTarget}
                style={{ display: "none" }}
              />
              <div className={`${styles["promo-details"]} `}>
                <div
                  className={`${styles["coupon-code"]} ${styles["input-box"]}`}
                >
                  <label className={styles["input-title"]}>
                    Input coupon code :
                  </label>
                  <div
                    onClick={() => {
                      setIsPromoActive(!isPromoActive);
                    }}
                    className={`${styles[isPromoActive ? "active" : ""]} ${
                      styles["box-dropdown"]
                    }`}
                  >
                    <p>{coupon}</p>
                    <div>
                      <ArrowDropDownIcon sx={{ fontSize: "30px" }} />
                    </div>
                  </div>
                  <div
                    className={
                      isPromoActive ? styles["list-dropdown"] : styles.none
                    }
                  >
                    {promo.map((item, index) => {
                      return (
                        <div
                          key={index}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setCoupon(item.codes);
                            setBody({ ...body, promo_id: item.id });
                            setIsPromoActive(!isPromoActive);
                            setValue(item.discount);
                            setExpire(item.valid_date);
                          }}
                        >
                          {`Codes: ${item.codes}, Discount: ${item.discount}%`}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`${styles["enter-discount"]} ${styles["input-box"]}`}
                >
                  <label className={styles["input-title"]}>
                    Discount applied :
                  </label>
                  <input disabled type="text" name="stock" value={value} />
                </div>
                <div
                  className={`${styles["expire-date"]} ${styles["input-box"]}`}
                >
                  <label className={styles["input-title"]}>Expire date :</label>
                  <input disabled type="text" name="start" value={expire} />
                </div>
              </div>
            </form>
          </section>
          <section className={`${styles["content"]} ${styles["right"]}`}>
            <form action="">
              <label htmlFor="menu">Name:</label>
              <input
                onChange={changeHandler}
                name="menu"
                type="text"
                placeholder="Input product name"
              />
              <label htmlFor="price">Price:</label>
              <input
                onChange={changeHandler}
                name="price"
                placeholder="Input price"
                type="text"
              />
              <label htmlFor="description">Description:</label>
              <input
                onChange={changeHandler}
                name="description"
                placeholder="Input description"
                type="text"
              />
              <label htmlFor="description">Product Categories:</label>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={`${styles[isActive ? "active" : ""]} ${
                  styles["box-dropdown"]
                }`}
              >
                <p>{category}</p>
                <div>
                  <ArrowDropDownIcon sx={{ fontSize: "30px" }} />
                </div>
              </div>
              <div className={isActive ? styles["list-dropdown"] : styles.none}>
                <p
                  onClick={() => {
                    setCategory("Coffee");
                    setBody({ ...body, varian_id: 1 });
                    setIsActive(!isActive);
                  }}
                >
                  Coffee
                </p>
                <p
                  onClick={() => {
                    setCategory("Non Coffee");
                    setBody({ ...body, varian_id: 2 });
                    setIsActive(!isActive);
                  }}
                >
                  Non Coffee
                </p>
                <p
                  onClick={() => {
                    setCategory("Foods");
                    setBody({ ...body, varian_id: 3 });
                    setIsActive(!isActive);
                  }}
                >
                  Foods
                </p>
                <p
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                >
                  Add on
                </p>
              </div>
            </form>
            <div className={styles["btn-container"]}>
              <button
                onClick={postProduct}
                className={`${styles["btn"]} ${styles["btn-save"]}`}
              >
                Save Product
              </button>
              <button className={`${styles["btn"]} ${styles["btn-cancel"]}`}>
                Cancel
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AddProduct;
