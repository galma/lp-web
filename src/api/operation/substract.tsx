import { axios } from "@/libs/axios";

import { OperationResponse } from "@/types/operation";

export type SubstractOperationDTO = {
  number1: number;
  number2: number;
};

export const substract = async (
  data: SubstractOperationDTO
): Promise<OperationResponse> => {
  const result = await axios.post("/operation/substract", data);
  return result?.data;
};
