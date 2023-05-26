import { axios } from "@/libs/axios";

import { OperationResponse } from "@/types/operation";

export type SquareRootOperationDTO = {
  number: number;
};

export const squareRoot = async (
  data: SquareRootOperationDTO
): Promise<OperationResponse> => {
  const result = await axios.post("/operation/square-root", data);
  return result?.data;
};
