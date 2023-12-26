import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const UpdateProfile = async (input) => {
  return await http.put(`${API_ENDPOINT.EDIT_PROFILE_USER}`, input);
};

export { UpdateProfile };
