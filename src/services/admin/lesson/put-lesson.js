import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const UpdateLesson = async (id, input) => {
  return await httpAdmin.put(`${API_ENDPOINT.DATA_LESSON_ADMIN}/${id}`, input);
};

export { UpdateLesson };
