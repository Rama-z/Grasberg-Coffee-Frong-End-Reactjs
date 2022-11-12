import React, { Fragment, useEffect, useState, useMemo } from "react";
import ProductCard from "../components/CardProduct";
import PromoCard from "../components/CardPromo";
import NavBar from "../components/HeaderHome";
import styles from "../styles/TryProduct.module.css";
import withSearchParams from "../helpers/withSearchParams";
import { createSearchParams, useLocation } from "react-router-dom";
import { getProductsAction } from "../../redux/actions/products";
import { connect, useSelector } from "react-redux";
import { getPromosAction } from "../../redux/actions/getPromos";

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const Products = ({ setSearchParams, dispatch, product }) => {
  const promos = useSelector((state) => state.getPromos.promos);
  const getQuery = useQuery();
  // const [product, setProduct] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState({
    search: getQuery.get("search") ? getQuery.get("search") : "",
    // categories: getQuery.get("categories") ? getQuery.get("categories") : "",
    // minPrice: getQuery.get("minPrice") ? getQuery.get("minPrice") : 0,
    // maxPrice: getQuery.get("maxPrice") ? getQuery.get("maxPrice") : 1000000,
    sort: getQuery.get("sort") ? getQuery.get("sort") : "popular",
    page: getQuery.get("page") ? getQuery.get("page") : 1,
  });

  useEffect(() => {
    const urlSearchParams = createSearchParams({ ...query });
    setSearchParams(urlSearchParams);
    dispatch(getProductsAction(query));
    dispatch(getPromosAction());
    setTotalPage(product.meta.totalPage);
  }, [dispatch, product.meta.totalPage, query, setSearchParams]);
  console.log(promos);
  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };
  const handleDropdown = () => setIsActive(!isActive);

  return (
    <Fragment>
      <NavBar />
      <main>
        <div className={`row ${styles["main"]}`}>
          <section className={`col-12 col-md-4 ${styles["promo-section"]}`}>
            <div className={`container ${styles["promo-container"]}`}>
              <div className={styles["promo-titles"]}>
                <p
                  className={`${styles["section-title"]} ${styles["promo-today"]}`}
                >
                  Promo Today
                </p>
                <p
                  className={`${styles["section-subtitle"]} ${styles["promo-subtitle"]}`}
                >
                  Coupons will be updated every weeks. Check them out!
                </p>
              </div>
              <div className="container row justify-content-center">
                <ul className={styles["list-promos"]}>
                  {/* {promos?.map((e) => {
                    <li>
                      <PromoCard image={e.image} promoName={e.promo_name} desc={e.description} />
                    </li>;
                  })} */}
                  <li>
                    <PromoCard />
                  </li>
                  <li>
                    <PromoCard />
                  </li>
                  <li>
                    <PromoCard />
                  </li>
                  <li>
                    <PromoCard />
                  </li>
                </ul>
                <button className={styles["apply"]}>Apply Changes</button>
              </div>
              <div className={`container ${styles["terms-container"]}`}>
                <p className={styles["terms-text"]}>Terms and Conditions</p>
                <ol className={styles["terms"]}>
                  <li>You can only apply 1 coupon per day</li>
                  <li>Only for dine in</li>
                  <li>Buy one get one for new user</li>
                  <li>Make member card to apply coupon</li>
                </ol>
              </div>
            </div>
          </section>
          <section className={`col-12 col-md-8 ${styles["products-section"]}`}>
            <div className={`${styles["products-container"]}`}>
              <ul className={styles["categories-container"]}>
                <li
                  onClick={() => {
                    setQuery({
                      sort: "popular",
                      page: 1,
                    });
                  }}
                >
                  Favorites
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      categories: "coffee",
                      page: 1,
                    });
                    const urlSearchParams = createSearchParams({ ...query });
                    setSearchParams(urlSearchParams);
                  }}
                >
                  Coffe
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      categories: "non-coffee",
                      page: 1,
                    });
                    const urlSearchParams = createSearchParams({ ...query });
                    setSearchParams(urlSearchParams);
                  }}
                >
                  Non Coffe
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      categories: "foods",
                      page: 1,
                    });
                  }}
                >
                  Foods
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      categories: "add-on",
                      page: 1,
                    });
                  }}
                >
                  Add-on
                </li>
              </ul>
              <div className={styles["dropdown-container"]}>
                <div className={`${styles["dropdown"]} `}>
                  <div
                    className={`${styles["dropdown-btn"]} ${
                      styles[isActive ? "active" : ""]
                    }`}
                    onClick={handleDropdown}
                  >
                    <h2>Sort by</h2>
                    <span>&#9660;</span>
                  </div>
                  {isActive && (
                    <div className={styles["dropdown-content"]}>
                      <div className={styles["dropdown-item"]}>
                        <p
                          onClick={() => {
                            setQuery({
                              ...query,
                              sort: "newest",
                            });
                          }}
                        >
                          newest
                        </p>
                      </div>
                      <div className={styles["dropdown-item"]}>
                        <p
                          onClick={() => {
                            setQuery({
                              ...query,
                              sort: "oldest",
                            });
                            handleDropdown();
                          }}
                        >
                          oldest
                        </p>
                      </div>
                      <div className={styles["dropdown-item"]}>
                        <p
                          onClick={() => {
                            setQuery({
                              ...query,
                              sort: "priciest",
                            });
                            handleDropdown();
                          }}
                        >
                          priciest
                        </p>
                      </div>
                      <div className={styles["dropdown-item"]}>
                        <p
                          onClick={() => {
                            setQuery({
                              ...query,
                              sort: "cheapest",
                            });
                            handleDropdown();
                          }}
                        >
                          cheapest
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles["product-list-container"]}>
                {product.product.map((e) => (
                  <ProductCard
                    productName={e.product_name}
                    price={currency(e.price)}
                    image={e.image}
                    id={e.id}
                    key={e.id}
                    display={"hidden"}
                  />
                ))}
              </div>
              <div className={`${styles["paginate-container"]}`}>
                <p>{`showing page ${query.page} of ${totalPage}`}</p>

                <div className={styles["btn-paginate"]}>
                  <button
                    onClick={() => {
                      setQuery({ ...query, page: query.page - 1 });
                    }}
                    disabled={query.page === 1 ? true : false}
                    className={`${styles["btn-prev"]}`}
                  >
                    prev
                  </button>
                  <button
                    onClick={() => {
                      setQuery({ ...query, page: query.page + 1 });
                    }}
                    disabled={query.page === totalPage ? true : false}
                    className={`${styles["btn-next"]}`}
                  >
                    next
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
};
const stateProps = (reduxState) => reduxState;
export default withSearchParams(connect(stateProps)(Products));
