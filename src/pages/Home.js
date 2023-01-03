import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import human1 from "../assets/Home/human1.png";
import human2 from "../assets/Home/human2.png";
import human3 from "../assets/Home/human3.png";
import home2 from "../assets/Home/home2.png";
import home3 from "../assets/Home/home3.png";
import home4 from "../assets/Home/home4.png";
import home5 from "../assets/Home/home5.png";
import home6 from "../assets/Home/home6.png";
import home7 from "../assets/Home/home7.png";
import home9 from "../assets/Home/home9.png";
import home10 from "../assets/Home/home10.png";
import home11 from "../assets/Home/home11.png";
import sponsored from "../assets/Home/Sponsored.png";
import huge from "../assets/Home/Huge Global.png";
import star from "../assets/Home/star.png";
import elipse174 from "../assets/Home/Ellipse 174.png";
import elipse168 from "../assets/Home/Ellipse 168.png";
import elipse169 from "../assets/Home/Ellipse 169.png";
import act from "../assets/Home/act.png";
import nonact from "../assets/Home/nonact.png";
import TabTitle from "../utils/WebDinamis";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../redux/actions/profile";
import authAction from "../redux/actions/auth";

export default function Home() {
  TabTitle("Grasberg Coffee");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    const failed = () => {
      dispatch(authAction.loginRejected());
    };
    dispatch(userAction.getProfileThunk(token, "success", failed));
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className={`container-fluid ${styles["bg-home"]}`}>
        <section className={`${styles[""]} container`}>
          <section className="row">
            <div className={`${styles["welcome"]} col-md col-sm`}>
              <div className={` col-md col-sm fs-1 fw-bold my-5`}>
                Start Your Day with Coffee and Good Meals
              </div>
              <div className="col-md fw-bold">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </div>
              <div className={`${styles["get"]} col col-md col-sm my-5`}>
                Get Started
              </div>
            </div>
            <div className="col col-md"></div>
          </section>
        </section>
        <section className={`${styles["my-5"]} ${styles["blacks"]} container`}>
          <div
            className={`${styles["first-border"]} ${styles["position"]} ${styles["staff-margin1"]} row`}
          >
            <div className="col-md col mt-3">
              <div className="row">
                <div className="col-md col col-lg col-sm">
                  <img
                    src={human1}
                    alt=""
                    className={`${styles["human-bg1"]} d-flex mx-auto`}
                  />
                </div>
                <div
                  className={`${styles["staff-margin1"]} col-md col col-sm col-lg`}
                >
                  <div className={`${styles["fw-bold"]}`}>90+</div>
                  <div className={`${styles["staff"]}`}>Staff</div>
                </div>
              </div>
            </div>
            <div className="col-md col">
              <div className="row">
                <div className="col-md col col-lg col-sm">
                  <img
                    src={human2}
                    alt=""
                    className={`${styles["human-bg2"]} d-flex mx-auto`}
                  />
                </div>
                <div
                  className={`${styles["staff-margin1"]} col-md col col-sm col-lg`}
                >
                  <div className={`${styles["fw-bold"]}`}>30+</div>
                  <div className={`${styles["staff2"]}`}>Stores</div>
                </div>
              </div>
            </div>
            <div className="col-md col">
              <div className="row">
                <div className="col-md col col-lg col-sm">
                  <img
                    src={human3}
                    alt=""
                    className={`${styles["human-bg3"]} d-flex mx-auto`}
                  />
                </div>
                <div
                  className={`${styles["staff-margin1"]} col-md col col-sm col-lg`}
                >
                  <div className={`${styles["fw-bold"]}`}>800+</div>
                  <div className={`${styles["staff3"]}`}>Customers</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={`${styles["my-5"]} ${styles["blacks"]} container`}>
          <div className="row">
            <div className="col-md">
              <img className={`${styles["left-side1"]}`} src={home2} alt="" />
            </div>
            <div className={`${styles["ln-height"]} col-md col col-lg`}>
              <div
                className={`${styles["right-side1"]} text-center text-lg-start`}
              >
                We Provide Good Coffee and Healthy Meals
              </div>
              <div className={`${styles["my-3"]} ${styles["ms-5"]} col col-lg`}>
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </div>
              <div className={`${styles["my-3"]} ${styles["ms-5"]} col col-lg`}>
                <img className={`${styles["centang"]}`} src={home3} alt="" />
                High quality beans
              </div>
              <div className={`${styles["my-3"]} ${styles["ms-5"]} col col-lg`}>
                <img className={`${styles["centang"]}`} src={home3} alt="" />
                Healthy meals, you can request the ingredients
              </div>
              <div className={`${styles["my-3"]} ${styles["ms-5"]} col col-lg`}>
                <img className={`${styles["centang"]}`} src={home3} alt="" />
                Chat with our staff to get better experience for ordering
              </div>
              <div className={`${styles["my-3"]} ${styles["ms-5"]} col col-lg`}>
                <img className={`${styles["centang"]}`} src={home3} alt="" />
                Free member card with a minimum purchase of IDR 200.000.
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className={`${styles["blacks"]} col-md text-center`}>
            <div className={`${styles["here"]} col-md mt-5`}>
              Here is People’s Favorite
            </div>
            <div className={`${styles["lets"]} col-md mb-5 my-3`}>
              Let’s choose and have a bit taste of poeple’s favorite. It might
              be yours too!
            </div>
          </div>
        </div>
        <div className={`${styles["blacks"]} container text-center`}>
          <div className={`${styles["menu-over"]} row`}>
            <div
              className={`${styles["border-c"]} ${styles["menu-tag"]} col-md col col-lg col-sm mt-5`}
            >
              <img
                className={`${styles["position-p"]} ${styles["circular"]}`}
                src={home4}
                alt=""
              />
              <div className={`${styles["latte"]}`}>Hazelnut Latte</div>
              <div className="col col-md col-sm d-flex justify-content-center">
                <div className="row col">
                  <div className="col-3 col-lg-1 col-md-2 col-sm-2">
                    <div className="col col-lg col-md-1 col-sm-6 my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col col-lg col-md col-sm-6 my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col col-lg col-md col-sm-6 my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col col-lg col-md col-sm-6 my-3">
                      <img src={home7} alt="" />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm col col-lg text-start">
                    <div className="col-md-10 col-sm col col-lg my-3">
                      Hazelnut Syrup
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Wanilla Whipped Cream
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Ice / Hot
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Sliced Banana on Top
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles["price"]} align-self-end col-md`}>
                <div className={`${styles["IDR"]}`}>IDR 25.000</div>
                <div className={`${styles["order"]} col-md`}>Order Now</div>
              </div>
            </div>
            <div
              className={`${styles["border-e"]} ${styles["menu-tag"]} col-md mt-5`}
            >
              <img
                className={`${styles["position-p"]} ${styles["circular"]}`}
                src={home5}
                alt=""
              />
              <div className={`${styles["latte"]}`}>Pinky Promise</div>
              <div className="col-md col-sm">
                <div className="row">
                  <div className="col-md-4 col-sm-2 col-3 col-lg-1">
                    <div className="col-md col-sm-6 col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col-md col-sm-6 col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col-md col-sm-6 col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col-md col-sm-6 col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col-md col-sm-6 col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm col col-lg text-start">
                    <div className="col-md col-sm col col-lg my-3">
                      1 Shot of Coffee
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Vanilla Whipped Cream
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Chocol-mdate Biscuits
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Strawberry Syrup
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Sliced strawberry on Top
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles["price"]} col-md col col-lg col-sm`}>
                <div className={`${styles["IDR"]}`}>IDR 25.000</div>
                <div className={`${styles["order"]} col-md col-sm`}>
                  Order Now
                </div>
              </div>
            </div>
            <div
              className={`${styles["border-d"]} ${styles["menu-tag"]} col-md mt-5`}
            >
              <img
                className={`${styles["position-p"]} ${styles["circular"]}`}
                src={home6}
                alt=""
              />
              <div className={`${styles["latte"]}`}>Chicken Wings</div>
              <div className="col-md col-sm">
                <div className="row">
                  <div className="col-md-4 col-sm-2 col-3 col-lg-1 text-end">
                    <div className="col-md col-sm col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      <img src={home7} alt="" />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm col col-lg text-start">
                    <div className="col-md col-sm col col-lg my-3">Wings</div>
                    <div className="col-md col-sm col col-lg my-3">
                      Drum Sticks
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Mayonaise and Lemon
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Hot Fried
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Secret Recipe
                    </div>
                    <div className="col-md col-sm col col-lg my-3">
                      Buy 1 Get 1 only for Dine in
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles["price"]} col-md`}>
                <div className={`${styles["IDR"]}`}>IDR 25.000</div>
                <div className={`${styles["select"]} col-md`}>Select</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container  text-center">
          <div className="col-md">
            <div
              className={`${styles["blacks"]} ${styles["here"]} col-md my-5`}
            >
              Visit Our Store in the Spot on the Map Below
            </div>
            <div
              className={`${styles["lets"]} ${styles["blacks"]} col-md my-5`}
            >
              See our store in every city on the spot and spen your good day
              there. See you soon!
            </div>
          </div>
          <div className="col-md">
            <img className={`${styles["img-size"]} my-5`} src={huge} alt="" />
          </div>
        </div>
        <div className="container  text-center mt-5">
          <div className="col-md">
            <div
              className={`${styles["here"]} ${styles["blacks"]} col-md mt-5`}
            >
              Our Partner
            </div>
            <div className="col-md">
              <img className={`${styles["img-size"]}`} src={sponsored} alt="" />
            </div>
          </div>
        </div>
        <div className={`${styles["blacks"]} container text-center`}>
          <div className={`${styles["ahere"]} col-md `}>
            Loved by Thousands of Happy Customer
          </div>
          <div className="col-md lets mt-3 mb-5">
            These are the stories of our customers who have visited us with
            great pleasure.
          </div>
        </div>
        <div className={`${styles["blacks"]} container my-5`}>
          <div className="row">
            <section className={`${styles["border-h"]} col-md col-sm col`}>
              <div className="row my-4">
                <div className="col-md-2 col-sm-2 col-2">
                  <img src={home9} alt="" />
                </div>
                <div className="col-md-6 col-sm-7 col text-start">
                  <div className={`${styles["name"]}`}>Viezh Robert</div>
                  <div>Warsaw, Poland</div>
                </div>
                <div className="col-md col-sm col-4">
                  <div className="row">
                    <div className="col-md-3 col-sm col-sm-2 col-4">4.5</div>
                    <div className="col-md-9 col-sm col-2">
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles["text-e"]} col-md col-sm my-4`}>
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </div>
            </section>
            <section className={`${styles["border-f"]} col-md col-sm ms-3`}>
              <div className="row my-4">
                <div className="col-md-2 col-sm">
                  <img src={home10} alt="" />
                </div>
                <div className="col-md-6 text-start">
                  <div className={`${styles["name"]}`}>Yessica Christy</div>
                  <div>Shanxi, China</div>
                </div>
                <div className="col-md col-sm">
                  <div className="row">
                    <div className="col-md-3 col-sm">4.5</div>
                    <div className="col-md-9">
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles["text-e"]} col-md my-4`}>
                “I like it because I like to travel far and still can make my
                day better just by drinking their Hazelnut Latte
              </div>
            </section>
            <section className={`${styles["border-g"]} col-md col-sm  ms-3`}>
              <div className="row my-4">
                <div className="col-md-2">
                  <img src={home11} alt="" />
                </div>
                <div className="col-md-6 text-start">
                  <div className={`${styles["name"]}`}>Kim Young Jou</div>
                  <div>Seoul, South Korea</div>
                </div>
                <div className="col-md col-sm">
                  <div className="row">
                    <div className="col-md-3 col-sm">4.5</div>
                    <div className="col-md-9">
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles["text-e"]} col-md my-4`}>
                “This is very unusual for my taste, I haven’t liked coffee
                before but their coffee is the best! and yup, you have to order
                the chicken wings, the best in town!
              </div>
            </section>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md col-sm">
              <div className="row">
                <div
                  className={`${styles["bullet-on"]} col-md-1 col-sm-1`}
                ></div>
                <div className="col-md-1 col-sm-1">
                  <img
                    src={elipse174}
                    alt=""
                    className={`${styles["elipse"]}`}
                  />
                </div>
                <div className="col-md-1 col-sm-1 me-n1">
                  <img
                    src={elipse174}
                    alt=""
                    className={`${styles["elipse"]}`}
                  />
                </div>
                <div className="col-md-1 col-sm-1">
                  <img
                    src={elipse174}
                    alt=""
                    className={`${styles["elipse"]}`}
                  />
                </div>
              </div>
            </div>
            <div className="col-md col-sm">
              <div className="row">
                <div className={`${styles["act"]} col-md col-sm col col-lg`}>
                  <img className={`${styles["arrow1"]}`} src={nonact} alt="" />
                  <img
                    className={`${styles["eclipse1"]}`}
                    src={elipse169}
                    alt=""
                  />
                </div>
                <div className={`${styles["act"]} col-md col-sm col col-lg`}>
                  <img
                    className={`${styles["eclipse2"]}`}
                    src={elipse168}
                    alt=""
                  />
                  <img className={`${styles["arrow2"]}`} src={act} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`container px-5 my-5 ${styles["promo"]} ${styles["blacks"]} ${styles["promo2"]}`}
        >
          <div className="row">
            <div className="col-md col-lg col-sm">
              <div className={`${styles["here"]} col-md col col-lg col-sm`}>
                Check our promo today!
              </div>
              <div className={`${styles["lets"]} col-md col col-lg col-sm`}>
                Let`s see the deals and pick yours!
              </div>
            </div>
            <div className="col-md col col-lg-3 col-sm text-center">
              <div
                className={`${styles["see-position"]} ${styles["see-promo"]} col-md col col-lg col-sm`}
              >
                See Promo
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
