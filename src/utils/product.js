import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BACKEND_HOST}/api/v1`;

export const getProducts = (params) => {
  const URL = `${baseUrl}/products?${params}`;
  return axios.get(URL);
};

export const getProductById = (id) => {
  const URL = `${baseUrl}/products/${id}`;
  return axios.get(URL);
};

// const postData = (token, data) => {
//   return axios({
//     method: "POST",
//     url: `${baseUrl}products/?search=&filter=&order_by=&order_in=&page=&limit=`,
//     data,
//     headers: { "x-access-token": token },
//   });
// };

// const editProduct = (data, token /*id*/) => {
//   const url = `${process.env.REACT_APP_BACKEND_HOST}products/image/193`;
//   return axios.patch(url, data, {
//     headers: {
//       "x-access-token": token,
//     },
//   });
// };
