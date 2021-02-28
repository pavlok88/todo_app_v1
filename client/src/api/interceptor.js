import axios from "axios";
import CONST from "../config/constants";

const http = axios.create({
  baseURL: CONST.BASE_URL,
  //timeout: 10000,
});

// Add a request interceptor
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(CONST.ACCESS_TOKEN_LS_NAME);
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
 export default http;