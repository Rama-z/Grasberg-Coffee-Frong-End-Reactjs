import actionStrings from "../actions/actionStrings";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  profile: [],
  isError: false,
  isLoading: false,
  error: null,
};

export const profileReducer = (prevState = initialState, action) => {
  const { getProfile } = actionStrings;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (action.type) {
    case getProfile.concat("_", Pending):
      return {
        ...prevState,
        isError: false,
        isLoading: true,
      };
    case getProfile.concat("_", Rejected):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: action.payload.response.result.data.msg,
      };
    case getProfile.concat("_", Fulfilled):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        profile: action.payload.data.result.data[0],
      };
    default:
      return prevState;
  }
};
