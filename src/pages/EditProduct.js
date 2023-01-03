import React from "react";
import styles from "../styles/AddProduct.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import Camera from "../assets/camera.png";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import productActions from "../redux/actions/product";

function AddProduct() {
  const promo = useSelector((state) => state.promo.promo);
  const product = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();
  const [body, setBody] = useState(product);
  const [imgPrev, setImgPrev] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isPromoActive, setIsPromoActive] = useState(false);
  const [coupon, setCoupon] = useState("Select Coupon");
  const [value, setValue] = useState(0);
  const [expire, setExpire] = useState("hh/bb/tttt");
  const [category, setCategory] = useState("Select Categories");
  const refTarget = useRef(null);
  const token = useSelector((state) => state.auth.token);
  console.log(body);
  const setDropdown = () => setIsActive(!isActive);

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    const photo = e.target.files[0];
    setBody({ ...body, image: photo });
    setImgPrev(URL.createObjectURL(photo));
  };

  const editData = () => {
    console.log("tes");
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    dispatch(productActions.editProductThunk(formData, token, product.id));
  };

  return (
    <>
      <Header />
      <main className={styles["main-add-product"]}>
        <p className={styles["category-text"]}>
          Favorites and Promos{" "}
          <span className={styles["add-title"]}> &#62; Edit product</span>
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
                value={body.menu}
              />
              <label htmlFor="price">Price:</label>
              <input
                onChange={changeHandler}
                name="price"
                type="text"
                value={body.price}
              />
              <label htmlFor="description">Description:</label>
              <input
                onChange={changeHandler}
                name="description"
                value={body.description}
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
                <p>{body.category_name}</p>
                <div className={styles.arrows}>
                  <p>&#9586;</p>
                  <p>&#9585;</p>
                </div>
              </div>
              <div className={isActive ? styles["list-dropdown"] : styles.none}>
                <p
                  onClick={() => {
                    setBody({ ...body, varian_id: 1, category_name: "Coffee" });
                    setDropdown();
                  }}
                >
                  Coffee
                </p>
                <p
                  onClick={() => {
                    setBody({
                      ...body,
                      varian_id: 2,
                      category_name: "Non Coffee",
                    });
                    setDropdown();
                  }}
                >
                  Non Coffee
                </p>
                <p
                  onClick={() => {
                    setBody({ ...body, varian_id: 3, category_name: "Foods" });
                    setDropdown();
                  }}
                >
                  Foods
                </p>
                <p
                  onClick={() => {
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
                onClick={editData}
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
