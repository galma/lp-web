import {
  LoginCredentialsDTO,
  loginWithEmailAndPassword,
} from "@/api/auth/login";
import { AuthUser, UserResponse } from "@/types/auth";
import { configureAuth } from "react-query-auth";

// import { Spinner } from '@/components/Elements';
// import {
//   loginWithEmailAndPassword,
//   getUser,
//   registerWithEmailAndPassword,
//   UserResponse,
//   LoginCredentialsDTO,
//   RegisterCredentialsDTO,
//   AuthUser,
// } from '@/features/auth';
import storage from "@/libs/storage";
import {
  RegisterCredentialsDTO,
  registerWithEmailAndPassword,
} from "@/api/auth/register";
import { getUser } from "@/api/auth/getUser";

async function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
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
        ATR
        {/* <Spinner size="xl" /> */}
      </div>
    );
  },
};

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth(authConfig);

// export const { AuthProvider, useAuth } = configureAuth<
//   AuthUser | null,
//   unknown,
//   LoginCredentialsDTO,
//   RegisterCredentialsDTO
// >(authConfig);
