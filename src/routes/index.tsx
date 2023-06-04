import { useRoutes } from "react-router-dom";
import { useUser } from "@/providers/auth";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import React from "react";

const Landing = React.lazy(() => import("@/pages/landing/Landing"));

export const AppRoutes = () => {
  const user = useUser();

  const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = !user.data ? publicRoutes : protectedRoutes;

  const element = useRoutes([...commonRoutes, ...routes]);

  return <>{element}</>;
};
