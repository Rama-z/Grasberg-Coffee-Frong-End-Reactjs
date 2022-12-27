import { ActionType } from "redux-promise-middleware";
import { login } from "../../utils/auth";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const loginPending = () => ({
  type: actionStrings.authLogin.concat("_", Pending),
});

const loginRejected = () => ({
  type: actionStrings.authLogin.concat("_", Rejected),
});

const loginFulfilled = (data) => ({
  type: actionStrings.authLogin.concat("_", Fulfilled),
  payload: data,
});

const loginThunk = (body) => {
  return async (dispatch) => {
    try {
      dispatch(loginPending());
      const result = await login(body);
      console.log(result);
      dispatch(loginFulfilled(result.data));
    } catch (error) {
      dispatch(loginRejected(error));
    }
  };
};

const authAction = {
  loginThunk,
};

export default authAction;
