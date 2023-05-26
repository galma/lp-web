import { multiply } from "@/api/operation/multiplication";
import React from "react";
import ArithmeticOperation from "./arithmeticOperation";

const Multiplication: React.FC = () => {
  return (
    <ArithmeticOperation
      operation={multiply}
      operationName="Multiplication"
      requiresTwoNumbers={true}
    />
  );
};

export default Multiplication;
