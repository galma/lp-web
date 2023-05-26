import { add } from "@/api/operation/add";
import React from "react";
import ArithmeticOperation from "./arithmeticOperation";

const Addition: React.FC = () => {
  return (
    <ArithmeticOperation
      operation={add}
      operationName="Addition"
      requiresTwoNumbers={true}
    />
  );
};

export default Addition;
