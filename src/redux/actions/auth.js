import { ActionType } from "redux-promise-middleware";
import { login, logout, register } from "../../utils/auth";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const loginPending = () => ({
  type: actionStrings.authLogin.concat("_", Pending),
});

const loginRejected = (error) => ({
  type: actionStrings.authLogin.concat("_", Rejected),
  payload: { error },
});

const loginFulfilled = (data) => ({
  type: actionStrings.authLogin.concat("_", Fulfilled),
  payload: { data },
});

const registerPending = () => ({
  type: actionStrings.authRegister.concat("_", Pending),
});

const registerRejected = (error) => ({
  type: actionStrings.authRegister.concat("_", Rejected),
  payload: { error },
});

const registerFulfilled = () => ({
  type: actionStrings.authRegister.concat("_", Fulfilled),
});

const logoutPending = () => ({
  type: actionStrings.authLogout.concat("_", Pending),
});

const logoutRejected = (error) => ({
  type: actionStrings.authLogout.concat("_", Rejected),
  payload: { error },
});

const logoutFulfilled = () => ({
  type: actionStrings.authLogout.concat("_", Fulfilled),
});

const loginThunk = (body, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(loginPending());
      const result = await login(body);
      dispatch(loginFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch(loginRejected(error));
      typeof cbSuccess === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const registerThunk = (body, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(registerPending());
      const result = await register(body);
      dispatch(registerFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(registerRejected(error));
    }
  };
};

const logoutThunk = (token, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(logoutPending());
      const result = await logout(token);
      dispatch(logoutFulfilled(result));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error);
      dispatch(logoutRejected(error));
    }
  };
};

const authAction = {
  loginThunk,
  logoutThunk,
  registerThunk,
};

export default authAction;
