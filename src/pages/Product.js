import React, { Component, useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styles from "../styles/Product.module.css";
import CardProduct from "../components/CardProduct";
import CardPromo from "../components/CardPromo";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import TabTitle from "../utils/WebDinamis";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/actions/product";
import promoAction from "../redux/actions/promo";
import "react-toastify/dist/ReactToastify.css";
import transactionAction from "../redux/actions/transaction";

export default function Product() {
  TabTitle("Grasberg Menu");
  const role = useSelector((state) => state.auth.role);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const promo = useSelector((state) => state.promo.promo);
  const meta = useSelector((state) => state.product.meta);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dropdown, setDropdown] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [click, setClick] = useState("");
  const params = `?search=${searchParams.get("search")}&sort=${searchParams.get(
    "sort"
  )}&filter=${searchParams.get("filter")}&page=${searchParams.get(
    "page"
  )}&limit=12`;
  useEffect(() => {
    const param = `?codes=`;
    const success = () => {
      setSearchParams({
        search: "",
        sort: "popular",
        filter: "",
        page: "1",
      });
    };
    dispatch(promoAction.getPromoThunk(param));
    dispatch(
      productActions.getProductsThunk(
        `?search=&sort=popular&filter=&page=1&limit=12`,
        success
      )
    );
    window.scrollTo(0, 0);
  }, [dispatch]);
  useEffect(() => {
    dispatch(productActions.getProductsThunk(params));
  }, [dispatch, trigger]);
  return (
    <>
      <Header setTrigger={setTrigger} />
      <main>
        <section className="container mb-5">
          <div className="row">
            <div className={`col-md-4 col-sm col col-lg-3`}>
              <div className="col-md text-center">
                <div
                  className={`${styles["promo-t"]} col-md mt-3 mb-2`}
                  onClick={() => {}}
                >
                  Promo Today
                </div>
                <div className={`${styles["promo-t2"]} col-md mb-3`}>
                  Coupons will be updated every weeks. Check them out!
                </div>
              </div>
              <div className={`${styles["border-end"]}`}>
                <div className={`${styles["gapping"]}`}>
                  {promo.map((item, idx) => {
                    return (
                      <CardPromo
                        code={item.codes}
                        discount={item.discount}
                        desc={item.description}
                        key={idx}
                        id={item.id}
                        image={item.image}
                      />
                    );
                  })}
                </div>
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
                      navigate("/editPromo");
                    }}
                  >
                    Edit promo
                  </div>
                  <div
                    className={`${styles["nb-info-admin"]}`}
                    onClick={() => {
                      navigate("/addPromo");
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
                  className={`${
                    click === "favorite"
                      ? styles["favorite-clicked"]
                      : styles["fvrt2"]
                  } col-md-3 col-sm`}
                  onClick={() => {
                    setTrigger(!trigger);
                    setClick("favorite");
                    setSearchParams({
                      search: "",
                      sort: "popular",
                      filter: "",
                      page: "1",
                    });
                  }}
                >
                  Favorite
                </div>
                <div
                  className={`${
                    click === "coffee"
                      ? styles["favorite-clicked"]
                      : styles["fvrt2"]
                  } col-md-2 col-sm`}
                  onClick={() => {
                    setTrigger(!trigger);
                    setClick("coffee");
                    setSearchParams({
                      search: "",
                      sort: "",
                      filter: "coffee",
                      page: "1",
                    });
                  }}
                >
                  Coffee
                </div>
                <div
                  className={`${
                    click === "non coffee"
                      ? styles["favorite-clicked"]
                      : styles["fvrt2"]
                  } col-md-2 col-sm`}
                  onClick={() => {
                    setTrigger(!trigger);
                    setClick("non coffee");
                    setSearchParams({
                      search: "",
                      sort: "",
                      filter: "nonCoffee",
                      page: "1",
                    });
                  }}
                >
                  Non Coffee
                </div>
                <div
                  className={`${
                    click === "food"
                      ? styles["favorite-clicked"]
                      : styles["fvrt2"]
                  } col-md-2 col-sm`}
                  onClick={() => {
                    setTrigger(!trigger);
                    setClick("foods");
                    setSearchParams({
                      search: "",
                      sort: "",
                      filter: "food",
                      page: "1",
                    });
                  }}
                >
                  Foods
                </div>
                <div className={`${styles["favorite"]} col-md-2 col-sm`}>
                  Add-on
                </div>
              </div>
              <div
                className={styles["setting-dropdown"]}
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                <p className={styles.filters}>Sort</p>
                <div
                  className={dropdown ? styles["list"] : styles["list-hide"]}
                >
                  <p
                    onClick={() => {
                      setTrigger(!trigger);
                      setSearchParams({
                        search: "",
                        sort: "newest",
                        filter: `${searchParams.get("filter")}`,
                        page: "1",
                      });
                    }}
                  >
                    Newest
                  </p>
                  <p
                    onClick={() => {
                      setTrigger(!trigger);
                      setSearchParams({
                        search: "",
                        sort: "oldest",
                        filter: `${searchParams.get("filter")}`,
                        page: "1",
                      });
                    }}
                  >
                    Latest
                  </p>
                  <p
                    onClick={() => {
                      setTrigger(!trigger);
                      setSearchParams({
                        search: "",
                        sort: "cheapest",
                        filter: `${searchParams.get("filter")}`,
                        page: "1",
                      });
                    }}
                  >
                    Cheap to Expensive
                  </p>
                  <p
                    onClick={() => {
                      setTrigger(!trigger);
                      setSearchParams({
                        search: "",
                        sort: "priciest",
                        filter: `${searchParams.get("filter")}`,
                        page: "1",
                      });
                    }}
                  >
                    Expensive to Cheap
                  </p>
                </div>
              </div>
              <div>
                {!product.isLoading ? (
                  <div className={`${styles["card-product"]} ms-5 mt-2`}>
                    {product.product.map((item, idx) => {
                      return (
                        <CardProduct
                          menu={item.menu}
                          price={item.price}
                          key={idx}
                          id={item.id}
                          image={item.image}
                          discount={item.discount}
                        />
                      );
                    })}
                    <div className={styles.wrap}>
                      <button
                        disabled={searchParams.get("page") == 1}
                        className={styles.wrapped}
                        onClick={() => {
                          setTrigger(!trigger);
                          setSearchParams({
                            search: "",
                            sort: `${searchParams.get("sort")}`,
                            filter: `${searchParams.get("filter")}`,
                            page: `${searchParams.get("page") - 1}`,
                          });
                        }}
                      >
                        PREV
                      </button>
                      <button
                        disabled={meta.totalPage == searchParams.get("page")}
                        className={styles.wrapped}
                        onClick={() => {
                          setTrigger(!trigger);
                          setSearchParams({
                            search: "",
                            sort: `${searchParams.get("sort")}`,
                            filter: `${searchParams.get("filter")}`,
                            page: `${Number(searchParams.get("page")) + 1}`,
                          });
                        }}
                      >
                        NEXT
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles["lds-spinner"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </div>
              <div className="ms-5">
                <div className={`${styles["nb-info"]} mb-5`}>
                  *the price has been cutted by discount appears
                </div>
                {role === "admin" ? (
                  <>
                    <div
                      className={`${styles["nb-info-admin"]}`}
                      onClick={() => {
                        navigate("/addProduct");
                      }}
                    >
                      Add new product
                    </div>
                    <div
                      className={`${styles["nb-info-admin"]}`}
                      onClick={() => {
                        navigate("/addPromo");
                      }}
                    >
                      Add new promo
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
