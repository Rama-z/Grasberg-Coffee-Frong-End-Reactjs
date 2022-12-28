import { actionStrings } from "../actions/actionStrings";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  profile: [],
  isError: false,
  isLoading: false,
  error: null,
};

const userReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getProfile } = actionStrings;
  switch (type) {
    case getProfile.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProfile.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getProfile.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        username: payload.data.data.username,
        firstname: payload.data.data.firstname,
        lastname: payload.data.data.lastname,
        gender: payload.data.data.gender,
        birthday: payload.data.data.birthday,
        address: payload.data.data.address,
        image: payload.data.data.image,
        phone: payload.data.data.phone,
        email: payload.data.data.email,
      };
    default:
      return prevState;
  }
};

export default userReducer;
