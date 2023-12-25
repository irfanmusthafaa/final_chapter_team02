import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const AddNotificationAll = async (input) => {
  return await httpAdmin.post(API_ENDPOINT.POST_NOTIFICATION_ALL, input);
};

const useAddNotificationAll = () => {
  return useMutation(AddNotificationAll);
};

export { AddNotificationAll, useAddNotificationAll };
