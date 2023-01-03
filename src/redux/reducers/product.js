import { actionStrings } from "../actions/actionStrings";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  product: [],
  productDetail: {},
  isLoading: null,
  isError: null,
  isFulfilled: null,
};

const productReducer = (prevState = initialState, { payload, type }) => {
  const { getProducts, getProductById, addProduct, editProduct } =
    actionStrings;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (type) {
    case getProducts.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProducts.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getProducts.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        product: payload.data.data,
        meta: payload.data.meta,
      };
    case getProductById.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProductById.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getProductById.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        productDetail: payload.data.data,
      };
    case addProduct.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case addProduct.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case addProduct.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };
    case editProduct.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editProduct.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case editProduct.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default productReducer;
