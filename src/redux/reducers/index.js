import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import { productReducer } from "./product";
import userReducer from "./profile";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
});
