import { add } from "@/api/operation/add";
import Addition from "@/components/operations/addition";
import ArithmeticOperation from "@/components/operations/arithmeticOperation";
import Division from "@/components/operations/division";
import Multiplication from "@/components/operations/multiplication";
import RandomString from "@/components/operations/randomString";
import SquareRoot from "@/components/operations/squareRoot";
import Subtraction from "@/components/operations/subtraction";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

const Operations: React.FC = () => {
  enum Operations {
    Addition = "addition",
    Subtraction = "subtraction",
    Multiplication = "multiplication",
    Division = "division",
    SquareRoot = "squareRoot",
    RandomString = "randomString",
  }

  type OperationOption = {
    type: Operations;
    description: string;
    component: JSX.Element;
  };

  const options: OperationOption[] = [
    {
      type: Operations.Addition,
      description: "Addition",
      component: (
        <ArithmeticOperation
          operation={add}
          operationName="Addition"
          requiresTwoNumbers={true}
        />
      ),
    },
    {
      type: Operations.Subtraction,
      description: "Subtraction",
      component: <Subtraction />,
    },
    {
      type: Operations.Multiplication,
      description: "Multiplication",
      component: <Multiplication />,
    },
    {
      type: Operations.Division,
      description: "Division",
      component: <Division />,
    },
    {
      type: Operations.SquareRoot,
      description: "Square Root",
      component: <SquareRoot />,
    },
    {
      type: Operations.RandomString,
      description: "Random String Generation",
      component: <RandomString />,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<OperationOption | null>(
    null
  );

  const handleOperationSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const option = options.find((opt) => opt.type === value);
    setSelectedOption(option || null);
  };

  return (
    <>
      <h1>Operations</h1>
      <div>
        <select onChange={handleOperationSelection}>
          {options.map((option) => (
            <option key={option.type} value={option.type}>
              {option.description}
            </option>
          ))}
        </select>
      </div>
      <div>{selectedOption && selectedOption.component}</div>
    </>
  );
};

export default Operations;
