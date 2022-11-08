import { ActionType } from "redux-promise-middleware";
import actionStrings from "../actions/actionStrings";

const initialState = {
  product: [],
  isError: false,
  isLoading: false,
  error: null,
};

export const getDetailProductReducer = (prevState = initialState, action) => {
  const { getDetailProduct } = actionStrings;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (action.type) {
    case getDetailProduct.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case getDetailProduct.concat("_", Rejected):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: action.payload.response.result.data.msg,
      };
    case getDetailProduct.concat("_", Fulfilled):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        product: action.payload.data.result.data,
      };

    default:
      return prevState;
  }
};
