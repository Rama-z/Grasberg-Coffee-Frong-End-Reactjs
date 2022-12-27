// import {
//   legacy_createStore as createStore,
//   combineReducers,
//   applyMiddleware,
// } from "redux";
// import rpm from "redux-promise-middleware";
// import counterReducer from "./reducers/counter";
// import { productReducer } from "./reducers/product";
// import { profileReducer } from "./reducers/profile";
// import { promoReducer } from "./reducers/promo";

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";

const persitConfig = {
  key: "grasberg",
  storage,
};

// const middleware = applyMiddleware(rpm, logger);
// const reducers = combineReducers({
//   counter: counterReducer,
//   product: productReducer,
//   profile: profileReducer,
//   promo: promoReducer,
// });
const persistedReducer = persistReducer(persitConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }).concat(logger),
});

export const persistedStore = persistStore(store);
export default store;
