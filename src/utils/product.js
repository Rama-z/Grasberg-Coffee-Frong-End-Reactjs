import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

const getAllProduct = (params) => {
  return axios({
    method: "GET",
    url: `${baseUrl}products/?${params}`,
  });
};

const getProductNext = (url) => {
  return axios.get(url);
};

const getFavorite = (limit) => {
  return axios({
    method: "GET",
    url: `${baseUrl}products/?search=&filter=&order_by=transactions&order_in=&${limit}`,
  });
};

const getCoffee = (limit) => {
  return axios({
    method: "GET",
    url: `${baseUrl}products/?search=&filter=1&order_by=&order_in=&${limit}`,
  });
};

const getNonCoffee = (limit) => {
  return axios({
    method: "GET",
    url: `${baseUrl}products/?search=&filter=2&order_by=&order_in=&${limit}`,
  });
};

const getFood = (limit) => {
  return axios({
    method: "GET",
    url: `${baseUrl}products/?search=&filter=3&order_by=&order_in=&${limit}`,
  });
};

const postData = (token, data) => {
  return axios({
    method: "POST",
    url: `${baseUrl}products/?search=&filter=&order_by=&order_in=&page=&limit=`,
    data,
    headers: { "x-access-token": token },
  });
};

const editProduct = (data, token /*id*/) => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}products/image/193`;
  return axios.patch(url, data, {
    headers: {
      "x-access-token": token,
    },
  });
};

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
};

export {
  getFavorite,
  getProductNext,
  getAllProduct,
  getCoffee,
  getNonCoffee,
  getFood,
  postData,
  editProduct,
};
