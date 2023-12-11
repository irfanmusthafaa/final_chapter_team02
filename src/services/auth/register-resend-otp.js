import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const getResendOTP = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http.get(_key).then((result) => {
    return result;
  });

  return data;
};

const useGetResendOTP = (options) => {
  return useQuery([API_ENDPOINT.AUTH_RESEND_OTP_REGISTER, options], getResendOTP);
};

export { getResendOTP, useGetResendOTP };
