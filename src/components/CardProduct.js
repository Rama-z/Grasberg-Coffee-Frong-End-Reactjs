import React, { Component } from "react";
import styles from "../styles/CardProduct.module.css";
import withNavigate from "../helpers/withNavigate";
import withLocation from "../helpers/withLocation";
import withSearchParams from "../helpers/withSearchParams";
import PropTypes from "prop-types";

class CardProduct extends Component {
  render() {
    console.log(this.props.menu);
    return (
      <>
        <section className={`${styles["post-cont"]}`}>
          <img
            onClick={() => {
              this.props.navigate("/productdetails");
            }}
            className={`${styles["product-img"]} rounded-circle col-md col col-sm col-lg`}
            src={`http://localhost:8080/${this.props.image}`}
            alt=""
          />
          <div
            className={`${styles["product-bg"]} col-md-9 col col-sm col-lg-10`}
          >
            <div
              onClick={() => {
                this.props.navigate("/productdetails");
              }}
              className={`${styles["product-name"]} col-md col col-sm col-lg`}
            >
              {this.props.menu}
            </div>
            <div
              className={`${styles["product-price"]} col-md col col-sm col-lg`}
            >
              IDR {this.props.price}
            </div>
          </div>
        </section>
      </>
    );
  }
}

CardProduct.propTypes = {
  menu: PropTypes.string,
  price: PropTypes.number,
  navigate: PropTypes.func,
  searchParams: PropTypes.object,
  createSearchParams: PropTypes.object,
};

export default withSearchParams(withLocation(withNavigate(CardProduct)));
