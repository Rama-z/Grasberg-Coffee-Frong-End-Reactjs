import React, { Fragment, useEffect, useRef, useState } from "react";
import NavBar from "../components/HeaderHome";
import Footer from "../components/Footer";
import styles from "../styles/EditProduct2.module.css";
import Toast from "../components/Toast";
import { useParams } from "react-router-dom";
import { editProduct } from "../utils/product";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProductAction } from "../redux/actions/product";

const EditProduct = () => {
  const product = useSelector((state) => state.getDetailProduct);
  const { id } = useParams();
  console.log(id);
  const [body, setBody] = useState({});
  const [imgPrev, setImgPrev] = useState(null);
  const [toastInfo, setToastInfo] = useState({ display: false });
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("");
  const refTarget = useRef(null);
  const token = JSON.parse(localStorage.getItem("user-info")).token;
  const dispatch = useDispatch();

  const setDropdown = () => setIsActive(!isActive);

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    const photo = e.target.files[0];
    const defaultSize = 2 * 1024 * 1024;
    if (
      photo.type !== "image/jpeg" &&
      photo.type !== "image/jpg" &&
      photo.type !== "image/png"
    )
      return setToastInfo({
        display: true,
        status: "error",
        message: "Extension file wrong! Only .jpeg, .jpg, .png are allowed.",
      });
    if (photo.size > defaultSize)
      return setToastInfo({
        display: true,
        status: "error",
        message: "File to large. Max. file size 2 Mb",
      });
    setBody({ ...body, image: photo });
    setImgPrev(URL.createObjectURL(photo));
  };

  const postProduct = async () => {
    console.log(id);
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    try {
      const response = await editProduct(token, formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

  useEffect(() => {
    dispatch(getDetailProductAction(id));
    setCategory(product);
  }, []);

  return (
    <Fragment>
      <Toast
        status={toastInfo.status}
        message={toastInfo.message}
        display={!toastInfo.display ? "none" : "flex"}
        changeState={(value) => {
          setToastInfo({ display: value });
        }}
      />
      <NavBar />
      <main className={styles["main-add-product"]}>
        <p className={styles["category-text"]}>
          Favorites and Promos{" "}
          <span className={styles["add-title"]}> &#62; </span>
        </p>
        <section className={styles["main-section"]}>
          <section className={`${styles["content"]} ${styles["left"]}`}>
            <form action="">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
                className={`${styles["image-container"]} ${styles["pointer"]}`}
              >
                <img
                  className={styles["image-preview"]}
                  src={imgPrev ? imgPrev : ""}
                  alt="preview"
                />
              </div>
              <button className={`${styles["btn"]} ${styles["btn-take-pic"]}`}>
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
            </form>
          </section>
          <section className={`${styles["content"]} ${styles["right"]}`}>
            <form action="">
              <label htmlFor="menu">Name:</label>
              <input
                onChange={changeHandler}
                name="menu"
                type="text"
                placeholder="nama"
              />
              <label htmlFor="price">Price:</label>
              <input
                onChange={changeHandler}
                name="price"
                placeholder={currency(product)}
                type="text"
              />
              <label htmlFor="description">Description:</label>
              <input
                onChange={changeHandler}
                name="description"
                placeholder={product}
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
                    setBody({ ...body, category_id: 1 });
                    setDropdown();
                  }}
                >
                  Coffee
                </p>
                <p
                  onClick={() => {
                    setCategory("Non Coffee");
                    setBody({ ...body, category_id: 2 });
                    setDropdown();
                  }}
                >
                  Non Coffee
                </p>
                <p
                  onClick={() => {
                    setCategory("Foods");
                    setBody({ ...body, category_id: 3 });
                    setDropdown();
                  }}
                >
                  Foods
                </p>
                <p
                  onClick={() => {
                    setCategory("Add on");
                    setBody({ ...body, category_id: 4 });
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
    </Fragment>
  );
};

export default EditProduct;
