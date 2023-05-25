import { axios } from "@/libs/axios";

import { AuthUser } from "@/types/auth";

export const getUser = (): Promise<AuthUser> => {
  debugger;
  return axios.get("/auth/me");
};
