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

export const editProfile = (body) => {
  const login = JSON.parse(localStorage.getItem("user-info"));
  const token = login.token;
  const URL = "http://localhost:8080/api/v1/users/";
  return axios.patch(URL, body, {
    headers: {
      "access-token": token,
    },
  });
};
