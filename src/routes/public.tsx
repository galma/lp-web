import Login from "@/pages/login/Login";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

const AuthRoutesWrapper = () => {
  return <Outlet />;
};

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
