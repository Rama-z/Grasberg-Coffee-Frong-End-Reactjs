import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BACKEND_HOST}/api/v1`;

const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

export const getPromo = (params) => {
  const URL = `${baseUrl}/promos${params}`;
  return axios.get(URL);
};

export const addPromo = (body, token) => {
  const URL = `${baseUrl}/promos`;
  return axios.post(URL, body, config(token));
};
