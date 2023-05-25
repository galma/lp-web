import { axios } from "@/libs/axios";

import { OperationResponse } from "@/types/operation";

export type AddOperationDTO = {
  number1: number;
  number2: number;
};

export const add = async (
  data: AddOperationDTO
): Promise<OperationResponse> => {
  const result = await axios.post("/operation/add", data);
  return result?.data;
};
