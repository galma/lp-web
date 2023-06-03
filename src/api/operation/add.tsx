import { axios } from "@/libs/axios";

import {
  NumericOperationResponse,
  TwoNumberOperationDTO,
} from "@/types/operation";

export const add = async (
  data: TwoNumberOperationDTO
): Promise<NumericOperationResponse> => {
  const result = await axios.post("/operations/add", data);
  return result?.data;
};
