import { ActionType } from "redux-promise-middleware";

const actionStrings = {
  counterUp: "COUNTER_UP",
  counterDown: "COUNTER_DOWN",
  counterReset: "COUNTER_RESET",
  getFavorites: "GET_FAVORITE",
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
  getProfile: "_GET_PROFILE",
  updateProfile: "_UPDATE_PROFILE",
  createProduct: "_CREATE_PRODUCT",
  getDetailProduct: "_GET_PRODUCT_DETAIL",
};

export default actionStrings;
