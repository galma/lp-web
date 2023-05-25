import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutesWrapper = () => {
  return <Outlet />;
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <ProtectedRoutesWrapper />,
    children: [
      { path: "/test/*", element: <div>test 123</div> },
      { path: "/", element: <div>Dashboard</div> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
