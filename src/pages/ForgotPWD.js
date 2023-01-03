import React from "react";
import styles from "../styles/ForgotPWD.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import TabTitle from "../utils/WebDinamis";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../redux/actions/auth";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import ReportIcon from "@mui/icons-material/Report";
import { useEffect } from "react";

export default function ForgotPWD() {
  TabTitle("Forget Password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [resend, setResend] = useState(true);
  const [count, setCount] = useState(Date.now() + 120000);
  const directLink = `https://grasberg-coffee-front-end-reactjs.vercel.app/auth/confirm`;
  const clockRef = useRef();
  useEffect(() => {
    auth.token ? navigate("/") : null;
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return setErrEmail(true);
    setCount(Date.now() + 120000);
    const body = {
      email,
      directLink,
    };
    const success = () => {
      clockRef.current.start();
      toast.success("Send OTP success, please check your email");
    };
    const failed = (msg) => {
      toast.error(`Send OTP failed, ${msg}`);
    };
    dispatch(authAction.forgotThunk(body, success, failed));
  };
  return (
    <>
      <Header />
      <section className={`${styles["background"]} container-fluid`}>
        <div className={`${styles[""]} col col-sm col-md col-lg text-center`}>
          <div className={`${styles["title"]} col col-sm col-md col-lg`}>
            Forgot your password?
          </div>
          <div
            className={`${styles["subtitle"]} col col-sm col-md col-lg mb-5`}
          >
            Don’t worry, we got your back!
          </div>
        </div>
        <form
          className={`${styles["button"]} container col col-sm col-md col-lg d-flex justify-content-center`}
          onSubmit={submitHandler}
        >
          <input
            className={`${styles["input"]}`}
            type="text"
            placeholder="Enter your email addres to get link"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrEmail(false);
            }}
          />
          <div className={errEmail ? styles.errEmail : styles.errEmailNo}>
            <ReportIcon />
            <div>Fill Email</div>
          </div>
          <button className={`${styles["send"]} ms-4`} type="submit">
            {auth.isLoading ? (
              <div className={styles["lds-ring"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <div>Send</div>
            )}
          </button>
        </form>
        <div
          className={`${styles["receive"]} mt-5 col col-sm col-md col-lg text-center`}
        >
          <div>Click here if you didn’t receive any link in 2 minutes</div>
        </div>
        <div
          className={`${styles[""]} container col col-sm col-md col-lg d-flex justify-content-center`}
        >
          <button
            className={`${styles["resend"]} col col-sm col-md col-lg-3 text-align mt-5`}
            disabled={resend}
          >
            Resend Link
          </button>
        </div>
        <div
          className={`${styles["timer"]} col col-sm col-md col-lg mt-5 pb-5 text-center`}
        >
          <Countdown
            date={count}
            autoStart={false}
            ref={clockRef}
            onComplete={() => setResend(false)}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
