import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

const getFavorite = () => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}products/?search=&filter=&order_by=transactions&order_in=&page=&limit=`;
  return axios.get(url);
};

export { getFavorite };

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
    url: `${process.env.REACT_APP_BACKEND_HOST}products/?search=&filter=&order_by=&order_in=&page=&limit=`,
    data,
    headers: { "x-access-token": token },
  });
};

export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
};
