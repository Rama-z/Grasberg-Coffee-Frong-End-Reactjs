import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export const postData = (token, data) => {
  return axios({
    method: "POST",
    url: `${baseUrl}promos/`,
    data,
    headers: { "x-access-token": token },
  });
};
