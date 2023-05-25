import Login from "@/pages/login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
// const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<div>register</div>} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
  {
    path: "*",
    element: <Navigate to="/auth/login" replace />,
  },
];
