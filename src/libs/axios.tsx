import Axios, { InternalAxiosRequestConfig } from "axios";
import storage from "@/libs/storage";
import { configuration } from "@/config";
import { toast } from "react-toastify";

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

interface Dictionary<T> {
  [Key: string]: T;
}
const errorTypeMessages: Dictionary<string> = {
  NotEnoughBalanceError: "Not Enough Balance",
  UnauthorizedError: "Invalid Credentials",
};

axios.interceptors.response.use(
  (response) => {
    // You can modify the response data here if needed
    return response;
  },
  (error) => {
    // Display toast notification for error
    const errorMessage =
      error.response &&
      error.response.data &&
      Object.keys(errorTypeMessages).some(
        (x) => x === error.response.data?.errorType
      )
        ? errorTypeMessages[error.response.data.errorType]
        : "Something went wrong";

    toast.error(errorMessage);

    throw error;
  }
);

export { axios };
