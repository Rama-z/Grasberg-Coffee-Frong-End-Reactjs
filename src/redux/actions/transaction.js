import { actionStrings } from "./actionStrings";
import {
  createTransaction,
  getHistory,
  deleteHistory,
} from "../../utils/transaction";
import { ActionType } from "redux-promise-middleware";

const { Pending, Rejected, Fulfilled } = ActionType;

const addToCart = (data, product_item) => ({
  type: actionStrings.addToCart.concat("_", Fulfilled),
  payload: { ...data, product_item },
});

const deleteCart = () => ({
  type: actionStrings.deleteCart.concat("_", Fulfilled),
});

const deleteSingleCart = (trans_id) => ({
  type: actionStrings.deleteSingleCart.concat("_", Fulfilled),
  payload: { trans_id },
});

const createTransactionPending = () => ({
  type: actionStrings.createTransaction.concat("_", Pending),
});

const createTransactionRejected = (error) => ({
  type: actionStrings.createTransaction.concat("_", Rejected),
  payload: { error },
});

const createTransactionFulfilled = (data) => ({
  type: actionStrings.createTransaction.concat("_", Fulfilled),
  payload: { data },
});

const getHistoryPending = () => ({
  type: actionStrings.getHistory.concat("_", Pending),
});

const getHistoryRejected = (error) => ({
  type: actionStrings.getHistory.concat("_", Rejected),
  payload: { error },
});

const getHistoryFulfilled = (data) => ({
  type: actionStrings.getHistory.concat("_", Fulfilled),
  payload: { data },
});

const deleteHistoryPending = () => ({
  type: actionStrings.deleteHistory.concat("_", Pending),
});

const deleteHistoryRejected = (error) => ({
  type: actionStrings.deleteHistory.concat("_", Rejected),
  payload: { error },
});

const deleteHistoryFulfilled = (data) => ({
  type: actionStrings.deleteHistory.concat("_", Fulfilled),
  payload: { data },
});

const getHistoryThunk = (token, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(getHistoryPending());
      const result = await getHistory(token);
      dispatch(getHistoryFulfilled(result.data, cbSuccess));
      console.log(result);
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      // console.log(error.response.data.msg);
      dispatch(getHistoryRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const createTransactionThunk = (body, token, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(createTransactionPending());
      const result = await createTransaction(body, token);
      dispatch(createTransactionFulfilled(result.data, cbSuccess));
      console.log(result);
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      // console.log(error.response.data.msg);
      dispatch(createTransactionRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const deleteHistoryThunk = (token, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(deleteHistoryPending());
      const result = await deleteHistory(token);
      dispatch(deleteHistoryFulfilled(result.data, cbSuccess));
      console.log(result);
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      // console.log(error.response.data.msg);
      dispatch(deleteHistoryRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const transactionAction = {
  createTransactionThunk,
  getHistoryThunk,
  deleteHistoryThunk,
  addToCart,
  deleteCart,
  deleteSingleCart,
};

export default transactionAction;
