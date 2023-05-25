import Addition from "@/components/operations/addition";
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
      component: <Addition />,
    },
    {
      type: Operations.Subtraction,
      description: "Subtraction",
      component: <div>Addition</div>,
    },
    {
      type: Operations.Multiplication,
      description: "Multiplication",
      component: <div>Addition</div>,
    },
    {
      type: Operations.Division,
      description: "Division",
      component: <div>Addition</div>,
    },
    {
      type: Operations.SquareRoot,
      description: "Square Root",
      component: <div>Addition</div>,
    },
    {
      type: Operations.RandomString,
      description: "Random String Generation",
      component: <div>Addition</div>,
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
