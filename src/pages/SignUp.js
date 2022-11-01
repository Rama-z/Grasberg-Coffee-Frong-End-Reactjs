import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/SignUp.module.css";
import asideLogin from "../assets/SignIn/aside.png";
import google from "../assets/SignIn/google.png";
import Footer from "../components/FooterHalf";
import Header from "../components/HalfHeaderSignUp";
import { Link } from "react-router-dom";
import withNavigate from "../helpers/withNavigate";
import withLocation from "../helpers/withLocation";
import TabTitle from "../utils/WebDinamis";
import PropTypes from 'prop-types';

class SignUp extends Component {
  render() {
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
              <div className={`${styles["flex-column"]}`}>
                <p className={`${styles["email"]}`}>Email Adress :</p>
                <input
                  type="text"
                  className={`${styles["input-box"]} ${styles["input"]}`}
                  placeholder="Enter your email adress"
                />
                <p className={`${styles["email"]}`}>Password :</p>
                <input
                  type="password"
                  name=""
                  id=""
                  className={`${styles["input-box"]} ${styles["input"]}`}
                  placeholder="Enter your password"
                />
                <p className={`${styles["email"]}`}>Phone Number :</p>
                <input
                  type="password"
                  name=""
                  id=""
                  className={`${styles["input-box"]} ${styles["input"]}`}
                  placeholder="Enter your password"
                />
                <p
                  className={`${styles["choose"]} ${styles["krem"]} ${styles["btn"]}`}
                  onClick={() => {
                    this.props.navigate("/");
                  }}
                >
                  Sign Up
                </p>
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
                  <p className={`${styles["dont"]}`}>
                    Already have an account?
                  </p>
                  <div className={`${styles["space"]}`}></div>
                </div>
                <Link to={"/login"}>
                  <p
                    className={`${styles["remove"]} ${styles["coklat"]} ${styles["btn"]}`}
                  >
                    Login Here
                  </p>
                </Link>
              </div>
            </section>
            <Footer />
          </main>
        </section>
      </>
    );
  }
}

SignUp.propTypes = {
  navigate: PropTypes.string,
};

const NewComponent = withLocation(withNavigate(SignUp));

export default NewComponent;
