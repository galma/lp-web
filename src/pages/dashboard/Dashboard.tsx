import { useLogout } from "@/providers/auth";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const logout = useLogout();
  const navigate = useNavigate();

  const onLogout = () => {
    console.log("logout");
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
    <div>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
