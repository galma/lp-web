import { useUser } from "@/providers/auth";
import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";

const RoutesWrapper = () => {
  return <Outlet />;
};

const Login = React.lazy(() => import("@/pages/login/Login"));
const Dashboard = React.lazy(() => import("@/pages/dashboard/Dashboard"));
const Landing = React.lazy(() => import("@/pages/landing/Landing"));
const Operations = React.lazy(() => import("@/pages/operations/Operations"));

export const publicRoutes = ({
  isAutenticated,
}: {
  isAutenticated: boolean;
}) => [
  {
    path: "/",
    element: <RoutesWrapper />,
    children: [
      {
        path: ``,
        element: !isAutenticated ? (
          <Landing />
        ) : (
          <Navigate to="/dashboard" replace />
        ),
      },
      { path: `register`, element: <div>register</div> },
      {
        path: `login`,
        element: !isAutenticated ? (
          <Login />
        ) : (
          <Navigate to="/dashboard" replace />
        ),
      },
    ],
  },
];

export const privateRoutes = ({
  isAutenticated,
}: {
  isAutenticated: boolean;
}) => [
  {
    path: "/",
    element: <RoutesWrapper />,
    children: [
      {
        path: `/operations`,
        element: isAutenticated ? (
          <Operations />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
      {
        path: `/dashboard`,
        element: isAutenticated ? (
          <Dashboard />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
    ],
  },
];

const AppRoutes = () => {
  const { data: user } = useUser();

  const element = useRoutes([
    ...publicRoutes({ isAutenticated: !!user }),
    ...privateRoutes({ isAutenticated: !!user }),
  ]);

  return element;
};

export default AppRoutes;
