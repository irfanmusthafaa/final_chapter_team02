import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const UpdateBank = async (id, input) => {
  return await httpAdmin.put(`${API_ENDPOINT.DATA_BANK}/${id}`, input);
};

export { UpdateBank };
