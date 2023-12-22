import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const UpdatePayment = async (id, input) => {
  return await httpAdmin.put(`${API_ENDPOINT.ADMIN_PAYMENT}/${id}`, input);
};

export { UpdatePayment };
