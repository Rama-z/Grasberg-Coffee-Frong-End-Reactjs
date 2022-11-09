import React, { Component } from "react";
import { createSearchParams } from "react-router-dom";
import styles from "../styles/Product.module.css";
import CardProduct from "../components/CardProduct";
import CardPromo from "../components/CardPromo";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import TabTitle from "../utils/WebDinamis";
import PropTypes from "prop-types";
import axios from "axios";
import withNavigate from "../helpers/withNavigate";
import withLocation from "../helpers/withLocation";
import withSearchParams from "../helpers/withSearchParams";
import { getFavorite } from "../utils/product";
import productActions from "../redux/actions/product";
import { connect } from "react-redux";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      promo: [],
      underline: "",
      search: "",
      filter: "",
      order_by: "",
      order_in: "",
      page: "",
      limit: "",
    };
  }
  slide() {}
  favoriteClick = () => {
    // const url = process.env.REACT_APP_BACKEND_HOST;
    // console.log(url);
    // this.props.dispatch(productActions.getFavoriteAction());
    getFavorite()
      .then((res) => {
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
        `${process.env.REACT_APP_BACKEND_HOST}products/?search=&filter=1&order_by=&order_in=&page=1&limit=15`
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
  nonCoffeeClick = async () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_HOST}products/?search=&filter=2&order_by=&order_in=&page=1&limit=15`
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
  foodsClick = async () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_HOST}products/?search=&filter=3&order_by=&order_in=&page=&limit=`
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
  promoChanges = async () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}promos/?codes=&menu=`)
      .then((res) => {
        const promo = res.data.result;
        this.setState({ promo });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.favoriteClick();
    // this.props.dispatch(productActions.getFavoriteAction());
    this.promoChanges();
  }
  render() {
    const { setSearchParams } = this.props;
    TabTitle("Grasberg Menu");
    console.log(this.props.searchParams);
    const role = JSON.parse(localStorage.getItem("user-info"))
      ? JSON.parse(localStorage.getItem("user-info")).role
      : "";
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
                <div className={`${styles["gapping"]}`}>
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
                <div className={`${styles["terms"]} col-md mt-5 mb-5`}>
                  <div>
                    <strong>Terms and Condition</strong>
                  </div>
                  <div>1. You can only apply 1 coupon per day</div>
                  <div>2. It only for dine in</div>
                  <div>3. Buy 1 get 1 only for new user</div>
                  <div>4. Should make member card to apply coupon</div>
                </div>
                {role === "admin" ? (
                  <>
                    <div
                      className={`${styles["nb-info-admin"]}`}
                      onClick={() => {
                        this.props.navigate("/editPromo");
                      }}
                    >
                      Edit promo
                    </div>
                    <div
                      className={`${styles["nb-info-admin"]}`}
                      onClick={() => {
                        this.props.navigate("/addPromo");
                      }}
                    >
                      Add new promo
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className={`${styles["post-right"]} col-md col-sm`}>
                <div className={`${styles["menu-toggle"]}`}>
                  <input type="checkbox" />
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="row mt-3 ms-3 text-center">
                  <div
                    className={`${styles["fvrt2"]} col-md-3 col-sm`}
                    onClick={() => {
                      const url = createSearchParams({
                        search: "",
                        orderBy: "transactions",
                      });
                      setSearchParams(url);
                      this.favoriteClick();
                      this.props.dispatch(productActions.getFavoriteAction());
                    }}
                  >
                    Favorite & Promo
                  </div>
                  <div
                    className={`${styles["fvrt2"]} col-md-2 col-sm`}
                    onClick={() => {
                      const url = createSearchParams({
                        filter: "1",
                      });
                      setSearchParams(url);
                      this.coffeeClick();
                    }}
                  >
                    Coffee
                  </div>
                  <div
                    className={`${styles["fvrt2"]} col-md-2 col-sm`}
                    onClick={() => {
                      const url = createSearchParams({
                        filter: "2",
                      });
                      setSearchParams(url);
                      this.nonCoffeeClick();
                    }}
                  >
                    Non Coffee
                  </div>
                  <div
                    className={`${styles["fvrt2"]} col-md-2 col-sm`}
                    onClick={() => {
                      const url = createSearchParams({
                        filter: "3",
                      });
                      setSearchParams(url);
                      this.foodsClick();
                    }}
                  >
                    Foods
                  </div>
                  <div className={`${styles["fvrt2"]} col-md-2 col-sm`}>
                    Add-on
                  </div>
                </div>
                <div className={`${styles["card-product"]} ms-5 mt-2`}>
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
                <div className="ms-5">
                  <div className={`${styles["nb-info"]} mb-5`}>
                    *the price has been cutted by discount appears
                  </div>
                  {role === "admin" ? (
                    <>
                      <div
                        onClick={() => {
                          this.props.navigate("/editProduct");
                        }}
                        className={`${styles["nb-info-admin"]}`}
                      >
                        Edit product
                      </div>
                      <div
                        className={`${styles["nb-info-admin"]}`}
                        onClick={() => {
                          this.props.navigate("/addProduct");
                        }}
                      >
                        Add new product
                      </div>
                    </>
                  ) : (
                    ""
                  )}
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

const mapStateToProps = (reduxState) => {
  return {
    counter: reduxState.counter,
    product: reduxState.product,
  };
};

const NewComponent = withSearchParams(
  withLocation(withNavigate(connect(mapStateToProps)(Product)))
);

export default NewComponent;
