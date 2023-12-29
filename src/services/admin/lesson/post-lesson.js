import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const AddLesson = async (input) => {
  return await httpAdmin.post(API_ENDPOINT.DATA_LESSON_ADMIN, input);
};

const useAddLesson = () => {
  return useMutation(AddLesson);
};

export { AddLesson, useAddLesson };
