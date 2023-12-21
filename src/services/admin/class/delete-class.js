import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const DeleteClass = async (id) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DATA_CLASS}/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const useDeleteClass = () => {
  return useMutation(DeleteClass);
};

export { DeleteClass, useDeleteClass };
