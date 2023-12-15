import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import http from "../../utils/http";

const EditProfile = async (input) => {
  return await http.post(API_ENDPOINT.EDIT_PROFILE_USER, input);
};

const useEditProfile = () => {
  return useMutation(EditProfile);
};

export { EditProfile, useEditProfile };
