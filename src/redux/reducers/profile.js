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
  const { getProfile, editPassword, editProfile } = actionStrings;
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
        profile: {
          username: payload.data.data.username,
          firstname: payload.data.data.firstname,
          lastname: payload.data.data.lastname,
          gender: payload.data.data.gender,
          birthday: payload.data.data.birthday,
          address: payload.data.data.address,
          image: payload.data.data.image,
          phone: payload.data.data.phone,
          email: payload.data.data.email,
        },
      };
    case editPassword.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editPassword.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case editPassword.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };
    case editProfile.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
        profile: {
          isLoading: true,
          isError: false,
          isFulfilled: false,
        },
      };
    case editProfile.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        profile: {
          isLoading: false,
          isError: true,
          isFulfilled: false,
          username: null,
          firstname: null,
          lastname: null,
          gender: null,
          birthday: null,
          address: null,
          image: null,
          phone: null,
          email: null,
        },
      };
    case editProfile.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        profile: {
          username: payload.data.data.username,
          firstname: payload.data.data.firstname,
          lastname: payload.data.data.lastname,
          gender: payload.data.data.gender,
          birthday: payload.data.data.birthday,
          address: payload.data.data.address,
          image: payload.data.data.image,
          phone: payload.data.data.phone,
          email: payload.data.data.email,
          isLoading: false,
          isError: false,
          isFulfilled: true,
        },
      };
    default:
      return prevState;
  }
};

export default userReducer;
