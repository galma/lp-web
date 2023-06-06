import { axios } from "@/libs/axios";

import { UserResponse } from "@/types/auth";

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
};

export const registerWithEmailAndPassword = async (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  const result = await axios.post("/users/sign-up", data);
  return result?.data;
};
