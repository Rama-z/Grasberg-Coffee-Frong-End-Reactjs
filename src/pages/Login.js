import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/FooterHalf";
import Header from "../components/HalfHeaderLogin";
import styles from "../styles/Login.module.css";
import asideLogin from "../assets/SignIn/aside.png";
import google from "../assets/SignIn/google.png";
import ReportIcon from "@mui/icons-material/Report";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TabTitle from "../utils/WebDinamis";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../redux/actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  TabTitle("Login");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = () => {
      navigate("/");
    };
    const failed = (msg) => {
      toast.error(`Login Failed, ${msg}`);
    };
    if (values.email.trim() === "") {
      if (values.pass.trim() === "") {
        setErrEmail(true);
        setErrPass(true);
        return;
      }
      return setErrEmail(true);
    }
    if (values.pass.trim() === "") return setErrPass(true);
    dispatch(authAction.loginThunk(values, success, failed));
  };
  const handlePassVisibility = () => {
    setShowPass(!showPass);
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
                className={`${styles["input-box"]} ${
                  errEmail ? styles["inputErr"] : styles["input"]
                }`}
                placeholder="Enter your email adress"
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
                  setErrEmail(false);
                }}
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
                  id=""
                  className={`${styles["input-box"]} ${
                    errPass ? styles["inputErr"] : styles["input"]
                  }`}
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setValues({ ...values, pass: e.target.value });
                    setErrPass(false);
                  }}
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
              {/* <input
                type="checkbox"
                className={`${styles["checkbox-pwd"]}`}
                defaultChecked={false}
                onChange={handlePassVisibility}
              /> */}
              <div className={errPass ? styles.errEmail : styles.errEmailNo}>
                <ReportIcon />
                <div>Fill Password</div>
              </div>
              <p
                className={`${styles["forget"]}`}
                onClick={() => navigate("/auth/forgot")}
              >
                Forget Password
              </p>
              <button
                onClick={handleSubmit}
                className={`${styles["choose"]} ${styles["btn"]} ${styles["krem"]}`}
              >
                {auth.isLoading ? (
                  <div className={styles["lds-ring"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <div>Login</div>
                )}
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
              <p
                className={`${styles["remove"]} ${styles["coklat"]} ${styles["btn"]}`}
                onClick={() => {
                  navigate("/auth/register");
                }}
              >
                Sign Up Here
              </p>
            </form>
          </main>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default Login;
