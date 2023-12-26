import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const GetProfileUser = async ({ queryKey }) => {
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

const useGetProfileUser = (options) => {
  return useQuery([API_ENDPOINT.GET_PROFILE, options], GetProfileUser);
};

export { GetProfileUser, useGetProfileUser };
