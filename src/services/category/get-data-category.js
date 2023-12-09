import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const fetchDataCategory = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http.get(_key).then((result) => {
    console.log(result.data.data, "ini datanya");
    return result;
  });

  return data.data;
};

const useCategoryDataQuery = (options) => {
  return useQuery([API_ENDPOINT.DATA_CATEGORY, options], fetchDataCategory);
};

export { fetchDataCategory, useCategoryDataQuery };
