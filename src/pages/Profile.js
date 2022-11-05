import React, { Component } from "react";
import styles from "../styles/Profile.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import profil from "../assets/profile.png";
export default class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        <section>
          <main className={`${styles["background"]}`}>
            <section className={`${styles["flex-column"]} ${styles["title"]}`}>
              User Profile
            </section>
            <section
              className={`${styles["flex-row"]} ${styles["content"]} ${styles["center"]} ${styles["mid-profile"]}`}
            >
              <section
                className={`${styles["flex-column"]} ${styles["content"]} ${styles["profileImage"]} ${styles["mid-in-profile"]}`}
              >
                <div className={`${styles["flex-row"]}`}>
                  <img
                    className={`${styles["circular"]}`}
                    src={profil}
                    alt=""
                  />
                </div>
                <p className={`${styles["username"]}`}>Zulaikha</p>
                <p className={`${styles["email"]}`}>zulaikha17@gmail.com</p>
                <p
                  className={`${styles["btn"]} ${styles["choose"]} ${styles["krem"]}`}
                >
                  Choose Photo
                </p>
                <p
                  className={`${styles["btn"]} ${styles["coklat"]} ${styles["remove"]}`}
                >
                  Remove Photo
                </p>
                <p className={`${styles["edit"]}`}>Edit Password</p>
                <p className={`${styles["do"]}`}>
                  Do you want to save the change?
                </p>
                <p
                  className={`${styles["btn"]} ${styles["coklat"]} ${styles["save"]}`}
                >
                  Save Change
                </p>
                <p
                  className={`${styles["btn"]} ${styles["krem"]} ${styles["cancel"]}`}
                >
                  Cancel
                </p>
                <Link to="/">
                  <p
                    className={`${styles["log"]}`}
                    onClick={() => {
                      localStorage.removeItem("user-info");
                    }}
                  >
                    Log out
                  </p>
                </Link>
              </section>
              <section
                className={`${styles["content2"]} ${styles["mid-in-profile"]} ${styles["flex-column"]}`}
              >
                <div
                  className={`${styles["format-text1"]} ${styles["flex-row"]}`}
                >
                  <p className={`${styles["font-format2"]}`}>Contacts</p>
                  <div>
                    <img src="./assets/pena.png" alt="" />
                  </div>
                </div>
                <div
                  className={`${styles["media-footer"]} ${styles["flex-row"]}`}
                >
                  <div
                    className={`${styles["column-format"]} ${styles["flex-column"]}`}
                  >
                    <p
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Email Adress :<p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input Email"
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </p>
                    <p
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Delivery Adress :<p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input Delivery Adress"
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </p>

                    <p
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Mobile Number : <p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input Mobile Number"
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles["flex-row"]} ${styles["font-format2"]} ${styles["details"]}`}
                >
                  Details
                </div>
                <div
                  className={`${styles["media-footer"]} ${styles["flex-row"]}`}
                >
                  <div
                    className={`${styles["flex-column"]} ${styles["column-format"]}`}
                  >
                    <p
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Display Name :
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input Display Name"
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </p>
                    <p
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      First Name :
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input Your First Name"
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </p>
                    <p
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Last Name :
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input Your Last Name"
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </p>
                    <p
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      DD/MM/YY
                      <input type="text" className={`${styles["input"]}`} />
                      <div className={`${styles["under-input"]}`}></div>
                    </p>
                  </div>
                  <div className={`${styles["flex-column"]}`}></div>
                </div>
                <div>
                  <div
                    className={`${styles["flex-row"]} ${styles["radio"]} ${styles["center"]}`}
                  >
                    <label htmlFor="Male">
                      <input
                        type="radio"
                        id="Male"
                        name="gender"
                        value="Male"
                      />
                      Male
                    </label>
                    <label htmlFor="Female">
                      <input
                        type="radio"
                        id="Female"
                        name="gender"
                        value="Female"
                      />
                      Female
                    </label>
                  </div>
                </div>
              </section>
            </section>
          </main>
        </section>
        <Footer />
      </>
    );
  }
}
