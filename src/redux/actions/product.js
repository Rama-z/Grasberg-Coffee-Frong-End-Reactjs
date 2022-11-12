import actionStrings from "./actionStrings";
import { getFavorite, getAllProduct, postData } from "../../utils/product";

const getFavoriteAction = () => {
  return {
    type: actionStrings.getFavorites,
    payload: getFavorite(),
  };
};

const getAllProductAction = (limit) => {
  return {
    type: actionStrings.getAllProduct,
    payload: getAllProduct(limit),
  };
};

const addProductActions = (token, body) => {
  return {
    type: actionStrings.createProduct,
    payload: postData(token, body),
  };
};

const productAction = {
  getFavoriteAction,
  getAllProductAction,
  addProductActions,
};

export default productAction;
