import { ActionType } from "redux-promise-middleware";
import { getProfile } from "../../utils/profile";
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

const getProfileThunk = (token) => {
  return async (dispatch) => {
    try {
      dispatch(getProfilePending());
      const result = await getProfile(token);
      dispatch(getProfileFulfilled(result.data));
    } catch (error) {
      dispatch(getProfileRejected(error));
    }
  };
};

const profileAction = {
  getProfileThunk,
};

export default profileAction;
