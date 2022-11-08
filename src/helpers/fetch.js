import axios from "axios";

// const baseUrl = "http://localhost:8060/api/v1";

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${"http://localhost:8060/api/v1"}${url}`,
    data,
    params,
  });
};

export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
};

export const login = (data) => {
  return axiosRequest("POST", "/auths/login", data);
};

export const signup = (body) => {
  const URL = `${process.env.REACT_APP_BACKEND_HOST}api/v1/users`;
  return axios.post(URL, body);
};

export const getProduct = (param) => {
  console.log(param);
  const queryParam = {
    categories: param.categories ?? "",
    sort: param.sort ?? "id",
  };
  const URL = `http://localhost:8060/api/v1/products?categories=${queryParam.categories}&sort=${queryParam.sort}&limit=12&page=1`;
  return axios.get(URL);
};

export const getProductById = (id) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  // console.log(token);
  const URL = `http://localhost:8060/api/v1/products/${id}`;
  return axios.get(URL, {
    headers: {
      "access-token": token,
    },
  });
};

export const getProfile = () => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  console.log(token);
  const URL =
    // process.env.REACT_APP_BACKEND_HOST +
    "http://localhost:8060/api/v1/users/profile_user";
  console.log(URL);
  return axios.get(URL, {
    headers: {
      "access-token": token,
    },
  });
};

export const editProfile = (body) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const URL =
    // process.env.REACT_APP_BACKEND_HOST +
    "http://localhost:8060/api/v1/users/profile";
  for (const pair of body.entries()) {
    console.log(pair);
  }
  return axios.patch(URL, body, {
    headers: {
      "access-token": token,
    },
  });
};

export const getHistory = () => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  console.log(token);
  const URL =
    // process.env.REACT_APP_HOST +
    `http://localhost:8060/api/v1/transactions/?page=1&limit=15`;
  return axios.get(URL, {
    headers: {
      "access-token": token,
    },
  });
};

export const deleteHistory = (id) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  console.log(token);
  const URL = process.env.REACT_APP_HOST + `/transactions/delete_history/${id}`;
  return axios.delete(URL, {
    headers: {
      "access-token": token,
    },
  });
};
