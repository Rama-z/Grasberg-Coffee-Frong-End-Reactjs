import React, { Component } from 'react'
import styles from "../styles/History.module.css"
import Card from "../components/CardHistory"
import Header from "../components/HeaderHome"
import Footer from "../components/Footer"
import TabTitle from "../utils/WebDinamis"

export default class History extends Component {
  render() {
    TabTitle('User History')
    return (
      <>
        <Header/>
        <main className={`${styles["hist-bck"]} py-5`}>
          <section>
            <div className={`${styles["title1"]}`}>
            Let’s see what you have bought!
            </div>
            <div className={`${styles["title2"]}`}>
            Long press to delete item
            </div>
          </section>
          <section className={`${styles["list-product"]} container col-lg-9`}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </section>
        </main>
        <Footer/>
      </>
    )
  }
}
