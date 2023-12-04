import Cookies from "universal-cookie";

const cookies = new Cookies();

export const CookiesKey = {
  AuthToken: "MyToken",
  User: "user",
};

const CookiesOptions = {
  path: "/",
  secure: true,
};

export const CookiesStorage = {
  set: (key, data, options) => {
    return cookies.set(key, data, { ...CookiesOptions, ...options });
  },
  get: (key, options) => {
    return cookies.get(key, { ...CookiesOptions, ...options });
  },
  remove: (key, options) => {
    return cookies.remove(key, { ...CookiesOptions, ...options });
  },
};
