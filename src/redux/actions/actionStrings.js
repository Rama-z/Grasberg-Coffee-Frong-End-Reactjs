import { ActionType } from "redux-promise-middleware";

export const actionStrings = {
  authLogin: "AUTH_LOGIN",
  authRegister: "AUTH_REGISTER",
  authForgot: "AUTH_FORGOT",
  authConfirm: "AUTH_CONFIRM",
  authLogout: "AUTH_LOGOUT",
  counterUp: "COUNTER_UP",
  counterDown: "COUNTER_DOWN",
  counterReset: "COUNTER_RESET",
  getProductById: "GET_PRODUCT_BY_ID",
  getProducts: "GET_PRODUCTS",
  editProduct: "EDIT_PRODUCT",
  getPromos: "GET_PROMO",
  addPromo: "ADD_PROMO",
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
  getProfile: "GET_PROFILE",
  editPassword: "EDIT_PASSWORD",
  editProfile: "EDIT_PROFILE",
  createProduct: "CREATE_PRODUCT",
};
