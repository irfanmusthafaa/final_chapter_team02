import axios from "axios";
import { CookiesKey, CookiesStorage } from "./cookies";

const http = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${CookiesStorage.get(CookiesKey.AuthToken) ? CookiesStorage.get(CookiesKey.AuthToken) : ""}`,
  };
  return config;
});

export default http;
