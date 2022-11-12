import actionStrings from "../actions/actionStrings";
import { ActionType } from "redux-promise-middleware";
import styles from "../../styles/Product.module.css";

const initialState = {
  data: [],
  product: [],
  promo: [],
  dataCreate: [],
  dataEdit: [],
  dataAll: [],
  id: "",
  name: "",
  price: "",
  image: "",
  desc: "",
  ctg: "",
  tglnext: styles.hide,
  tglprev: styles.hide,
  next: null,
  prev: null,
  isLoading: false,
  isError: false,
  err: null,
  errCreate: null,
  errEdit: null,
  errgetall: null,
};

export const productReducer = (prevState = initialState, action) => {
  const { getFavorites, getAllProduct } = actionStrings;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (action.type) {
    case getFavorites.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case getAllProduct + Pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case getFavorites.concat("_", Rejected): {
      const errorResponse = action.payload;
      const errorMessage = errorResponse.response.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessage,
      };
    }

    case getAllProduct + Rejected: {
      const errorResponse = action.payload;
      const errorMessage = errorResponse.response.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        data: [],
        err: errorMessage,
      };
    }

    case getFavorites.concat("_", Fulfilled): {
      return {
        ...prevState,
        isLoading: false,
        product: action.payload.data.data,
      };
    }

    case getAllProduct + Fulfilled: {
      const response = action.payload;
      let toNext = styles.hide;
      let toPrev = styles.hide;
      if (response.data.meta.next) toNext = styles.next;
      if (response.data.meta.prev) toPrev = styles.prev;
      console.log(action.payload.data);
      return {
        ...prevState,
        isLoading: false,
        product: response.data.result,
        next: response.data.meta.next,
        prev: response.data.meta.prev,
        tglnext: toNext,
        tglprev: toPrev,
      };
    }
    default:
      return prevState;
  }
};
