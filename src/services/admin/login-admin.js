import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import httpAdmin from "../../utils/httpAdmin";

const LoginAdmin = async (input) => {
  return await httpAdmin.post(API_ENDPOINT.ADMIN_LOGIN, input).then((result) => {
    CookiesStorage.set(CookiesKey.TokenAdmin, result.data.data.token);
    CookiesStorage.set(CookiesKey.Admin, decodeURIComponent(result.data.data.existAdmin.email));
    return result;
  });
};

const useLoginAdmin = () => {
  return useMutation(LoginAdmin);
};

export { LoginAdmin, useLoginAdmin };
