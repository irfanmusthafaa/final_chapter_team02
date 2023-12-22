import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const DeleteBank = async (id) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DATA_BANK}/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const useDeleteBank = () => {
  return useMutation(DeleteBank);
};

export { DeleteBank, useDeleteBank };
