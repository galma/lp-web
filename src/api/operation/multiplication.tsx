import { axios } from "@/libs/axios";

import {
  NumericOperationResponse,
  TwoNumberOperationDTO,
} from "@/types/operation";

export const multiply = async (
  data: TwoNumberOperationDTO
): Promise<NumericOperationResponse> => {
  const result = await axios.post("/operations/multiply", data);
  return result?.data;
};
