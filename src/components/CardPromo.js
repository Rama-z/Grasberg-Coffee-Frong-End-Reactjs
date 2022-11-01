import React, { Component } from "react";
import styles from "../styles/CardPromos.module.css";
import PropTypes from "prop-types";

export default class CardPromo extends Component {
  render() {
    return (
      <>
        <div className={`${styles["border-a"]} row mt-4`}>
          <div className="col-md-3 col col-lg-3 col-sm">
            <img
              className={`${styles["promo-img"]}`}
              src={`http://localhost:8080/${this.props.image}`}
              alt=""
            />
          </div>
          <div
            className={`${styles["font-promos"]} col-md-7 col col-lg col-sm`}
          >
            <strong className="me-">Codes: {this.props.menu}</strong>
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
