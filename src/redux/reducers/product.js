import actionStrings from "../actions/actionStrings";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  err: null,
};

const productReducer = (prevState = initialState, action) => {
  const { getFavorites } = actionStrings;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (action.type) {
    case getFavorites.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case getFavorites.concat("_", Rejected): {
      const errorResponse = action.payload;
      const errorMessage = errorResponse.response.result.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessage,
      };
    }
    case getFavorites.concat("_", Fulfilled): {
      return {
        ...prevState,
        isLoading: false,
        product: action.payload.data.result.data[0],
      };
    }
    default:
      return prevState;
  }
};

export default productReducer;
