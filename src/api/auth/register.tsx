import { axios } from "@/libs/axios";

import { UserResponse } from "@/types/auth";

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  return axios.post("/auth/register", data);
};
