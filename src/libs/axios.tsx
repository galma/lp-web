import Axios, { InternalAxiosRequestConfig } from "axios";
import storage from "@/libs/storage";
import { configuration } from "@/config";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

const axios = Axios.create({
  baseURL: configuration.API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);

export { axios };
