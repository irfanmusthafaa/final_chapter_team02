import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const AddChapter = async (input) => {
  return await httpAdmin.post(API_ENDPOINT.DATA_CHAPTER, input);
};

const useAddChapter = () => {
  return useMutation(AddChapter);
};

export { AddChapter, useAddChapter };
