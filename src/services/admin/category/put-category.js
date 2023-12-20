import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const UpdateCategory = async (id, input) => {
  return await httpAdmin.put(`${API_ENDPOINT.DATA_CATEGORY}/${id}`, input);
};

export { UpdateCategory };
