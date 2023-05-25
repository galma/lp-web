import { LoginCredentialsDTO } from "@/api/auth/login";
import { useLogin } from "@/providers/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const login = useLogin();

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    login.mutate(
      {
        email: data.email,
        password: data.password,
      } as LoginCredentialsDTO,
      {
        onSuccess: () => {
          navigate("/app");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Login</button>

      <>
        {login?.error && (
          <div style={{ color: "red" }}>
            {JSON.stringify(login.error, null, 2)}
          </div>
        )}
      </>
    </form>
  );
};

export default Login;
