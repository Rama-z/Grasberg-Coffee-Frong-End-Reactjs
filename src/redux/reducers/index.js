import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";
import userReducer from "./profile";
import promoReducer from "./promo";
import transactionReducer from "./transaction";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  transaction: transactionReducer,
  promo: promoReducer,
});
