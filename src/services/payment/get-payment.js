import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";

const GetPaymentUser = async ({ queryKey }) => {
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

const useGetPaymentUser = (options) => {
  return useQuery([API_ENDPOINT.PAYMENT_USER, options], GetPaymentUser);
};

export { GetPaymentUser, useGetPaymentUser };
