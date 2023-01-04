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
import { useDispatch, useSelector } from "react-redux";
import transactionAction from "../redux/actions/transaction";

export default function History() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const auth = useSelector((state) => state.auth);
  const history = useSelector((state) => state.transaction.history);

  useEffect(() => {
    dispatch(transactionAction.getHistoryThunk(auth.token));
  }, [dispatch]);
  TabTitle("User History");
  return (
    <Fragment>
      <Header />
      <main className={`${styles["hist-bck"]} py-5`}>
        <section>
          <div className={`${styles["title1"]}`}>
            Let`s see what you have bought!
          </div>
          <div className={`${styles["title2"]}`}>Click to delete item</div>
        </section>
        <section
          className={`${styles["list-product"]} container col col-lg-9 ps-5`}
        >
          {history.map((item, idx) => {
            return (
              <CardHistory
                menu={item.menu}
                price={item.total}
                key={idx}
                idx={idx}
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
