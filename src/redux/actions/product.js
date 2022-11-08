import actionStrings from "./actionStrings";
import { getFavorite, postData } from "../../utils/product";

const getFavoriteAction = () => {
  return {
    type: actionStrings.getFavorites,
    payload: getFavorite(),
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
  addProductActions,
};

export default productAction;
