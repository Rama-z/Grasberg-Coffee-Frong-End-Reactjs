import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import rpm from "redux-promise-middleware";
import counterReducer from "./reducers/counter";
import { productReducer } from "./reducers/product";
import { profileReducer } from "./reducers/profile";
import logger from "redux-logger";

const middleware = applyMiddleware(rpm, logger);
const reducers = combineReducers({
  counter: counterReducer,
  product: productReducer,
  profile: profileReducer,
});
const store = createStore(reducers, middleware);

export default store;
