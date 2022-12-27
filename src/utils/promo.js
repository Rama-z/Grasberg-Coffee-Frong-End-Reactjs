import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

const getPromo = () => {
  return axios({
    method: "GET",
    url: `${baseUrl}promos/?codes=&menu=`,
  });
};

const addPromo = (token, data) => {
  return axios({
    method: "POST",
    url: `${baseUrl}promos/`,
    data,
    headers: { "x-access-token": token },
  });
};

export { getPromo, addPromo };
