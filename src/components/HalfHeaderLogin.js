import React, { Component } from 'react'
import styles from "../styles/HalfHeaderLogin.module.css"
import coffee from "../assets/Profiles/coffee 3.png" 
import { Link } from 'react-router-dom';

export default class HalfHeader extends Component {
  render() {
    return (
      <>
      <section className={`${styles["grasberg"]} container row d-flex align-items-center`}>
        <section className={`${styles["center"]} ${styles["logo-name"]} col`}>
          <img src= {coffee} className= {`${styles["logo-img"]} me-3`} alt=""/>
          <Link to={"/"}>
            Grasberg Coffee
          </Link>
        </section>
        <p className={`${styles["login"]} text-end col`}>Login</p>
      </section>
      </>
    )
  }
}
