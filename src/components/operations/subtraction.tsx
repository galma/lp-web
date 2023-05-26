import { substract } from "@/api/operation/substract";
import {
  NumericOperationResponse,
  TwoNumberOperationDTO,
} from "@/types/operation";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  number1: number;
  number2: number;
}

const Subtraction: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const mutation = useMutation<
    NumericOperationResponse,
    unknown,
    TwoNumberOperationDTO
  >(substract);

  const onSubmit = async (data: FormData) => {
    const dto: TwoNumberOperationDTO = {
      number1: Number(data.number1),
      number2: Number(data.number2),
    };

    const result = await mutation.mutateAsync(dto);
    debugger;
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
          defaultValue={0}
          rules={{ required: true }}
          render={({ field }) => <input type="number" {...field} />}
        />
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

export default Subtraction;
