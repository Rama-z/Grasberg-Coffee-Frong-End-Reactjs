import { actionStrings } from "./actionStrings";
import { getPromo, addPromo } from "../../utils/promo";
import { ActionType } from "redux-promise-middleware";
const { Pending, Rejected, Fulfilled } = ActionType;

const getPromoPending = () => ({
  type: actionStrings.getPromo.concat("_", Pending),
});

const getPromoRejected = (error) => ({
  type: actionStrings.getPromo.concat("_", Rejected),
  payload: { error },
});

const getPromoFulfilled = (data) => ({
  type: actionStrings.getPromo.concat("_", Fulfilled),
  payload: { data },
});

const addPromoPending = () => ({
  type: actionStrings.addPromo.concat("_", Pending),
});

const addPromoRejected = (error) => ({
  type: actionStrings.addPromo.concat("_", Rejected),
  payload: { error },
});

const addPromoFulfilled = (data) => ({
  type: actionStrings.addPromo.concat("_", Fulfilled),
  payload: { data },
});

const getPromoThunk = (params, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(getPromoPending());
      const result = await getPromo(params);
      dispatch(getPromoFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getPromoRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const addPromoThunk = (body, token, cbSuccess, cbFailed) => {
  return async (dispatch) => {
    try {
      dispatch(addPromoPending());
      const result = await addPromo(body, token);
      dispatch(addPromoFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(addPromoRejected(error));
      typeof cbFailed === "function" && cbFailed(error.response.data.msg);
    }
  };
};

const promoAction = {
  getPromoThunk,
  addPromoThunk,
};

export default promoAction;
