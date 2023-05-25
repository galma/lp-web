import { useRoutes } from "react-router-dom";
import { useUser } from "@/providers/auth";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import Landing from "@/pages/landing/Landing";

export const AppRoutes = () => {
  const user = useUser();

  const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = user?.data ? protectedRoutes : publicRoutes;

  const element = useRoutes([...commonRoutes, ...routes]);

  return <>{element}</>;
};
