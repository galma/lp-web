import { axios } from "@/libs/axios";

import { OperationResponse } from "@/types/operation";

export type MultiplicationOperationDTO = {
  number1: number;
  number2: number;
};

export const multiply = async (
  data: MultiplicationOperationDTO
): Promise<OperationResponse> => {
  const result = await axios.post("/operation/multiply", data);
  return result?.data;
};
