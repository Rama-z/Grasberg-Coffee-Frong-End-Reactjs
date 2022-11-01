import React, { Component } from 'react'
// import styles from "../styles/Footer.module.css"
import fb from "../assets/Profiles/facebook.png"
import twit from "../assets/Profiles/twitter.png"
import insta from "../assets/Profiles/instagram.png"
import styles from "../styles/FooterHalf.module.css"
import coffee from "../assets/Profiles/coffee 3.png"

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className= {`container`}>
          <article className="row d-flex align-items-center">
            <section className= {`${styles["disp1"]} col-md col-sm col-lg-5`}>
              <div className= {`${styles["coffee"]} col-md col-sm my-3`}>
                <img className='me-3' src= {coffee} alt="" />
                Coffee Shop
              </div>
              <div className= {`${styles["coffee-footer"]} col col-md col-sm my-3`}>
                Coffee Shop is a store that sells some good meals, and especially
                coffee. We provide high quapty beans
              </div>
              <div className="col-md col-sm my-3">
                <img src= {fb} alt="asd" />
                <img src= {twit} alt="asd" />
                <img src= {insta} alt="asd" />
              </div>
              <div className= {`${styles["copyright"]} col-md col-sm`}>©2020CoffeeStore</div>
            </section>
            <article className={`container col-lg`}>
              <section className="col-md col-sm col-lg">
                  <p className= {`${styles["footer-right1"]} col col-lg col-md col-sm`}>Product</p>
                  <div className="row">
                    <div className='col col-md col-sm col-lg'>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>Download</p>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>Pricing</p>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>Locations</p>
                    </div>  
                    <div className='col col-md col-sm col-lg'>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>Countries</p>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>Blog</p>
                    </div>
                    </div>
                  <p className={`${styles["footer-right1"]}`}>Engage</p>
                  <div className="row">
                    <div className='col col-md col-sm col-lg'>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>Coffe Shop ?</p>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>FAQ</p>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>About Us</p>
                    </div>
                    <div className='col col-md col-sm col-lg'>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>Privacy Policy</p>
                      <p className={`${styles["footer-right2"]} col col-lg col-md col-sm`}>Terms of Service</p>
                    </div>
                  </div>
              </section>
              <section className= {`${styles["disp2"]} col-md col-sm col-lg`}>
                <div className={`${styles["coffee"]} col-md col-sm my-3`}>
                  <img src= {coffee} alt="" />
                  Coffee Shop
                </div>
                <div className={`${styles["coffee-footer"]} col-md-6 col-sm my-3`}>
                  Coffee Shop is a store that sells some good meals, and especially
                  coffee. We provide high quapty beans
                </div>
                <div className="col-md col-sm my-3">
                  <img src= {fb} alt="asd" />
                  <img src= {twit} alt="asd" />
                  <img src= {insta} alt="asd" />
                </div>
                <div className={`${styles["copyright"]} col-md col-sm`}>©2020CoffeeStore</div>
              </section>
            </article>
          </article>
        </footer> 
      </>
    )
  }
}
