import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import userReducer from "./profile";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
