import { Route, Routes } from "react-router-dom";
// const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<div>register</div>} />
      <Route path="login" element={<div>login</div>} />
    </Routes>
  );
};

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
