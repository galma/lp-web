import { axios } from "@/libs/axios";

import { AuthUser } from "@/types/auth";

export const getUser = async (): Promise<AuthUser> => {
  const response = await axios.get("/users/me");
  return response?.data;
};
