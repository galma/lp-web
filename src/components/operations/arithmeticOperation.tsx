import {
  NumericOperationFormData,
  NumericOperationResponse,
  OneNumberOperationDTO,
  OperationProps,
  TwoNumberOperationDTO,
} from "@/types/operation";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";

const ArithmeticOperation: React.FC<OperationProps> = ({
  operation,
  operationName,
  validation,
  requiresTwoNumbers,
}) => {
  const { handleSubmit, control } = useForm<NumericOperationFormData>();

  const mutation = useMutation<
    NumericOperationResponse,
    unknown,
    TwoNumberOperationDTO | OneNumberOperationDTO
  >(operation);

  const onSubmit = async (data: NumericOperationFormData) => {
    if (validation && !validation(data)) {
      // Custom validation failed, handle the error
      return;
    }

    const dto: OneNumberOperationDTO | TwoNumberOperationDTO = {
      number1: Number(data.number1),
      ...(requiresTwoNumbers && {
        number2: Number(data.number2),
      }),
    };

    await mutation.mutateAsync(dto);
  };

  return (
    <>
      <p>Operation: {operationName}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Number 1:</label>
          <Controller
            name="number1"
            defaultValue={0}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input type="number" {...field} />}
          />
        </div>

        {requiresTwoNumbers && (
          <div>
            <label>Number 2:</label>
            <Controller
              name="number2"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => <input type="number" {...field} />}
            />
          </div>
        )}

        <button type="submit">Submit {operationName} Operation</button>

        {mutation.isSuccess && (
          <div>
            <p>Operation completed successfully!</p>
            <p>Result: {mutation.data?.result}</p>
            <p>Remaining Balance: {mutation.data?.remainingBalance}</p>
          </div>
        )}
      </form>
    </>
  );
};

export default ArithmeticOperation;
