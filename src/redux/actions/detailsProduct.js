import { getData } from "../../utils/fetcher";
import actionStrings from "./actionStrings";

export const getDetailProductAction = (id) => {
  return {
    type: actionStrings.getDetailProduct,
    payload: getData(`/products/${id}`),
  };
};
