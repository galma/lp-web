import { axios } from "@/libs/axios";

import { OperationResponse, StringOperationResponse } from "@/types/operation";

export const generateRandomString =
  async (): Promise<StringOperationResponse> => {
    const result = await axios.get("/operation/random-string");
    return result?.data;
  };
