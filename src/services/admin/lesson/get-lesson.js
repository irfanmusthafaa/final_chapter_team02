import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const GetLesson = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await httpAdmin
    .get(_key)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return null;
    });

  return data.data;
};

const useGetLesson = (options) => {
  return useQuery([API_ENDPOINT.DATA_LESSON_ADMIN, options], GetLesson);
};

export { GetLesson, useGetLesson };
