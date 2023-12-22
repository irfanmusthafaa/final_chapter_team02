import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";

const GetPayment = async ({ queryKey }) => {
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

const useGetPayment = (options) => {
  return useQuery([API_ENDPOINT.ADMIN_PAYMENT, options], GetPayment);
};

export { GetPayment, useGetPayment };
