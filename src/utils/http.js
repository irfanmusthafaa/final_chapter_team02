import axios from "axios";
import { CookiesKey, CookiesStorage } from "./cookies";

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    // "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  // Dapatkan tipe konten dari konfigurasi permintaan
  const contentType = config.headers["Content-Type"];

  // Jika tipe konten adalah "multipart/form-data", biarkan seperti itu
  if (contentType && contentType.includes("multipart/form-data")) {
    // Tidak perlu menambahkan "Content-Type" di sini
  } else {
    // Jika bukan "multipart/form-data", atur "Content-Type" menjadi "application/json"
    config.headers["Content-Type"] = "application/json";
  }

  config.headers = {
    ...config.headers,
    Authorization: `${CookiesStorage.get(CookiesKey.AuthToken) ? CookiesStorage.get(CookiesKey.AuthToken) : ""}`,
  };
  return config;
});

export default http;
