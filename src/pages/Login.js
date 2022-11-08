import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/FooterHalf";
import Header from "../components/HalfHeaderLogin";
import styles from "../styles/Login.module.css";
import asideLogin from "../assets/SignIn/aside.png";
import google from "../assets/SignIn/google.png";
import { Link /*createSearchParams*/ } from "react-router-dom";
import withNavigate from "../helpers/withNavigate";
import withLocation from "../helpers/withLocation";
import withSearchParams from "../helpers/withSearchParams";
import TabTitle from "../utils/WebDinamis";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const [userInfo, setUserInfo] = useState({});
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });
  TabTitle("Login");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/auth", {
        email: values.email,
        pass: values.pass,
      })
      .then((res) => {
        // console.log(process.env.REACT_APP_BACKEND_HOST);
        // console.log(e);
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.data);
        // console.log(res.data.data.token);
        // console.log(res.data.msg);
        localStorage.setItem("user-info", JSON.stringify(res.data.data));
        localStorage.setItem("token", JSON.stringify(res.data.data.token));
        navigate("/");
      })
      .catch((err) => console.error(err.response.data));
  };
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  return (
    <>
      <section className={`${styles["article"]}`}>
        <aside className={`${styles["flex-column"]}`}>
          <img className={`${styles["aside"]}`} src={asideLogin} alt="" />
        </aside>
        <section>
          <Header />
          <main className={`${styles["flex-column"]} ${styles["center"]}`}>
            <form
              className={`${styles["flex-column"]} ${styles["right-side"]}`}
            >
              <p className={`${styles["email"]}`}>Email Adress :</p>
              <input
                type="text"
                className={`${styles["input-box"]} ${styles["input"]}`}
                placeholder="Enter your email adress"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <p className={`${styles["email"]}`}>Password :</p>
              <input
                type={values.showPass ? "text" : "password"}
                name=""
                id=""
                className={`${styles["input-box"]} ${styles["input"]}`}
                placeholder="Enter your password"
                onChange={(e) => setValues({ ...values, pass: e.target.value })}
              />
              <span>show password</span>
              <input
                type="checkbox"
                className={`${styles["checkbox-pwd"]}`}
                defaultChecked={false}
                onChange={handlePassVisibilty}
              />
              <Link to={"/forgotpwd"}>
                <p className={`${styles["forget"]}`}>Forget Password</p>
              </Link>
              <button
                onClick={handleSubmit}
                className={`${styles["choose"]} ${styles["btn"]} ${styles["krem"]}`}
              >
                Login
              </button>
              <div className={`${styles["google-container"]}`}>
                <img
                  src={google}
                  alt="logo google"
                  className={`${styles["google"]}`}
                />
                <p className={`${styles["google-login"]}`}>Login with Google</p>
              </div>
              <div
                className={`${styles["center"]} ${styles["spc-around"]} ${styles["flex-row"]}`}
              >
                <div className={`${styles["space"]}`}></div>
                <p className={`${styles["dont"]}`}>Dont have an account</p>
                <div className={`${styles["space"]}`}></div>
              </div>
              <Link to={"/signup"}>
                <p
                  className={`${styles["remove"]} ${styles["coklat"]} ${styles["btn"]}`}
                >
                  Sign Up Here
                </p>
              </Link>
            </form>
          </main>
          <Footer />
        </section>
      </section>
    </>
  );
};

Login.propTypes = {
  navigate: PropTypes.func,
  searchParams: PropTypes.object,
  createSearchParams: PropTypes.object,
};

const NewComponent = withSearchParams(withLocation(withNavigate(Login)));

export default NewComponent;
