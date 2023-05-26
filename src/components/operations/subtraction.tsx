import { subtract } from "@/api/operation/subtract";
import React from "react";
import ArithmeticOperation from "./arithmeticOperation";

const Subtraction: React.FC = () => {
  return (
    <ArithmeticOperation
      operation={subtract}
      operationName="Subtract"
      requiresTwoNumbers={true}
    />
  );
};

export default Subtraction;
