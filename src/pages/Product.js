import React, { Component } from "react";
import { createSearchParams } from "react-router-dom";
import styles from "../styles/Product.module.css";
import CardProduct from "../components/CardProduct";
import CardPromo from "../components/CardPromo";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import TabTitle from "../utils/WebDinamis";
import PropTypes from "prop-types";
import withNavigate from "../helpers/withNavigate";
import withLocation from "../helpers/withLocation";
import withSearchParams from "../helpers/withSearchParams";
import productActions from "../redux/actions/product";
import promoActions from "../redux/actions/promo";
import { connect } from "react-redux";
import loadingImage from "../assets/readerarea (1).svg";
class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      promo: [],
      underline: "",
      search: "",
      filter: "",
      dropdown: false,
      order_by: "",
      order_in: "",
      page: "",
      limit: "",
    };
  }
  slide() {}

  onSortHandler = (sort, cending) => {
    this.setState(
      (prevState) => ({
        searchParams: {
          ...prevState.searchParams,
          filter: prevState.searchParams.filter
            ? prevState.searchParams.filter
            : "",
          order_by: sort,
          order_in: cending,
          page: "2",
        },
      }),
      () => {
        this.props.setSearchParams(this.state.searchParams);
      }
    );
  };

  onPricehHandler = (sort, cending) => {
    this.setState(
      (prevState) => ({
        searchParams: {
          ...prevState.searchParams,
          filter: prevState.searchParams.filter
            ? prevState.searchParams.filter
            : "",
          order_by: sort,
          order_in: cending,
          page: "1",
        },
      }),
      () => {
        this.props.setSearchParams(this.state.searchParams);
      }
    );
  };

  getData = (limit) => {
    this.props.dispatch(productActions.getProductNextAction(limit));
  };

  componentDidMount() {
    if (this.props.searchParams.toString()) {
      return (
        this.props.dispatch(promoActions.getPromoAction()),
        this.props.dispatch(
          productActions.getAllProductAction(this.props.searchParams.toString())
        )
      );
    }
    this.props.dispatch(productActions.getFavoriteAction("page=1&limit=4"));
    console.log(this.props.searchParams.toString());
    this.props.dispatch(promoActions.getPromoAction());
    this.setState((prevState) => ({
      searchParams: {
        ...prevState.searchParams,
        search: "",
        filter: "",
        order_by: "transactions",
        order_in: "",
        page: "1",
        limit: "4",
      },
    }));
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.searchParams.toString() !== this.props.searchParams.toString()
    ) {
      console.log(this.props.searchParams.toString());
      this.props.dispatch(
        productActions.getAllProductAction(this.props.searchParams.toString())
      );
    }
  }

  render() {
    const { setSearchParams } = this.props;
    TabTitle("Grasberg Menu");
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
                  {this.props.promo.promo.map((item, idx) => {
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
                      this.setState((prevState) => ({
                        searchParams: {
                          ...prevState.searchParams,
                          search: "",
                          filter: "",
                          order_by: "transactions",
                          order_in: "",
                          page: "1",
                          limit: "4",
                        },
                      }));
                      const url = createSearchParams({
                        search: "",
                        filter: "",
                        order_by: "transactions",
                        order_in: "",
                        page: "1",
                        limit: "4",
                      });
                      setSearchParams(url);
                      this.props.dispatch(
                        productActions.getFavoriteAction("page=1&limit=4")
                      );
                    }}
                  >
                    Favorite
                  </div>
                  <div
                    className={`${styles["fvrt2"]} col-md-2 col-sm`}
                    onClick={() => {
                      this.setState((prevState) => ({
                        searchParams: {
                          ...prevState.searchParams,
                          search: "",
                          filter: "1",
                          order_by: "",
                          order_in: "",
                          page: "1",
                          limit: "4",
                        },
                      }));
                      const url = createSearchParams({
                        search: "",
                        filter: "1",
                        order_by: "",
                        order_in: "",
                        page: "1",
                        limit: "4",
                      });
                      setSearchParams(url);
                      this.props.dispatch(
                        productActions.getCoffeeAction("page=1&limit=4")
                      );
                    }}
                  >
                    Coffee
                  </div>
                  <div
                    className={`${styles["fvrt2"]} col-md-2 col-sm`}
                    onClick={() => {
                      this.setState((prevState) => ({
                        searchParams: {
                          ...prevState.searchParams,
                          search: "",
                          filter: "2",
                          order_by: "",
                          order_in: "",
                          page: "1",
                          limit: "4",
                        },
                      }));
                      const url = createSearchParams({
                        search: "",
                        filter: "2",
                        order_by: "",
                        order_in: "",
                        page: "1",
                        limit: "4",
                      });
                      setSearchParams(url);
                      this.props.dispatch(
                        productActions.getNonCoffeeAction("page=1&limit=4")
                      );
                    }}
                  >
                    Non Coffee
                  </div>
                  <div
                    className={`${styles["fvrt2"]} col-md-2 col-sm`}
                    onClick={() => {
                      this.setState((prevState) => ({
                        searchParams: {
                          ...prevState.searchParams,
                          search: "",
                          filter: "3",
                          order_by: "",
                          order_in: "",
                          page: "1",
                          limit: "4",
                        },
                      }));
                      const url = createSearchParams({
                        search: "",
                        filter: "3",
                        order_by: "",
                        order_in: "",
                        page: "1",
                        limit: "4",
                      });
                      setSearchParams(url);
                      this.props.dispatch(
                        productActions.getFoodAction("page=1&limit=4")
                      );
                    }}
                  >
                    Foods
                  </div>
                  <div className={`${styles["fvrt2"]} col-md-2 col-sm`}>
                    Add-on
                  </div>
                </div>
                <div
                  className={styles["setting-dropdown"]}
                  onClick={() => {
                    this.setState((prevState) => ({
                      dropdown: prevState.dropdown ? false : true,
                    }));
                  }}
                >
                  <p className={styles.filters}>Filter</p>
                  <div
                    className={
                      this.state.dropdown ? styles["list"] : styles["list-hide"]
                    }
                  >
                    <p
                      onClick={() => {
                        this.onSortHandler("created_at", "asc");
                      }}
                    >
                      Newest
                    </p>
                    <p
                      onClick={() => {
                        this.onSortHandler("created_at", "desc");
                      }}
                    >
                      Latest
                    </p>
                    <p
                      onClick={() => {
                        this.onPricehHandler("price", "asc");
                      }}
                    >
                      Cheap to Expensive
                    </p>
                    <p
                      onClick={() => {
                        this.onPricehHandler("price", "desc");
                      }}
                    >
                      Expensive to Cheap
                    </p>
                  </div>
                </div>
                <div className={`${styles["card-product"]} ms-5 mt-2`}>
                  {!this.props.product.isLoading ? (
                    this.props.product.product.map((item, idx) => {
                      return (
                        <CardProduct
                          menu={item.menu}
                          price={item.price}
                          key={idx}
                          id={item.id}
                          image={item.image}
                        />
                      );
                    })
                  ) : (
                    <img
                      src={loadingImage}
                      alt="loading"
                      className={`${styles["loading"]}`}
                    />
                  )}
                </div>
                <div className={styles.bungkusan}>
                  <button
                    className={this.props.product.togglePrev}
                    onClick={() => {
                      const url = createSearchParams({
                        search: this.state.searchParams.search || "",
                        filter: this.state.searchParams.filter,
                        order_by: this.state.searchParams.order_by,
                        order_in: this.state.searchParams.order_in,
                        page: Number(this.state.searchParams.page).toString(),
                        limit: "4",
                      });
                      setSearchParams(url);
                    }}
                  >
                    PREV
                  </button>
                  <button
                    className={this.props.product.toggleNext}
                    onClick={() => {
                      this.setState((prevState) => ({
                        searchParams: {
                          ...prevState.searchParams,
                        },
                      }));
                      const url = createSearchParams({
                        search: this.state.searchParams.search || "",
                        filter: this.state.searchParams.filter,
                        order_by: this.state.searchParams.order_by,
                        order_in: this.state.searchParams.order_in,
                        page: (
                          Number(this.state.searchParams.page) + 1
                        ).toString(),
                        limit: "4",
                      });
                      setSearchParams(url);
                    }}
                  >
                    NEXT
                  </button>
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
    promo: reduxState.promo,
  };
};

const NewComponent = withSearchParams(
  withLocation(withNavigate(connect(mapStateToProps)(Product)))
);

export default NewComponent;
