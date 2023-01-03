import { actionStrings } from "./actionStrings";
import {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
} from "../../utils/product";
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

const addProductPending = () => ({
  type: actionStrings.addProduct.concat("_", Pending),
});

const addProductRejected = (error) => ({
  type: actionStrings.addProduct.concat("_", Rejected),
  payload: { error },
});

const addProductFulfilled = (data) => ({
  type: actionStrings.addProduct.concat("_", Fulfilled),
  payload: { data },
});

const editProductPending = () => ({
  type: actionStrings.editProduct.concat("_", Pending),
});

const editProductRejected = (error) => ({
  type: actionStrings.editProduct.concat("_", Rejected),
  payload: { error },
});

const editProductFulfilled = (data) => ({
  type: actionStrings.editProduct.concat("_", Fulfilled),
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

const addProductThunk = (body, token, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(addProductPending());
      const result = await addProduct(body, token);
      dispatch(addProductFulfilled(result.data));
      console.log(result);
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch(addProductRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const editProductThunk = (body, token, params, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(editProductPending());
      const result = await editProduct(body, token, params);
      dispatch(editProductFulfilled(result.data));
      console.log(result);
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch(editProductRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const productActions = {
  getProductsThunk,
  getProductByIdThunk,
  addProductThunk,
  editProductThunk,
};

export default productActions;
