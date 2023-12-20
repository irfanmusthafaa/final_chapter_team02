import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const UpdateClass = async (id, input) => {
  return await httpAdmin.put(`${API_ENDPOINT.DATA_CLASS}/${id}`, input);
};

export { UpdateClass };
