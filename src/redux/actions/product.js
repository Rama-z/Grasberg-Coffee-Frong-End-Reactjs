// import actionStrings from "./actionStrings";
// import {
//   getFavorite,
//   getAllProduct,
//   postData,
//   getCoffee,
//   getNonCoffee,
//   getFood,
//   getProductNext,
//   editProduct,
//   getData,
// } from "../../utils/product";

// const getFavoriteAction = (limit) => {
//   return {
//     type: actionStrings.getFavorites,
//     payload: getFavorite(limit),
//   };
// };

// const getCoffeeAction = (limit) => {
//   return {
//     type: actionStrings.getFavorites,
//     payload: getCoffee(limit),
//   };
// };

// const getNonCoffeeAction = (limit) => {
//   return {
//     type: actionStrings.getFavorites,
//     payload: getNonCoffee(limit),
//   };
// };

// const getFoodAction = (limit) => {
//   return {
//     type: actionStrings.getFavorites,
//     payload: getFood(limit),
//   };
// };

// const getAllProductAction = (params) => {
//   return {
//     type: actionStrings.getAllProduct,
//     payload: getAllProduct(params),
//   };
// };

// const getProductNextAction = (url) => {
//   return {
//     type: actionStrings.getProducts,
//     payload: getProductNext(url),
//   };
// };

// const addProductActions = (token, body) => {
//   return {
//     type: actionStrings.createProduct,
//     payload: postData(token, body),
//   };
// };

// const editProductAction = (data, token, id) => {
//   return {
//     type: actionStrings.editProduct,
//     payload: editProduct(data, token, id),
//   };
// };

// export const getDetailProductAction = (id) => {
//   return {
//     type: actionStrings.getDetailProduct,
//     payload: getData(`products/image/${id}`),
//   };
// };

// const productAction = {
//   getFavoriteAction,
//   getCoffeeAction,
//   getNonCoffeeAction,
//   getFoodAction,
//   getAllProductAction,
//   getProductNextAction,
//   addProductActions,
//   editProductAction,
// };

// export default productAction;
