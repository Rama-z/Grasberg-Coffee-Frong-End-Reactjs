import { actionStrings } from "./actionStrings";
import { getProducts, getProductById } from "../../utils/product";
import { ActionType } from "redux-promise-middleware";

const { Pending, Rejected, Fulfilled } = ActionType;

const getProductsPending = () => ({
  type: actionStrings.getProducts.concat("_", Pending),
});

const getProductsRejected = (error) => ({
  type: actionStrings.getProducts.concat("_", Rejected),
  payload: { error },
});

const getProductsFulfilled = (data) => ({
  type: actionStrings.getProducts.concat("_", Fulfilled),
  payload: { data },
});

const getProductByIdPending = () => ({
  type: actionStrings.getProductById.concat("_", Pending),
});

const getProductByIdRejected = (error) => ({
  type: actionStrings.getProductById.concat("_", Rejected),
  payload: { error },
});

const getProductByIdFulfilled = (data) => ({
  type: actionStrings.getProductById.concat("_", Fulfilled),
  payload: { data },
});

const getProductsThunk = (params, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(getProductsPending());
      const result = await getProducts(params);
      dispatch(getProductsFulfilled(result.data));
      console.log(result);
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch(getProductsRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const getProductByIdThunk = (id, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(getProductByIdPending());
      const result = await getProductById(id);
      dispatch(getProductByIdFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch(getProductByIdRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const productActions = {
  getProductsThunk,
  getProductByIdThunk,
};

export default productActions;
