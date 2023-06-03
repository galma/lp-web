import { axios } from "@/libs/axios";

import { StringOperationResponse } from "@/types/operation";

export const generateRandomString = async ({
  userId,
}: {
  userId: string;
}): Promise<StringOperationResponse> => {
  const result = await axios.post("/operations/random-string", { userId });
  return result?.data;
};
