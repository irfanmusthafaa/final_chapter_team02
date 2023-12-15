import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const deleteCategory = async (categoryId) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.DATA_CATEGORY}/${categoryId}`);
    return response.data; // Jika API mengembalikan data setelah penghapusan
  } catch (error) {
    console.log(error, "error");
  }
};

const useDeleteCategory = () => {
  return useMutation(deleteCategory);
};

export { deleteCategory, useDeleteCategory };
