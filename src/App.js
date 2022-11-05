import React, { Component } from "react";
import withSearchParams from "./helpers/withSearchParams";
import { createSearchParams } from "react-router-dom";
// import styles from "../styles/Product.module.css";
// import CardProduct from "../components/CardProduct";
// import CardPromo from "../components/CardPromo";
// import Header from "../components/HeaderProduct";
// import Footer from "../components/Footer";
// import TabTitle from "../utils/WebDinamis";
// // import { createSearchParams } from "react-router-dom";
// import PropTypes from "prop-types";
// import withNavigate from "../helpers/withNavigate";
// import withLocation from "../helpers/withLocation";
// import withSearchParams from "../helpers/withSearchParams";
// import { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [data, setData] = useState({ result: [] });

//   const favoriteClick = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:8080/api/v1/products/paginasi/?search=&filter=&order_by=transactions&order_in=asc&page=1&limit=15`
//       );
//       setData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const coffeeClick = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:8080/api/v1/products/paginasi/?search=&filter=1&order_by=&order_in=&page=1&limit=15`
//       );
//       setData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const nonCoffeeClick = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:8080/api/v1/products/paginasi/?search=&filter=2&order_by=&order_in=&page=1&limit=15`
//       );
//       setData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const foodsClick = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:8080/api/v1/products/paginasi/?search=&filter=3&order_by=&order_in=&page=1&limit=15`
//       );
//       setData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div>
//       <div onClick={favoriteClick}>Fetch data</div>
//       <button onClick={coffeeClick}>Fetch data</button>
//       <button onClick={nonCoffeeClick}>Fetch data</button>
//       <button onClick={foodsClick}>Fetch data</button>

//       {data.result.map((product) => {
//         return (
//           <div key={product.id}>
//             <h2>{product.menu}</h2>
//             <h2>{product.price}</h2>
//             <h2>{product.category_name}</h2>
//             <br />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

// import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      result: 0,
      coba: "",
    };
  }

  handleOnChange = (e) => {
    const {
      target: { value, name },
    } = e;

    this.setState({
      [name]: Number(value),
    });
  };

  handleResult = () => {
    this.setState({
      result: this.state.number1 + this.state.number2,
    });
  };

  render() {
    const { setSearchParams } = this.props;
    return (
      <>
        <div className="Calculator">
          <input
            onChange={this.handleOnChange}
            name="number1"
            type="text"
            value={this.state.number1}
          />
          {" + "}
          <input
            onChange={this.handleOnChange}
            name="number2"
            type="text"
            value={this.state.number2}
          />
          <p>
            <button onClick={this.handleResult}>=</button>
          </p>

          <p className="result">{this.state.result}</p>
        </div>
        <div
          onClick={() => {
            const url = createSearchParams({ kocak: "asd" });
            setSearchParams(url);
          }}
        >
          active
        </div>
        <div
          onClick={() => {
            const url = createSearchParams({});
            setSearchParams(url);
          }}
        >
          reset
        </div>
      </>
    );
  }
}

export default withSearchParams(App);
