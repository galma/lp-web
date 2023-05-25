import { useRoutes } from "react-router-dom";

//import { Landing } from "@/features/misc";
import { useUser } from "@/providers/auth";

// import { protectedRoutes } from './protected';
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  debugger;
  const user = useUser();

  //const commonRoutes = [{ path: "/", element: <Landing /> }];
  const commonRoutes = [{ path: "/", element: <div>landing</div> }];

  //const routes = auth.user ? protectedRoutes : publicRoutes;
  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
