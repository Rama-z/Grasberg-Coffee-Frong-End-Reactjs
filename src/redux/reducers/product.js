// import actionStrings from "../actions/actionStrings";
// import { ActionType } from "redux-promise-middleware";
// import styles from "../../styles/Product.module.css";

// const initialState = {
//   data: [],
//   product: [],
//   promo: [],
//   dataCreate: [],
//   dataEdit: [],
//   dataAll: [],
//   id: "",
//   name: "",
//   price: "",
//   image: "",
//   desc: "",
//   ctg: "",
//   toggleNext: styles.hide,
//   togglePrev: styles.hide,
//   next: null,
//   prev: null,
//   isLoading: false,
//   isError: false,
//   err: null,
//   errCreate: null,
//   errEdit: null,
//   errgetall: null,
// };

// export const productReducer = (prevState = initialState, action) => {
//   const {
//     getFavorites,
//     getCoffee,
//     getNonCoffee,
//     getFood,
//     getAllProduct,
//     getDetailProduct,
//   } = actionStrings;
//   const { Pending, Rejected, Fulfilled } = ActionType;
//   switch (action.type) {
//     case getFavorites.concat("_", Pending):
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };
//     case getCoffee.concat("_", Pending):
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };
//     case getNonCoffee.concat("_", Pending):
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };
//     case getFood.concat("_", Pending):
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };
//     case getAllProduct.concat("_", Pending):
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };
//     case actionStrings.editProduct + actionStrings.pending:
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };
//     case getDetailProduct.concat("_", Pending):
//       return {
//         ...prevState,
//         isError: false,
//         isLoading: true,
//       };
//     case getFavorites.concat("_", Rejected): {
//       const errorResponse = action.payload;
//       const errorMessage = errorResponse.message;
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         err: errorMessage,
//       };
//     }

//     case getCoffee.concat("_", Rejected): {
//       const errorResponse = action.payload;
//       const errorMessage = errorResponse.message;
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         err: errorMessage,
//       };
//     }

//     case getNonCoffee.concat("_", Rejected): {
//       const errorResponse = action.payload;
//       const errorMessage = errorResponse.message;
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         err: errorMessage,
//       };
//     }

//     case getFood.concat("_", Rejected): {
//       const errorResponse = action.payload;
//       const errorMessage = errorResponse.message;
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         err: errorMessage,
//       };
//     }

//     case getAllProduct.concat("_", Rejected): {
//       const errorResponse = action.payload;
//       const errorMessage = errorResponse.message;
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         data: [],
//         err: errorMessage,
//       };
//     }
//     case actionStrings.editProduct + actionStrings.rejected:
//       // eslint-disable-next-line no-case-declarations
//       const errorResponseEdit = action.payload;
//       // const errorMessageEdit = errorResponseEdit.response;
//       console.log(errorResponseEdit);
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         errEdit: errorResponseEdit,
//       };
//     case getDetailProduct.concat("_", Rejected):
//       // eslint-disable-next-line no-case-declarations
//       const errRes = action.payload.response.data.msg;
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         error: errRes,
//       };
//     case getFavorites.concat("_", Fulfilled): {
//       const response = action.payload;
//       let onNext = styles.hide;
//       let onPrev = styles.hide;
//       if (response.data.meta.next) onNext = styles.next;
//       if (response.data.meta.prev) onPrev = styles.prev;
//       return {
//         ...prevState,
//         isLoading: false,
//         product: response.data.result,
//         next: response.data.meta.next,
//         prev: response.data.meta.prev,
//         toggleNext: onNext,
//         togglePrev: onPrev,
//       };
//     }

//     case getCoffee.concat("_", Fulfilled): {
//       console.log(response.data.meta.next);
//       const response = action.payload;
//       // let onNext = styles.hide;
//       // let onPrev = styles.hide;
//       // if (response.data.meta.next) onNext = styles.next;
//       // if (response.data.meta.prev) onPrev = styles.prev;
//       return {
//         ...prevState,
//         isLoading: false,
//         product: response.data.result,
//         // next: response.data.meta.next,
//         // prev: response.data.meta.prev,
//         // toggleNext: onNext,
//         // togglePrev: onPrev,
//       };
//     }

//     case getNonCoffee.concat("_", Fulfilled): {
//       const response = action.payload;
//       let onNext = styles.hide;
//       let onPrev = styles.hide;
//       if (response.data.meta.next) onNext = styles.next;
//       if (response.data.meta.prev) onPrev = styles.prev;
//       return {
//         ...prevState,
//         isLoading: false,
//         product: response.data.result,
//         next: response.data.meta.next,
//         prev: response.data.meta.prev,
//         toggleNext: onNext,
//         togglePrev: onPrev,
//       };
//     }

//     case getFood.concat("_", Fulfilled): {
//       const response = action.payload;
//       let onNext = styles.hide;
//       let onPrev = styles.hide;
//       if (response.data.meta.next) onNext = styles.next;
//       if (response.data.meta.prev) onPrev = styles.prev;
//       return {
//         ...prevState,
//         isLoading: false,
//         product: response.data.result,
//         next: response.data.meta.next,
//         prev: response.data.meta.prev,
//         toggleNext: onNext,
//         togglePrev: onPrev,
//       };
//     }

//     case getAllProduct.concat("_", Fulfilled): {
//       const response = action.payload;
//       let onNext = styles.hide;
//       let onPrev = styles.hide;
//       if (response.data.meta.next) onNext = styles.next;
//       if (response.data.meta.prev) onPrev = styles.prev;
//       return {
//         ...prevState,
//         isLoading: false,
//         product: response.data.result,
//         next: response.data.meta.next,
//         prev: response.data.meta.prev,
//         toggleNext: onNext,
//         togglePrev: onPrev,
//       };
//     }
//     case actionStrings.editProduct + actionStrings.fulfilled:
//       // eslint-disable-next-line no-case-declarations
//       const responseEdits = action.payload;
//       // eslint-disable-next-line no-case-declarations
//       const resultEdits = responseEdits.data.data;
//       return {
//         ...prevState,
//         isLoading: false,
//         dataEdit: resultEdits,
//       };
//     case getDetailProduct.concat("_", Fulfilled):
//       // eslint-disable-next-line no-case-declarations
//       const response = action.payload.data.data;
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         product: response,
//       };
//     default:
//       return prevState;
//   }
// };
