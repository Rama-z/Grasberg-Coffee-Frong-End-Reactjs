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
  const URLS = `${baseUrl}/promos${params}`;
  return axios.get(URLS);
};

const addPromo = (token, data) => {
  return axios({
    method: "POST",
    url: `${baseUrl}promos/`,
    data,
    headers: { "x-access-token": token },
  });
};

export { addPromo };
