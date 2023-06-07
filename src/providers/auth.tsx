import {
  LoginCredentialsDTO,
  loginWithEmailAndPassword,
} from "@/api/auth/login";
import { AuthUser, UserResponse } from "@/types/auth";
import { configureAuth } from "react-query-auth";
import storage from "@/libs/storage";
import {
  RegisterCredentialsDTO,
  registerWithEmailAndPassword,
} from "@/api/auth/register";
import { getUser } from "@/api/auth/getUser";
import { Spinner } from "@/components/spinner/Spinner";

async function handleUserResponse(data: UserResponse) {
  const { token, user } = data;
  storage.setToken(token);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    try {
      const data = await getUser();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return null;
}

async function login(data: LoginCredentialsDTO): Promise<AuthUser | null> {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  userFn: loadUser,
  loginFn: login,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  },
};

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth(authConfig);
