import { useRoutes } from "react-router-dom";

//import { Landing } from "@/features/misc";
import { useUser } from "@/providers/auth";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import Landing from "@/pages/landing/Landing";

export const AppRoutes = () => {
  debugger;
  const user = useUser();

  const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = user?.data
    ? [...protectedRoutes, ...publicRoutes]
    : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
