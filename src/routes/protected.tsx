import Dashboard from "@/pages/dashboard/Dashboard";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutesWrapper = () => {
  return <Outlet />;
};

const basePath = "/app";
export const protectedRoutes = [
  {
    path: "app/*",
    element: <ProtectedRoutesWrapper />,
    children: [
      { path: ``, element: <Dashboard /> },
      { path: `test`, element: <div>test 123</div> },
      { path: `*`, element: <Navigate to="/app" /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/app" replace />,
  },
];
