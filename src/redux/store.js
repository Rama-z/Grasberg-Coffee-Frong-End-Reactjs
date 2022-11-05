import { legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counter";

const store = createStore(counterReducer);

export default store;
