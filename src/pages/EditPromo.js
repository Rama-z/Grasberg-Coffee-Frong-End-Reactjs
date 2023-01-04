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
// import { postData } from "../utils/promo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import promoAction from "../redux/actions/promo";

function EditPromo() {
  const dispatch = useDispatch();
  const [body, setBody] = useState({});
  const [imgPrev, setImgPrev] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [discount, setDiscount] = useState(false);
  const refTarget = useRef(null);
  const token = useSelector((state) => state.auth.token);
  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    const photo = e.target.files[0];
    setBody({ ...body, image: photo });
    setImgPrev(URL.createObjectURL(photo));
  };

  const submitHandler = () => {
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    dispatch(promoAction.addPromoThunk(formData, token));
  };
  return (
    <>
      <Header />
      <main className={styles["main-add-product"]}>
        <p className={styles["category-text"]}>
          Favorites and Promos{" "}
          <span className={styles["add-title"]}> &#62; Add new promo</span>
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
              {/* <div className={`${styles["promo-details"]} `}>
                <div
                  className={`${styles["enter-discount"]} ${styles["input-box"]}`}
                >
                  <label className={styles["input-title"]}>
                    Enter the discount :
                  </label>
                  <input
                    type="text"
                    name="stock"
                    required
                    placeholder="Input stock"
                  />
                </div>
                <div
                  className={`${styles["expire-date"]} ${styles["input-box"]}`}
                >
                  <label className={styles["input-title"]}>Expire date :</label>
                  <input
                    type="date"
                    name="start"
                    required
                    placeholder="Select start date"
                  />
                  <input
                    type="date"
                    name="end"
                    required
                    placeholder="Select end date"
                  />
                </div>
                <div
                  className={`${styles["coupon-code"]} ${styles["input-box"]}`}
                >
                  <label className={styles["input-title"]}>
                    Input coupon code :
                  </label>
                  <input type="text" name="codes" placeholder="Input code" />
                </div>
              </div> */}
            </form>
          </section>
          <section className={`${styles["content"]} ${styles["right"]}`}>
            <form action="">
              <label htmlFor="codes">Codes:</label>
              <input
                onChange={changeHandler}
                name="codes"
                type="text"
                placeholder="Input product name"
              />
              <label htmlFor="discount">Discount:</label>
              <div
                onClick={() => {
                  setDiscount(!discount);
                }}
                className={`${styles[discount ? "active" : ""]} ${
                  styles["box-dropdown"]
                }`}
              >
                <p>{body.discount}</p>
                <div>
                  <ArrowDropDownIcon sx={{ fontSize: "30px" }} />
                </div>
              </div>
              <div className={discount ? styles["list-dropdown"] : styles.none}>
                <p
                  onClick={() => {
                    setBody({ ...body, discount: 10 });
                    setDiscount(!discount);
                  }}
                >
                  10%
                </p>
                <p
                  onClick={() => {
                    setBody({
                      ...body,
                      discount: 15,
                    });
                    setDiscount(!discount);
                  }}
                >
                  15%
                </p>
                <p
                  onClick={() => {
                    setBody({ ...body, discount: 20 });
                    setDiscount(!discount);
                  }}
                >
                  20%
                </p>
                <p
                  onClick={() => {
                    setBody({ ...body, discount: 25 });
                    setDiscount(!discount);
                  }}
                >
                  25%
                </p>
              </div>
              <label htmlFor="description">Description:</label>
              <input
                onChange={changeHandler}
                name="description"
                placeholder="Input description"
                type="text"
              />
              <label htmlFor="expire">Expire Date:</label>
              <input
                type="date"
                name="valid_date"
                required
                placeholder="Select start date"
                onChange={changeHandler}
              />
            </form>
            <div className={styles["btn-container"]}>
              <button
                onClick={submitHandler}
                className={`${styles["btn"]} ${styles["btn-save"]}`}
              >
                Save Promo
              </button>
              <button className={`${styles["btn"]} ${styles["btn-cancel"]}`}>
                Delete Promo
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

export default EditPromo;
