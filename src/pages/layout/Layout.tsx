import { useLogout } from "@/providers/auth";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const logout = useLogout();
  const navigate = useNavigate();

  const onLogout = () => {
    logout.mutate(
      {},
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-blue-500 font-medium text-lg focus:outline-none"
          >
            LP Challenge
          </button>
          <button
            onClick={onLogout}
            className="text-red-500 hover:text-red-600 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-6">{children}</main>
    </div>
  );
};

export default Layout;
