// useClassDetailQuery.js

import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";

const fetchPresentaseLesson = async (classCode,idLesson) => {
  try {
    const { data } = await http.get(`${API_ENDPOINT.DATA_LESSON_PRESENTASE}/${classCode}/${idLesson}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const usePresentaseLessonQuery = (classCode,idLesson) => {
  return useQuery([API_ENDPOINT.DATA_LESSON_PRESENTASE, classCode, idLesson], () => fetchPresentaseLesson (classCode, idLesson));
}

export { fetchPresentaseLesson , usePresentaseLessonQuery };

