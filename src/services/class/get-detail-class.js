// useClassDetailQuery.js

import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";

const fetchDetailClass = async (classCode) => {
  try {
    const { data } = await http.get(`${API_ENDPOINT.DATA_CLASS}/${classCode}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const useClassDetailQuery = (classCode) => {
  return useQuery([API_ENDPOINT.DATA_CLASS, classCode], () => fetchDetailClass(classCode));
}

export { fetchDetailClass, useClassDetailQuery };
