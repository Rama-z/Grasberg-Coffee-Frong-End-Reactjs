import React, { Component } from "react";
import styles from "../styles/Product.module.css";
import CardProduct from "../components/CardProduct";
import CardPromo from "../components/CardPromo";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import TabTitle from "../utils/WebDinamis";
// import { createSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import withNavigate from "../helpers/withNavigate";
import withLocation from "../helpers/withLocation";
import withSearchParams from "../helpers/withSearchParams";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      promo: [],
    };
  }
  favoriteClick = () => {
    axios
      .get(
        `http://localhost:8080/api/v1/products/?search=&filter=&order_by=transactions&order_in=asc&page=1&limit=15`
      )
      .then((res) => {
        console.log(res.data);
        const product = res.data.result;
        this.setState({ product });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  coffeeClick = async () => {
    axios
      .get(
        `http://localhost:8080/api/v1/products/?search=&filter=1&order_by=&order_in=&page=1&limit=15`
      )
      .then((res) => {
        const product = res.data.result;
        this.setState({ product });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  nonCoffeeClick = async () => {
    axios
      .get(
        `http://localhost:8080/api/v1/products/?search=&filter=2&order_by=&order_in=&page=1&limit=15`
      )
      .then((res) => {
        const product = res.data.result;
        this.setState({ product });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  foodsClick = async () => {
    axios
      .get(
        `http://localhost:8080/api/v1/products/?search=&filter=3&order_by=&order_in=&page=1&limit=15`
      )
      .then((res) => {
        const product = res.data.result;
        this.setState({ product });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  promoChanges = async () => {
    axios
      .get(`http://localhost:8080/api/v1/promos/?codes=&menu=`)
      .then((res) => {
        const promo = res.data.result;
        let codes = "";
        promo.map((item) => {
          return (codes = item);
        });
        // console.log(res);
        // console.log(res.data.codes);
        console.log(promo);
        console.log(codes.image);
        // console.log(promo.data);
        this.setState({ promo });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    TabTitle("Grasberg Menu");
    return (
      <>
        <Header />
        <main>
          <section className="container mb-5">
            <div className="row">
              <div
                className={`${styles["border-end"]} col-md-4 col-sm col col-lg-3`}
              >
                <div className="col-md text-center">
                  <div
                    className={`${styles["promo-t"]} col-md mt-3 mb-2`}
                    onClick={this.promoChanges}
                  >
                    Promo Today
                  </div>
                  <div className={`${styles["promo-t2"]} col-md mb-3`}>
                    Coupons will be updated every weeks. Check them out!
                  </div>
                </div>
                <div className="row">
                  {this.state.promo.map((item, idx) => {
                    return (
                      <CardPromo
                        menu={item.codes}
                        discount={item.discount}
                        key={idx}
                        id={item.id}
                        image={item.image}
                      />
                    );
                  })}
                </div>
                <div className={`${styles["apply"]} col-md text-center my-5`}>
                  Apply Coupon
                </div>
                <div className={`${styles["terms"]} col-md mt-5`}>
                  <div>
                    <strong>Terms and Condition</strong>
                  </div>
                  <div>1. You can only apply 1 coupon per day</div>
                  <div>2. It only for dine in</div>
                  <div>3. Buy 1 get 1 only for new user</div>
                  <div>4. Should make member card to apply coupon</div>
                </div>
              </div>
              <div className={`${styles["post-right"]} col-md col-sm`}>
                <div className="row mt-3 ms-3 text-center">
                  <div className={`${styles["fvrt"]} col-md-3 col-sm`}>
                    <div onClick={this.favoriteClick}>Favorite & Promo</div>
                    <div className={`${styles["underline"]}`}></div>
                  </div>
                  <div
                    className={`${styles["fvrt2"]} col-md-2 col-sm`}
                    onClick={this.coffeeClick}
                  >
                    Coffee
                  </div>
                  <div
                    className={`${styles["fvrt2"]} col-md-2 col-sm`}
                    onClick={this.nonCoffeeClick}
                  >
                    Non Coffee
                  </div>
                  <div
                    className={`${styles["fvrt2"]} col-md-2 col-sm`}
                    onClick={this.foodsClick}
                  >
                    Foods
                  </div>
                  <div className={`${styles["fvrt2"]} col-md-2 col-sm`}>
                    Add-on
                  </div>
                </div>
                <div
                  className={`${styles["card-product"]} d-flex justify-content-center`}
                >
                  {this.state.product.map((item, idx) => {
                    return (
                      <CardProduct
                        menu={item.menu}
                        price={item.price}
                        key={idx}
                        id={item.id}
                        image={item.image}
                      />
                    );
                  })}
                </div>
                <div className={`${styles["nb-info"]}`}>
                  *the price has been cutted by discount appears
                </div>
                <div className="col-md"></div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

Product.propTypes = {
  navigate: PropTypes.func,
  searchParams: PropTypes.object,
  createSearchParams: PropTypes.object,
};

const NewComponent = withSearchParams(withLocation(withNavigate(Product)));

export default NewComponent;
