import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const paymentClass = async (input, classCode) => {
  // console.log('ini data input:');
  // input.forEach((value, key) => {
  //   console.log(`${key}: ${value}`);
  // });
  // console.log('classCode:', classCode);
  return await http.post(`${API_ENDPOINT.PAYMENT_USER}/${classCode}`, input);

};


export { paymentClass};

