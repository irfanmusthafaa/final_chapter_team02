import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const addRating = async (input, classCode) => {
  return await http.post(`${API_ENDPOINT.ADD_RATING}/${classCode}`, input);

};


export { addRating };

