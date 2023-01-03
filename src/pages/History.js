import React, { Component } from "react";
import styles from "../styles/History.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import TabTitle from "../utils/WebDinamis";
import axios from "axios";
import { Fragment } from "react";
import CardHistory from "../components/CardHistory";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function History() {
  const [product, setProduct] = useState([]);
  const auth = useSelector((state) => state.auth);
  const getHistory = () => {
    let config = {
      headers: {
        "x-access-token": auth.token,
      },
    };
    axios
      .get(
        `http://localhost:8080/api/v1/transactions/history?page=1&limit=10`,
        config
      )
      .then((res) => {
        console.log(res.data.data);
        const product = res.data.data;
        this.setState({ product });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHistory();
  }, []);
  TabTitle("User History");
  return (
    <Fragment>
      <Header />
      <main className={`${styles["hist-bck"]} py-5`}>
        <section>
          <div className={`${styles["title1"]}`}>
            Let`s see what you have bought!
          </div>
          <div className={`${styles["title2"]}`}>Long press to delete item</div>
        </section>
        <section
          className={`${styles["list-product"]} container col col-lg-9 ps-5`}
        >
          {product.map((item, idx) => {
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
