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
  number: number;
};

export type TwoNumberOperationDTO = {
  number1: number;
  number2: number;
};
