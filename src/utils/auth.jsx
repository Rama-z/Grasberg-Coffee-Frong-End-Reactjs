import axios from "axios";
const URL = `${process.env.REACT_APP_BACKEND_HOST}/api/v1`;

const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

export const login = (body) => {
  const URLS = `${URL}/auth/login`;
  return axios.post(URLS, body);
};

export const register = (body) => {
  const URLS = `${URL}/auth/register`;
  return axios.post(URLS, body);
};

export const logout = (token) => {
  const URLS = `${URL}/auth/logout`;
  return axios.delete(URLS, config(token));
};

export const forgot = (body) => {
  const URLS = `${URL}/auth/forgot-password`;
  return axios.post(URLS, body);
};

export const confirm = (body) => {
  const URLS = `${URL}/auth/forgot-password`;
  return axios.patch(URLS, body);
};

export const reset = (body) => {
  const URLS = `${URL}/auth/reset-password`;
  return axios.patch(URLS, body);
};
