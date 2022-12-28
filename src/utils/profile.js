import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BACKEND_HOST}/api/v1`;

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
