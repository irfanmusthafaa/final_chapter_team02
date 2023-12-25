// import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http"
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";


const sendPaymentUser = async ({queryKey}) => {

    const [_key, _params] = queryKey;
    const { data } = await http.post(_key, { params: _params })
    .then((result) => {
        return result;
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        return null; 
    });
  
   
    return data.data;

}

const usePaymentUserQuery = (options) =>{
    
    return useQuery([API_ENDPOINT.PAYMENT_USER, options], sendPaymentUser);
}

export { sendPaymentUser, usePaymentUserQuery };
