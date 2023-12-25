import { useQuery } from "@tanstack/react-query";
import httpAdmin from "../../../utils/httpAdmin";
import { API_ENDPOINT } from "../../../utils/api-endpoint";

const GetNotificationAdmin = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await httpAdmin
    .get(_key)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return null;
    });

  return data.data;
};

const useGetNotificationAdmin = (options) => {
  return useQuery([API_ENDPOINT.GET_NOTIFICATION_ALL, options], GetNotificationAdmin);
};

export { GetNotificationAdmin, useGetNotificationAdmin };
