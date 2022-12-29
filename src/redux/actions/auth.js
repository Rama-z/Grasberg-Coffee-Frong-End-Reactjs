import { ActionType } from "redux-promise-middleware";
import { login, logout, register, forgot, confirm } from "../../utils/auth";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

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

const forgotPending = () => ({
  type: actionStrings.authForgot.concat("_", Pending),
});

const forgotRejected = (error) => ({
  type: actionStrings.authForgot.concat("_", Rejected),
  payload: { error },
});

const forgotFulfilled = (data) => ({
  type: actionStrings.authForgot.concat("_", Fulfilled),
  payload: { data },
});

const confirmPending = () => ({
  type: actionStrings.authConfirm.concat("_", Pending),
});

const confirmRejected = (error) => ({
  type: actionStrings.authConfirm.concat("_", Rejected),
  payload: { error },
});

const confirmFulfilled = (data) => ({
  type: actionStrings.authConfirm.concat("_", Fulfilled),
  payload: { data },
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

const registerThunk = (body, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(registerPending());
      const result = await register(body);
      dispatch(registerFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(registerRejected(error));
      typeof cbSuccess === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const confirmThunk = (body, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(confirmPending());
      const result = await confirm(body);
      dispatch(confirmFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch(confirmRejected(error));
      typeof cbSuccess === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const forgotThunk = (body, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(forgotPending());
      const result = await forgot(body);
      dispatch(forgotFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch(forgotRejected(error));
      typeof cbSuccess === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const logoutThunk = (token, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(logoutPending());
      const result = await logout(token);
      dispatch(logoutFulfilled(result));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error);
      dispatch(logoutRejected(error));
      typeof cbSuccess === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const authAction = {
  loginThunk,
  logoutThunk,
  registerThunk,
  forgotThunk,
  confirmThunk,
};

export default authAction;
