import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import http from "../../utils/http";

const ActivateAccount = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_ACTIVATE_ACCOUNT, input).then((result) => {
    return result;
  });
};

const useActivateAccount = () => {
  return useMutation(ActivateAccount);
};

export { ActivateAccount, useActivateAccount };
