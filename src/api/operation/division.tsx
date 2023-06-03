import { axios } from "@/libs/axios";

import {
  NumericOperationResponse,
  TwoNumberOperationDTO,
} from "@/types/operation";

export const divide = async (
  data: TwoNumberOperationDTO
): Promise<NumericOperationResponse> => {
  const result = await axios.post("/operations/divide", data);
  return result?.data;
};
