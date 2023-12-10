import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import http from "../../utils/http";
import { useLocation } from "react-router-dom";

const ForgotPasswordOTP = async (input, token) => {
  return await http.post(`${API_ENDPOINT.AUTH_OTP_FORGOT_PASSWORD}?token=${token}`, input);
};

const useForgotPasswordOTPMutation = () => {
  const location = useLocation();
  const TokenPassword = location.state ? location.state.tokenForgotPassword : "";
  console.log(TokenPassword, "iniiiii");
  return useMutation((input) => ForgotPasswordOTP(input, TokenPassword));
};

export { ForgotPasswordOTP, useForgotPasswordOTPMutation };
