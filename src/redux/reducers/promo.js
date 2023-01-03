import { actionStrings } from "../actions/actionStrings";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  promo: [],
  isLoading: null,
  isError: null,
  isFulfilled: null,
};

export const promoReducer = (prevState = initialState, { type, payload }) => {
  const { getPromo, addPromo } = actionStrings;
  const { Pending, Rejected, Fulfilled } = ActionType;
  console.log(payload);
  switch (type) {
    case getPromo.concat("_", Pending): {
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    }
    case getPromo.concat("_", Rejected): {
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    }
    case getPromo.concat("_", Fulfilled): {
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        promo: payload.data.data,
      };
    }
    //     case addPromo.concat("_", Pending): {
    //       return {
    //         ...prevState,
    //         isLoading: true,
    //         isError: false,
    //       };
    //     }
    //     case addPromo.concat("_", Rejected): {
    //       return {
    //         ...prevState,
    //         isError: true,
    //         isLoading: false,
    //         errCreate: payload.message,
    //       };
    //     }
    //     case addPromo.concat("_", Fulfilled): {
    //       return {
    //         ...prevState,
    //         isLoading: false,
    //         dataCreate: payload.data.data,
    //       };
    //     }
    default:
      return prevState;
  }
};

export default promoReducer;
