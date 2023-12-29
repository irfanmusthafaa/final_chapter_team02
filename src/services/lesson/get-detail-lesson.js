// useClassDetailQuery.js

import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";

const fetchLessonDetail = async (idLesson) => {
  try {
    const { data } = await http.get(`${API_ENDPOINT.DATA_LESSON}/${idLesson}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const useLessonDetailQuery = (idLesson) => {
  return useQuery([API_ENDPOINT.DATA_LESSON, idLesson], () => fetchLessonDetail (idLesson));
}

export { fetchLessonDetail , useLessonDetailQuery };

