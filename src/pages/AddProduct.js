import React from "react";
import styles from "../styles/AddProduct.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
// import Button from "../components/Button";

import Camera from "../assets/camera.png";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { postData } from "../utils/product";

function AddProduct() {
  const [body, setBody] = useState({});
  const [imgPrev, setImgPrev] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("Select Categories");
  const refTarget = useRef(null);
  const token = JSON.parse(localStorage.getItem("user-info")).token;

  const setDropdown = () => setIsActive(!isActive);
  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    const photo = e.target.files[0];
    setBody({ ...body, image: photo });
    setImgPrev(URL.createObjectURL(photo));
  };
  const postProduct = async () => {
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    try {
      const response = await postData(token, formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(token, body);
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
                  <input type="text" name="code" placeholder="Input code" />
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
                  setDropdown();
                }}
                className={`${styles[isActive ? "active" : ""]} ${
                  styles["box-dropdown"]
                }`}
              >
                <p>{category}</p>
                <div className={styles.arrows}>
                  <p>&#9586;</p>
                  <p>&#9585;</p>
                </div>
              </div>
              <div className={isActive ? styles["list-dropdown"] : styles.none}>
                <p
                  onClick={() => {
                    setCategory("Coffee");
                    setBody({ ...body, varian_id: 1 });
                    setDropdown();
                  }}
                >
                  Coffee
                </p>
                <p
                  onClick={() => {
                    setCategory("Non Coffee");
                    setBody({ ...body, varian_id: 2 });
                    setDropdown();
                  }}
                >
                  Non Coffee
                </p>
                <p
                  onClick={() => {
                    setCategory("Foods");
                    setBody({ ...body, varian_id: 3 });
                    setDropdown();
                  }}
                >
                  Foods
                </p>
                <p
                  onClick={() => {
                    setCategory("Add on");
                    setBody({ ...body, varian_id: 4 });
                    setDropdown();
                  }}
                >
                  Add on
                </p>
              </div>
            </form>
            <div className={styles["btn-container"]}>
              <button
                onClick={() => {
                  postProduct();
                }}
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
