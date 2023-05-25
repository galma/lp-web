import Dashboard from "@/pages/dashboard/Dashboard";
import Operations from "@/pages/operations/Operations";
import { Navigate, Outlet } from "react-router-dom";

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
