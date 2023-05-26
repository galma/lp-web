export type NumericOperationResponse = OperationResponse & {
  result: number;
};

export type StringOperationResponse = OperationResponse & {
  result: string;
};

type OperationResponse = {
  remainingBalance: number;
};

export type OneNumberOperationDTO = {
  number1: number;
};

export type TwoNumberOperationDTO = {
  number1: number;
  number2?: number;
};

export interface NumericOperationFormData {
  number1: number;
  number2?: number;
}

export interface OperationProps {
  operation: (
    dto: TwoNumberOperationDTO | OneNumberOperationDTO
  ) => Promise<NumericOperationResponse>;
  operationName: string;
  validation?: (data: NumericOperationFormData) => boolean;
  requiresTwoNumbers: boolean;
}
