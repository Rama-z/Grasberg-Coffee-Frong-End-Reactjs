import React from "react";
import styles from "../styles/ForgotPWD.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import TabTitle from "../utils/WebDinamis";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authAction from "../redux/actions/auth";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

export default function ForgotPWD() {
  TabTitle("Forget Password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [count, setCount] = useState(Date.now() + 120000);
  const directLink = `http://localhost:3000/auth/confirm`;
  const clockRef = useRef();
  const submitHandler = (e) => {
    setCount(Date.now() + 120000);
    e.preventDefault();
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
            }}
          />
          <button className={`${styles["send"]} ms-4`} type="submit">
            Send
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
            onClick={submitHandler}
          >
            Resend Link
          </button>
        </div>
        <div
          className={`${styles["timer"]} col col-sm col-md col-lg mt-5 pb-5 text-center`}
        >
          <Countdown date={count} autoStart={false} ref={clockRef} />
        </div>
      </section>
      <Footer />
    </>
  );
}
