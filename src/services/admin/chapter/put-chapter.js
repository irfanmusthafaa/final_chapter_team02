import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const UpdateChapter = async (id, input) => {
  return await httpAdmin.put(`${API_ENDPOINT.DATA_CHAPTER}/${id}`, input);
};

export { UpdateChapter };
