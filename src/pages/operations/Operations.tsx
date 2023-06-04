import Addition from "@/components/operations/addition";
import Division from "@/components/operations/division";
import Multiplication from "@/components/operations/multiplication";
import RandomString from "@/components/operations/randomString";
import SquareRoot from "@/components/operations/squareRoot";
import Subtraction from "@/components/operations/subtraction";
import { ChangeEvent, useState } from "react";

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
      component: <Addition />,
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
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">Operations</h1>
      <div className="flex items-center justify-center">
        <select
          onChange={handleOperationSelection}
          className="block appearance-none w-full border border-gray-300 bg-white px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        >
          {options.map((option) => (
            <option key={option.type} value={option.type}>
              {option.description}
            </option>
          ))}
        </select>
      </div>
      <div>{selectedOption && selectedOption.component}</div>
    </div>
  );
};

export default Operations;
