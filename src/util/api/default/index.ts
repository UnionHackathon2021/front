import axios from "axios";

const BASE_URL = "http://49.50.172.121:8080";

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: BASE_URL,
    responseType: "json",
  });
  return request;
};
