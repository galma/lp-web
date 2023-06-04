import { RegisterCredentialsDTO } from "@/api/auth/register";
import { UserContext } from "@/contexts/UserContext";
import { useRegister } from "@/providers/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface SignupFormInputs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const { handleSignIn } = useContext(UserContext);

  const signup = useRegister();

  const navigate = useNavigate();

  const onSubmit = (data: SignupFormInputs) => {
    signup.mutate(
      {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      } as RegisterCredentialsDTO,
      {
        onSuccess: (data: any) => {
          handleSignIn({ id: data?.id, balance: data.remainingBalance });
          navigate("/app");
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white rounded-lg shadow p-6 space-y-4"
    >
      <div>
        <label className="block text-gray-700 font-bold">Email</label>
        <input
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className={`w-full border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded py-2 px-4 mb-2`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label className="block text-gray-700 font-bold">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          className={`w-full border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded py-2 px-4 mb-2`}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-gray-700 font-bold">First Name</label>
        <input
          type="text"
          {...register("firstName", {
            required: "First name is required",
          })}
          className={`w-full border ${
            errors.firstName ? "border-red-500" : "border-gray-300"
          } rounded py-2 px-4 mb-2`}
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">
            {errors.firstName.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-gray-700 font-bold">Last Name</label>
        <input
          type="text"
          {...register("lastName", {
            required: "Last name is required",
          })}
          className={`w-full border ${
            errors.lastName ? "border-red-500" : "border-gray-300"
          } rounded py-2 px-4 mb-2`}
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm">
            {errors.lastName.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Sign Up
      </button>

      {signup?.error && (
        <div style={{ color: "red" }}>
          {JSON.stringify(signup.error, null, 2)}
        </div>
      )}
    </form>
  );
};

export default Signup;
