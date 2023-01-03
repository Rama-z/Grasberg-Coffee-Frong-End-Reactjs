import { actionStrings } from "./actionStrings";
import { createTransaction } from "../../utils/transaction";
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

const transactionAction = {
  createTransactionThunk,
  addToCart,
  deleteCart,
  deleteSingleCart,
};

export default transactionAction;
