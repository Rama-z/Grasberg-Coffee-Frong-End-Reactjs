import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

// const getAllProduct = (limit) => {
//   console.log(process.env.REACT_APP_BACKEND_HOST);
//   const url = `${baseUrl}products/?search=&filter=&order_by=transactions&order_in=&${limit}`;
//   console.log(axios.get(url));
//   return axios.get(url);
// };

const getAllProduct = (limit) => {
  return axios({
    method: "GET",
    url: `${baseUrl}products/?search=&filter=&order_by=transactions&order_in=&${limit}`,
  });
};

const getFavorite = () => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}products/?search=&filter=&order_by=transactions&order_in=&page=&limit=`;
  return axios.get(url);
};

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const postData = (token, data) => {
  return axios({
    method: "POST",
    url: `${baseUrl}products/?search=&filter=&order_by=&order_in=&page=&limit=`,
    data,
    headers: { "x-access-token": token },
  });
};

export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
};

export { getFavorite, getAllProduct };
