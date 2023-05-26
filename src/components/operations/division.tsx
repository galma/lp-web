import { divide } from "@/api/operation/division";
import React from "react";
import ArithmeticOperation from "./arithmeticOperation";

const Division: React.FC = () => {
  const validateNonZeroValue = (value: number) => {
    if (Number(value) === 0)
      return "Division by 0 doesn't exist. Please use a number different than 0";
  };

  return (
    <ArithmeticOperation
      operation={divide}
      operationName="Division"
      requiresTwoNumbers={true}
      customValidationNumber2={validateNonZeroValue}
    />
  );
};

export default Division;
