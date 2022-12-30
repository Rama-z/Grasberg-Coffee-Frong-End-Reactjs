import { ActionType } from "redux-promise-middleware";
import { getProfile, editPassword, editProfile } from "../../utils/profile";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getProfilePending = () => ({
  type: actionStrings.getProfile.concat("_", Pending),
});

const getProfileRejected = (error) => ({
  type: actionStrings.getProfile.concat("_", Rejected),
  payload: { error },
});

const getProfileFulfilled = (data) => ({
  type: actionStrings.getProfile.concat("_", Fulfilled),
  payload: { data },
});

const editPasswordPending = () => ({
  type: actionStrings.editPassword.concat("_", Pending),
});

const editPasswordRejected = (error) => ({
  type: actionStrings.editPassword.concat("_", Rejected),
  payload: { error },
});

const editPasswordFulfilled = (data) => ({
  type: actionStrings.editPassword.concat("_", Fulfilled),
  payload: { data },
});

const editProfilePending = () => ({
  type: actionStrings.editProfile.concat("_", Pending),
});

const editProfileRejected = (error) => ({
  type: actionStrings.editProfile.concat("_", Rejected),
  payload: { error },
});

const editProfileFulfilled = (data) => ({
  type: actionStrings.editProfile.concat("_", Fulfilled),
  payload: { data },
});

const getProfileThunk = (token, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(getProfilePending());
      const result = await getProfile(token);
      dispatch(getProfileFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getProfileRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const editPasswordThunk = (body, token, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(editPasswordPending());
      const result = await editPassword(body, token);
      dispatch(editPasswordFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(editPasswordRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const editProfileThunk = (body, token, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(editProfilePending());
      const result = await editProfile(body, token);
      dispatch(editProfileFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(editProfileRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const userAction = {
  getProfileThunk,
  editPasswordThunk,
  editProfileThunk,
};

export default userAction;
