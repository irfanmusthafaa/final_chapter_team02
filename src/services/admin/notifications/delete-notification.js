import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const DeleteNotification = async (id) => {
  try {
    const response = await httpAdmin.delete(`${API_ENDPOINT.GET_NOTIFICATION_ALL}/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const useDeleteNotification = () => {
  return useMutation(DeleteNotification);
};

export { DeleteNotification, useDeleteNotification };
