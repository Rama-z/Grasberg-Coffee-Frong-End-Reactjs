import { actionStrings } from "../actions/actionStrings";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  isLoading: null,
  isError: null,
  isFulfilled: null,
  cart: {
    product_item: [],
    total_price: null,
    delivery_address: null,
    delivery_method: null,
    delivery_time: null,
    phone: null,
    promo_id: null,
    payment_method: null,
  },
  history: [],
};

const transactionReducer = (prevState = initialState, { payload, type }) => {
  const {
    createTransaction,
    addToCart,
    deleteCart,
    deleteSingleCart,
    getHistory,
    deleteHistory,
  } = actionStrings;
  const { Pending, Rejected, Fulfilled } = ActionType;
  console.log(payload);
  switch (type) {
    case addToCart.concat("_", Fulfilled):
      return {
        ...prevState,
        cart: payload,
      };
    case deleteCart.concat("_", Fulfilled):
      return {
        isLoading: null,
        isError: null,
        isFulfilled: null,
        cart: {
          product_item: [],
          total_price: null,
          delivery_address: null,
          delivery_method: null,
          delivery_time: null,
          phone: null,
          promo_id: null,
          payment_method: null,
        },
      };
    case deleteSingleCart.concat("_", Fulfilled):
      initialState.cart.product_item.filter((value) => {
        return value.trans_id !== payload;
      });
      return {
        ...prevState,
        cart: {
          ...prevState,
          product_item: initialState.cart.product_item.filter((value) => {
            return value.trans_id !== payload.trans_id;
          }),
        },
      };
    case getHistory.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getHistory.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getHistory.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        history: payload.data.data,
      };
    case createTransaction.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createTransaction.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case createTransaction.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        midTrans: payload.data.data.midTrans,
        results: payload.data.data.results,
      };
    case deleteHistory.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case deleteHistory.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case deleteHistory.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        history: payload.data.data,
      };
    default:
      return prevState;
  }
};

export default transactionReducer;
