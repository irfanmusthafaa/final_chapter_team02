import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useMutation } from "@tanstack/react-query";



const paymentClass = async ({ input, classCode }) => {
  console.log('ini data input:');
  input.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  console.log('classCode:', classCode);

  const apiURL = `${API_ENDPOINT.PAYMENT_USER}/${classCode}`;
  // return await http.post(apiURL, input);

  try {
    const response = await http.post(apiURL, input);

    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const usePaymentClassQuery = () => {
  return useMutation(paymentClass);
};

export { paymentClass, usePaymentClassQuery };

