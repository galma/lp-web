import { generateRandomString } from "@/api/operation/randomString";
import { UserContext } from "@/contexts/UserContext";
import { StringOperationResponse } from "@/types/operation";
import { useMutation } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

const RandomString: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const { userId } = useContext(UserContext);

  const mutation = useMutation<
    StringOperationResponse,
    unknown,
    { userId: string }
  >(generateRandomString);

  const onSubmit = async (data: FormData) => {
    await mutation.mutateAsync({ userId });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 space-y-4">
      <p className="text-lg font-semibold">Operation: Random string</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Random String Operation
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

export default RandomString;
