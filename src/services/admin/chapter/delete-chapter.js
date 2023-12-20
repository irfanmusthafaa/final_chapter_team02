import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const DeleteChapter = async (id) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DATA_CHAPTER}/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const useDeleteChapter = () => {
  return useMutation(DeleteChapter);
};

export { DeleteChapter, useDeleteChapter };
