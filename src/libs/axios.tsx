import Axios, { InternalAxiosRequestConfig } from "axios";
import MockAdapter from "axios-mock-adapter";

// import { API_URL } from '@/config';
// import { useNotificationStore } from '@/stores/notifications';
import storage from "@/libs/storage";
import { OperationResponse } from "@/types/operation";

const API_URL = "http://localhost:5000/api";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
// TODO Error handling
// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     const message = error.response?.data?.message || error.message;
//     useNotificationStore.getState().addNotification({
//       type: 'error',
//       title: 'Error',
//       message,
//     });

//     return Promise.reject(error);
//   }
// );

//TODO setup env variable control
if (true) {
  var mock = new MockAdapter(axios, { delayResponse: 1000 });

  mock.onPost("/auth/login").reply(200, {
    jwt: "asdasdasas",
    user: {
      id: "1",
      email: "test@test.com",
      firstName: "Test",
      lastName: "Test",
    },
  });

  mock.onGet("/auth/me").reply(200, {
    id: "1",
    email: "test@test.com",
    firstName: "Test",
    lastName: "Test",
  });

  mock.onPost("/operation/add").reply(200, {
    remainingBalance: 100,
    result: 2.6,
  } as OperationResponse);

  mock.onPost("/operation/substract").reply(200, {
    remainingBalance: 50,
    result: -52.6,
  } as OperationResponse);
}

export { axios };
