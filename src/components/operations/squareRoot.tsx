import { squareRoot } from "@/api/operation/squareRoot";
import {
  NumericOperationResponse,
  OneNumberOperationDTO,
} from "@/types/operation";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  number: number;
}

const Multiplication: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const mutation = useMutation<
    NumericOperationResponse,
    unknown,
    OneNumberOperationDTO
  >(squareRoot);

  const onSubmit = async (data: FormData) => {
    const dto: OneNumberOperationDTO = {
      number: Number(data.number),
    };

    const result = await mutation.mutateAsync(dto);
    debugger;
  };

  const validateValidValues = (value: number) => {
    if (Number(value) < 0)
      return "Square root of negative numbers doesn't exist. Please use a number equal or greater than 0";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Value:</label>
        <Controller
          name="number"
          control={control}
          rules={{
            required: true,
            validate: (value: number) => validateValidValues(value),
          }}
          render={({ field }) => <input type="number" {...field} />}
        />
        {errors.number && <p>{errors.number.message}</p>}{" "}
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

export default Multiplication;
