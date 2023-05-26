import { axios } from "@/libs/axios";

import { OperationResponse } from "@/types/operation";

export type DivisionOperationDTO = {
  number1: number;
  number2: number;
};

export const divide = async (
  data: DivisionOperationDTO
): Promise<OperationResponse> => {
  const result = await axios.post("/operation/divide", data);
  return result?.data;
};
