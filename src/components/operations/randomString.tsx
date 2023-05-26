import { generateRandomString } from "@/api/operation/randomString";
import { StringOperationResponse } from "@/types/operation";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

const RandomString: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const mutation = useMutation<StringOperationResponse, unknown, {}>(
    generateRandomString
  );

  const onSubmit = async (data: FormData) => {
    const result = await mutation.mutateAsync({});
    debugger;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p> Generate a random string</p>
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

export default RandomString;
