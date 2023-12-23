// useClassDetailQuery.js

import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";

const joinMyClass = async (classCode) => {
  try {
    const { data } = await http.get(`${API_ENDPOINT.JOIN_MY_CLASS}/${classCode}`);
     console.log("masuk ke join ini juga gaksalah")
    return data.data;
  } catch (error) {
    console.error("Error join class :", error);
    throw error;
  }
}

const useJoinClassQuery = (classCode) => {
    console.log("masuk ke join")
  return useQuery([API_ENDPOINT.DATA_CLASS, classCode], () => joinMyClass(classCode));
}

export { joinMyClass, useJoinClassQuery };
