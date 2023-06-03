import { axios } from "@/libs/axios";

import { UserResponse } from "@/types/auth";

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = async (
  data: LoginCredentialsDTO
): Promise<UserResponse> => {
  const result = await axios.post("/users/sign-in", data);
  return result?.data;
};
