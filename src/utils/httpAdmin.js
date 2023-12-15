import axios from "axios";
import { CookiesKey, CookiesStorage } from "./cookies";

const httpAdmin = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    // "Content-Type": "application/json",
  },
});

httpAdmin.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
    };
  } else {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };
  }

  config.headers = {
    ...config.headers,
    Authorization: `${CookiesStorage.get(CookiesKey.TokenAdmin) ? CookiesStorage.get(CookiesKey.TokenAdmin) : ""}`,
  };
  return config;
});

export default httpAdmin;
