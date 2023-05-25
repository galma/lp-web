import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutesWrapper = () => {
  return <Outlet />;
};

const basePath = "/app";
export const protectedRoutes = [
  {
    path: basePath,
    element: <ProtectedRoutesWrapper />,
    children: [
      { path: `${basePath}/test`, element: <div>test 123</div> },
      { path: `${basePath}/`, element: <div>Dashboard</div> },
      { path: `${basePath}/*`, element: <Navigate to="/app" /> },
    ],
  },
];
