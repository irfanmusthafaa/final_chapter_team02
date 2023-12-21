import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const AddClass = async (input) => {
  return await httpAdmin.post(API_ENDPOINT.DATA_CLASS, input);
};

const useAddClass = () => {
  return useMutation(AddClass);
};

export { AddClass, useAddClass };
