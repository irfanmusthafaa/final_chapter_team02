import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import http from "../../utils/http";
import { CookiesKey } from "../../utils/cookies";

const LoginUser = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_LOGIN, input).then((result) => {
    CookiesStorage.set(CookiesKey.AuthToken, result);
    console.log(result, "result");
    return result;
  });
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLoginUser };
