import React, { Component } from "react";
import styles from "../styles/ForgotPWD.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import withNavigate from "../helpers/withNavigate";
import TabTitle from "../utils/WebDinamis";
import PropTypes from "prop-types";

class ForgotPWD extends Component {
  render() {
    TabTitle("Forget Password");
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
          <div
            className={`${styles["button"]} container col col-sm col-md col-lg d-flex justify-content-center`}
          >
            <input
              className={`${styles["input"]}`}
              type="text"
              placeholder="Enter your email addres to get link"
            />
            <button
              className={`${styles["send"]} ms-4`}
              onClick={() => {
                this.props.navigate("/");
              }}
            >
              Send
            </button>
          </div>
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
            >
              Resend Link
            </button>
          </div>
          <div
            className={`${styles["timer"]} col col-sm col-md col-lg mt-5 pb-5 text-center`}
          >
            02:24
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

ForgotPWD.propTypes = {
  navigate: PropTypes.string,
};

const NewNavigate = withNavigate(ForgotPWD);

export default NewNavigate;
