import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

const ForgotPassword = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_FORGOT_PASSWORD, input).then((result) => {
    return result;
  });
};

const useForgotPassword = () => {
  return useMutation(ForgotPassword);
};

export { ForgotPassword, useForgotPassword };
