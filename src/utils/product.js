import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BACKEND_HOST}/api/v1`;
// const baseUrl = `http://localhost:8080/api/v1`;

const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

export const getProducts = (params) => {
  const URL = `${baseUrl}/products${params}`;
  return axios.get(URL);
};

export const getProductById = (id) => {
  const URL = `${baseUrl}/products/${id}`;
  return axios.get(URL);
};

export const addProduct = (body, token) => {
  const URL = `${baseUrl}/products`;
  return axios.post(URL, body, config(token));
};

export const editProduct = (body, token, params) => {
  const URL = `${baseUrl}/products/${params}`;
  return axios.patch(URL, body, config(token));
};

export const deleteProduct = (body, token, params) => {
  const URL = `${baseUrl}/products/delete/${params}`;
  return axios.patch(URL, body, config(token));
};
