import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Dashboard = React.lazy(() => import("@/pages/dashboard/Dashboard"));
const Operations = React.lazy(() => import("@/pages/operations/Operations"));

const ProtectedRoutesWrapper = () => {
  return <Outlet />;
};

export const protectedRoutes = [
  {
    path: "app/*",
    element: <ProtectedRoutesWrapper />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "operations", element: <Operations /> },
      { path: "*", element: <Navigate to="/app" /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/app" replace />,
  },
];
