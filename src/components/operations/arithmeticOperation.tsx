import { UserContext } from "@/contexts/UserContext";
import {
  NumericOperationFormData,
  NumericOperationResponse,
  OneNumberOperationDTO,
  OperationProps,
  TwoNumberOperationDTO,
} from "@/types/operation";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";

const ArithmeticOperation: React.FC<OperationProps> = ({
  operation,
  operationName,
  validation,
  requiresTwoNumbers,
  customValidationNumber1,
  customValidationNumber2,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NumericOperationFormData>();

  const { userId } = useContext(UserContext);
  debugger;

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
      userId,
      number1: Number(data.number1),
      ...(requiresTwoNumbers && {
        number2: Number(data.number2),
      }),
    };

    await mutation.mutateAsync(dto);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 space-y-4">
      <p className="text-lg font-semibold">Operation: {operationName}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <label htmlFor="number1" className="mr-2">
            Number 1:
          </label>
          <Controller
            name="number1"
            defaultValue={0}
            control={control}
            //@ts-ignore
            rules={{
              required: true,
              ...(customValidationNumber1 && {
                validate: customValidationNumber1,
              }),
            }}
            render={({ field }) => (
              <input
                id="number1"
                type="number"
                {...field}
                className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            )}
          />
          {errors.number1 && (
            <p className="text-red-500">{errors.number1.message}</p>
          )}
        </div>

        {requiresTwoNumbers && (
          <div className="flex items-center">
            <label htmlFor="number2" className="mr-2">
              Number 2:
            </label>
            <Controller
              name="number2"
              control={control}
              defaultValue={0}
              //@ts-ignore
              rules={{
                required: true,
                ...(customValidationNumber2 && {
                  validate: customValidationNumber2,
                }),
              }}
              render={({ field }) => (
                <input
                  id="number2"
                  type="number"
                  {...field}
                  className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              )}
            />
            {errors.number2 && (
              <p className="text-red-500">{errors.number2.message}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit {operationName} Operation
        </button>

        {mutation.isSuccess && (
          <div className="mt-4">
            <p>Operation completed successfully!</p>
            <p>Result: {mutation.data?.result}</p>
            <p>Remaining Balance: {mutation.data?.remainingBalance}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ArithmeticOperation;
