import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const AddBank = async (input) => {
  return await httpAdmin.post(API_ENDPOINT.DATA_BANK, input);
};

const useAddBank = () => {
  return useMutation(AddBank);
};

export { AddBank, useAddBank };
