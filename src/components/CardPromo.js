import React, { Component } from "react";
import styles from "../styles/CardPromos.module.css";
import avatar from "../assets/Home/image 46.png";
import PropTypes from "prop-types";

export default class CardPromo extends Component {
  render() {
    return (
      <>
        <div className={`${styles["border-a"]} row mt-4`}>
          <div className="col-md-3 col col-lg-3 col-sm">
            <img className={`${styles["promo-img"]}`} src={avatar} alt="" />
          </div>
          <div
            className={`${styles["font-promos"]} col-md-7 col col-lg col-sm`}
          >
            <strong className="me-">asdasdasdasd</strong>
            <p>Get one of our favorite menu for free!</p>
          </div>
        </div>
      </>
    );
  }
}

CardPromo.propTypes = {
  cobainya: PropTypes.string,
};
