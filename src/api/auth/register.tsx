import { axios } from "@/libs/axios";

import { UserResponse } from "@/types/auth";

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const registerWithEmailAndPassword = async (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  const result = await axios.post("/auth/register", data);
  return result?.data;
};
