import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutesWrapper = () => {
  return <Outlet />;
};

const Login = React.lazy(() => import("@/pages/login/Login"));

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutesWrapper />,
    children: [
      { path: `register`, element: <div>register</div> },
      { path: `login`, element: <Login /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
