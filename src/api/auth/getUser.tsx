import { axios } from "@/libs/axios";

import { AuthUser } from "@/types/auth";

export const getUser = async (): Promise<AuthUser> => {
  const response = await axios.get("/auth/me");
  return response?.data;
};
