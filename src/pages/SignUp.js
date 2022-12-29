import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/SignUp.module.css";
import asideLogin from "../assets/SignIn/aside.png";
import google from "../assets/SignIn/google.png";
import Footer from "../components/FooterHalf";
import Header from "../components/HalfHeaderLogin";
import TabTitle from "../utils/WebDinamis";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../redux/actions/auth";
import ReportIcon from "@mui/icons-material/Report";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [values, setValues] = useState({
    email: "",
    pass: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = () => {
      navigate("/auth/login");
    };
    const failed = (msg) => {
      toast.error(`Register Failed, ${msg}`);
    };
    if (values.email.trim() === "") {
      if (values.pass.trim() === "") {
        if (values.phone.trim() === "") {
          setErrEmail(true);
          setErrPass(true);
          setErrPhone(true);
          return;
        }
        setErrEmail(true);
        setErrPass(true);
        return;
      }
      return setErrEmail(true);
    }
    if (values.pass.trim() === "") {
      if (values.phone.trim() === "") {
        setErrPass(true);
        setErrPhone(true);
        return;
      }
      return setErrPass(true);
    }
    if (values.phone.trim() === "") return setErrPhone(true);
    dispatch(authAction.registerThunk(values, success, failed));
  };
  const handlePassVisibility = () => {
    setShowPass(!showPass);
  };
  TabTitle("Sign Up");
  return (
    <>
      <section className={`${styles["article"]}`}>
        <aside className={`${styles["flex-column"]}`}>
          <img className={`${styles["aside"]}`} src={asideLogin} alt="" />
        </aside>
        <main>
          <Header />
          <section className={`${styles["center"]} ${styles["flex-column"]}`}>
            <form className={`${styles["flex-column"]}`}>
              <p className={`${styles["email"]}`}>Email Adress :</p>
              <input
                type="text"
                className={`${styles["input-box"]} ${
                  errEmail ? styles["inputErr"] : styles["input"]
                }`}
                placeholder="Enter your email adress"
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
                  setErrEmail(false);
                }}
                required
              />
              <div className={errEmail ? styles.errEmail : styles.errEmailNo}>
                <ReportIcon />
                <div>Fill Email Address</div>
              </div>
              <div style={{ position: "relative" }}>
                <p className={`${styles["email"]}`}>Password :</p>
                <input
                  type={showPass ? "text" : "password"}
                  name=""
                  className={`${styles["input-box"]} ${
                    errPass ? styles["inputErr"] : styles["input"]
                  }`}
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setValues({ ...values, pass: e.target.value });
                    setErrPass(false);
                  }}
                  required
                />
                {showPass ? (
                  <VisibilityIcon
                    className={`${styles["visibility"]}`}
                    onClick={handlePassVisibility}
                  />
                ) : (
                  <VisibilityOffIcon
                    className={`${styles["visibility"]}`}
                    onClick={handlePassVisibility}
                  />
                )}
              </div>
              <div className={errPass ? styles.errEmail : styles.errEmailNo}>
                <ReportIcon />
                <div>Fill Password</div>
              </div>
              <p className={`${styles["email"]}`}>Phone Number :</p>
              <input
                type="text"
                name=""
                className={`${styles["input-box"]} ${
                  errPhone ? styles["inputErr"] : styles["input"]
                }`}
                placeholder="Enter your password"
                onChange={(e) => {
                  setValues({ ...values, phone: e.target.value });
                  setErrPhone(false);
                }}
                required
              />
              <div className={errPhone ? styles.errEmail : styles.errEmailNo}>
                <ReportIcon />
                <div>Fill Phone Number</div>
              </div>
              <div
                className={`${styles["choose"]} ${styles["krem"]} ${styles["btn"]}`}
                onClick={handleSubmit}
              >
                {auth.isLoading ? (
                  <div className={styles["lds-ring"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <div>Sign Up</div>
                )}
              </div>
              <div className={`${styles["google-container"]}`}>
                <img
                  src={google}
                  alt="logo google"
                  className={`${styles["google"]}`}
                />
                <p className={`${styles["google-login"]}`}>
                  Sign Up with Google
                </p>
              </div>
              <div
                className={`${styles["center"]} ${styles["spc-around"]} ${styles["flex-row"]}`}
              >
                <div className={`${styles["space"]}`}></div>
                <p className={`${styles["dont"]}`}>Already have an account?</p>
                <div className={`${styles["space"]}`}></div>
              </div>
              <p
                className={`${styles["remove"]} ${styles["coklat"]} ${styles["btn"]}`}
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Login Here
              </p>
            </form>
          </section>
          <Footer />
        </main>
      </section>
    </>
  );
};

export default SignUp;
