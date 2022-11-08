import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export const getProfile = () => {
  const token = JSON.parse(localStorage.getItem("user-info")).token;
  return axios({
    method: "GET",
    url: `${baseUrl}users/users`,
    headers: { "x-access-token": token },
  });
};

export const editProfile = (data, token) => {
  return axios({
    method: "PATCH",
    url: `${baseUrl}users/`,
    data,
    headers: { "x-access-token": token },
  });
};
