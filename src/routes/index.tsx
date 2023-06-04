import { UserContext } from "@/contexts/UserContext";
import Layout from "@/pages/layout/Layout";
import SignUp from "@/pages/sign-up/SignUp";
import UserRecord from "@/pages/user-records/UserRecords";
import { useUser } from "@/providers/auth";
import React, { useContext } from "react";
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
      {
        path: `sign-up`,
        element: !isAutenticated ? (
          <SignUp />
        ) : (
          <Navigate to="/dashboard" replace />
        ),
      },
      {
        path: `sign-in`,
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
          <Layout>
            <Operations />
          </Layout>
        ) : (
          <Navigate to="/sign-in" replace />
        ),
      },
      {
        path: `/dashboard`,
        element: isAutenticated ? (
          <Layout>
            <Dashboard />
          </Layout>
        ) : (
          <Navigate to="/sign-in" replace />
        ),
      },
      {
        path: `/user-records`,
        element: isAutenticated ? (
          <Layout>
            <UserRecord />
          </Layout>
        ) : (
          <Navigate to="/sign-in" replace />
        ),
      },
    ],
  },
];

const AppRoutes = () => {
  const { data: user } = useUser();

  const { handleSignIn } = useContext(UserContext);

  if (!!user) {
    handleSignIn({ id: user?.id, balance: user.remainingBalance });
  }

  const element = useRoutes([
    ...publicRoutes({ isAutenticated: !!user }),
    ...privateRoutes({ isAutenticated: !!user }),
  ]);

  return element;
};

export default AppRoutes;
