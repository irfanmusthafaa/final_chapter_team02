// import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";

const fetchDataCategory = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http
    .get(_key)
    .then((result) => {
      // console.log(result.data.data, "ini datanya");
      return result.data;
    })
    .catch((error) => {
      // Menghandle error jika terjadi
      console.error("Error fetching data:", error);
      return null; // Atau berikan nilai default sesuai kebutuhan
    });

  return data;
};

const useCategoryDataQuery = (options) => {
  return useQuery([API_ENDPOINT.DATA_CATEGORY, options], fetchDataCategory);
};

export { fetchDataCategory, useCategoryDataQuery };
