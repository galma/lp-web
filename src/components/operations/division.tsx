import { DivisionOperationDTO, divide } from "@/api/operation/division";
import {
  MultiplicationOperationDTO,
  multiply,
} from "@/api/operation/multiplication";
import { OperationResponse } from "@/types/operation";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  number1: number;
  number2: number;
}

const Division: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const mutation = useMutation<
    OperationResponse,
    unknown,
    DivisionOperationDTO
  >(divide);

  const onSubmit = async (data: FormData) => {
    const dto: DivisionOperationDTO = {
      number1: Number(data.number1),
      number2: Number(data.number2),
    };

    const result = await mutation.mutateAsync(dto);
    debugger;
  };

  const validateNonZeroValue = (value: number) => {
    if (Number(value) === 0)
      return "Division by 0 doesn't exist. Please use a number different than 0";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Value 1:</label>
        <Controller
          name="number1"
          control={control}
          defaultValue={0}
          rules={{ required: true }}
          render={({ field }) => <input type="number" {...field} />}
        />
      </div>

      <div>
        <label>Value 2:</label>
        <Controller
          name="number2"
          control={control}
          rules={{
            required: true,
            validate: (value: number) => validateNonZeroValue(value),
          }}
          render={({ field }) => <input type="number" {...field} />}
        />
        {errors.number2 && <p>{errors.number2.message}</p>}{" "}
        {/* Display the error message */}
      </div>

      <button type="submit">Submit Operation</button>

      {mutation.isSuccess && (
        <div>
          <p>Operation completed successfully!</p>
          <p>Result: {mutation.data?.result}</p>
          <p>Remaining Balance: {mutation.data?.remainingBalance}</p>
        </div>
      )}
    </form>
  );
};

export default Division;