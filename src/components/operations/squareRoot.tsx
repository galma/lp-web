import { squareRoot } from "@/api/operation/squareRoot";
import React from "react";
import ArithmeticOperation from "./arithmeticOperation";

const SquareRoot: React.FC = () => {
  const validateValidValues = (value: number) => {
    if (Number(value) < 0)
      return "Square root of negative numbers doesn't exist. Please use a number equal or greater than 0";
  };

  return (
    <ArithmeticOperation
      operation={squareRoot}
      operationName="Square Root"
      requiresTwoNumbers={false}
      customValidationNumber1={validateValidValues}
    />
  );
};

export default SquareRoot;
