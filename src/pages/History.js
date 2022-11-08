import React, { Component } from "react";
import styles from "../styles/History.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import TabTitle from "../utils/WebDinamis";
import axios from "axios";
import { Fragment } from "react";
import CardHistory from "../components/CardHistory";

export default class History extends Component {
  constructor() {
    super(),
      (this.state = {
        product: [],
      });
  }
  getHistory = () => {
    let config = {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
      },
    };
    axios
      .get(
        `http://localhost:8080/api/v1/transactions/history?page=1&limit=10`,
        config
      )
      .then((res) => {
        const product = res.data.result.data;
        this.setState({ product });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    console.log(JSON.parse(localStorage.getItem("user-info")).token);
    this.getHistory();
  }
  render() {
    TabTitle("User History");
    return (
      <Fragment>
        <Header />
        <main className={`${styles["hist-bck"]} py-5`}>
          <section>
            <div className={`${styles["title1"]}`}>
              Let`s see what you have bought!
            </div>
            <div className={`${styles["title2"]}`}>
              Long press to delete item
            </div>
          </section>
          <section className={`${styles["list-product"]} container col-lg-9`}>
            {this.state.product.map((item, idx) => {
              return (
                <CardHistory
                  menu={item.menu}
                  discount={item.discount}
                  price={item.total}
                  key={idx}
                  id={item.id}
                  image={item.image}
                  status={item.status}
                />
              );
            })}
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
