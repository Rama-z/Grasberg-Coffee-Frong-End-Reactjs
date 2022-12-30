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

export const getProfile = (token) => {
  const URLS = `${baseUrl}/users/users`;
  return axios.get(URLS, config(token));
};

export const editPassword = (body, token) => {
  const URLS = `${baseUrl}/users/editpwd`;
  return axios.patch(URLS, body, config(token));
};

export const editProfile = (body, token) => {
  const URLS = `${baseUrl}/users/editProfile`;
  return axios.patch(URLS, body, config(token));
};
