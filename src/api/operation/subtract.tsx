import { axios } from "@/libs/axios";

import {
  NumericOperationResponse,
  TwoNumberOperationDTO,
} from "@/types/operation";

export const subtract = async (
  data: TwoNumberOperationDTO
): Promise<NumericOperationResponse> => {
  const result = await axios.post("/operation/subtract", data);
  return result?.data;
};
