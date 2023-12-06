import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

const RegisterUser = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_REGISTER, input);
  // CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
};

const useRegisterUser = () => {
  return useMutation(RegisterUser);
};

export { RegisterUser, useRegisterUser };
