import { ActionType } from "redux-promise-middleware";

export const actionStrings = {
  authLogin: "AUTH_LOGIN",
  authRegister: "AUTH_REGISTER",
  authLogout: "AUTH_LOGOUT",
  counterUp: "COUNTER_UP",
  counterDown: "COUNTER_DOWN",
  counterReset: "COUNTER_RESET",
  getFavorites: "GET_FAVORITE",
  getCoffee: "GET_COFFEE",
  getNonCoffee: "GET_NONCOFFEE",
  getFood: "GET_FOOD",
  getAllProduct: "GET_ALL_PRODUCT",
  editProduct: "EDIT_PRODUCT",
  getProducts: "GET_PRODUCTS",
  getPromos: "GET_PROMO",
  addPromo: "ADD_PROMO",
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
  getProfile: "_GET_PROFILE",
  updateProfile: "_UPDATE_PROFILE",
  createProduct: "_CREATE_PRODUCT",
  getDetailProduct: "_GET_PRODUCT_DETAIL",
};

// export default actionStrings;
