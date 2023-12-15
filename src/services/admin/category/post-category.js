import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const AddCategory = async (input) => {
  return await httpAdmin.post(API_ENDPOINT.DATA_CATEGORY, input);
};

const useAddCategory = () => {
  return useMutation(AddCategory);
};

export { AddCategory, useAddCategory };
