import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

const ChangePassword = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_CHANGE_PASSWORD, input);
};

const useChangePassword = () => {
  return useMutation(ChangePassword);
};

export { ChangePassword, useChangePassword };
