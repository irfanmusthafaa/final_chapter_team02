import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import http from "../../utils/http";
import { useLocation } from "react-router-dom";

const NewPassword = async (input, token) => {
  return await http.post(`${API_ENDPOINT.AUTH_RESET_PASSWORD}?token=${token}`, input);
};

const useNewPasswordMutation = () => {
  const location = useLocation();
  const TokenPassword = location.state ? location.state.tokenNewPassword : "";
  console.log(TokenPassword, "ituuuuu");
  return useMutation((input) => NewPassword(input, TokenPassword));
};

export { NewPassword, useNewPasswordMutation };
