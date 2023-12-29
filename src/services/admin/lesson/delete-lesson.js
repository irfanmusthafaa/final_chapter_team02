import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const DeleteLesson = async (id) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DATA_LESSON_ADMIN}/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const useDeleteLesson = () => {
  return useMutation(DeleteLesson);
};

export { DeleteLesson, useDeleteLesson };
