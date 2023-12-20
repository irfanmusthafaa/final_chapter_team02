import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";

const getNotificationAll = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http
    .get(_key)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return null;
    });

  return data.data;
};

const useGetNotificationAll = (options) => {
  return useQuery([API_ENDPOINT.GET_NOTIFICATION_ALL, options], getNotificationAll);
};

export { getNotificationAll, useGetNotificationAll };
