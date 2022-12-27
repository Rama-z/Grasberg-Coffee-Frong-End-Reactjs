// import actionStrings from "../actions/actionStrings";
// import { ActionType } from "redux-promise-middleware";

// const initialState = {
//   data: [],
//   promo: [],
//   dataCreate: [],
//   errCreate: null,
//   isLoading: false,
//   isError: false,
//   err: null,
// };

// export const promoReducer = (prevState = initialState, action) => {
//   const { getPromos, addPromo } = actionStrings;
//   const { Pending, Rejected, Fulfilled } = ActionType;
//   switch (action.type) {
//     case getPromos.concat("_", Pending): {
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };
//     }
//     case addPromo.concat("_", Pending): {
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };
//     }
//     case getPromos.concat("_", Rejected): {
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         err: action.payload.message,
//       };
//     }
//     case addPromo.concat("_", Rejected): {
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         errCreate: action.payload.message,
//       };
//     }
//     case getPromos.concat("_", Fulfilled): {
//       const response = action.payload;
//       // console.log(response);
//       return {
//         ...prevState,
//         isLoading: false,
//         promo: response.data.data,
//       };
//     }
//     case addPromo.concat("_", Fulfilled): {
//       return {
//         ...prevState,
//         isLoading: false,
//         dataCreate: action.payload.data.data,
//       };
//     }
//     default:
//       return prevState;
//   }
// };

// export default promoReducer;
