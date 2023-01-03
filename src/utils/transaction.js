import axios from "axios";
// const baseUrl = `${process.env.REACT_APP_BACKEND_HOST}/api/v1`;
const baseUrl = `http://localhost:8080/api/v1`;

const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

export const createTransaction = (body, token) => {
  const URL = `${baseUrl}/transactions/createTransaction`;
  return axios.post(URL, body, config(token));
};

export const handleMidTrans = (body, token) => {
  const URL = `${baseUrl}/transactions/midTransHandler`;
  return axios.patch(URL, body, config(token));
};
