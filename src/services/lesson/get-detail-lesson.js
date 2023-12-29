// useClassDetailQuery.js

import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";

const fetchDetailLesson = async (classCode,idLesson) => {
  try {
    const { data } = await http.get(`${API_ENDPOINT.DATA_LESSON}/${classCode}/${idLesson}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const useLessonDetailQuery = (classCode,idLesson) => {
  return useQuery([API_ENDPOINT.DATA_CLASS, classCode, idLesson], () => fetchDetailLesson(classCode, idLesson));
}

export { fetchDetailLesson, useLessonDetailQuery };

// const addRating = async (input, classCode) => {
//   return await http.post(`${API_ENDPOINT.ADD_RATING}/${classCode}`, input);

// };