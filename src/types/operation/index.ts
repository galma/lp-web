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
  userId: string;
};

export type TwoNumberOperationDTO = {
  number1: number;
  number2?: number;
  userId: string;
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
  customValidationNumber1?: (value: number) => void | string;
  customValidationNumber2?: (value: number) => void | string;
  validation?: (data: NumericOperationFormData) => boolean;
  requiresTwoNumbers: boolean;
}
