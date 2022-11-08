import { editProfile, getProfile } from "../../utils/profile";
import actionStrings from "./actionStrings";

export const getProfileActions = () => {
  return {
    type: actionStrings.getProfile,
    payload: getProfile(),
  };
};

export const editProfileActions = (body, token) => {
  return {
    type: actionStrings.updateProfile,
    payload: editProfile(body, token),
  };
};
