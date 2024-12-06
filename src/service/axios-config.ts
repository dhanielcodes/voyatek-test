import axios from "axios";

export const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

Axios.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

    config.headers['x-rapidapi-host'] = process.env.NEXT_PUBLIC_RAPID_HOST;
    config.headers['x-rapidapi-key'] = process.env.NEXT_PUBLIC_RAPID_KEY;
    
  return config;
});

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      "Request failed with status code 500" === error.message ||
      error?.response?.status >= 500
    ) {
      return Promise.reject({
        ...error,
        message: "It's not you, it's us. Try again later.",
      });
    } else {
      return Promise.reject(error);
    }
  }
);
