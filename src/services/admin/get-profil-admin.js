import { useQuery } from "@tanstack/react-query";
import httpAdmin from "../../utils/httpAdmin";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const GetProfileAdmin = async ({ queryKey }) => {
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

const useGetProfileAdmin = (options) => {
  return useQuery([API_ENDPOINT.GET_PROFILE, options], GetProfileAdmin);
};

export { GetProfileAdmin, useGetProfileAdmin };
