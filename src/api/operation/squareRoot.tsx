import { axios } from "@/libs/axios";

import {
  NumericOperationResponse,
  OneNumberOperationDTO,
} from "@/types/operation";

export const squareRoot = async (
  data: OneNumberOperationDTO
): Promise<NumericOperationResponse> => {
  const result = await axios.post("/operations/square-root", data);
  return result?.data;
};
