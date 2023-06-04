import { useLogout, useUser } from "@/providers/auth";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const logout = useLogout();
  const navigate = useNavigate();
  const user = useUser();

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
    <div>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
      <div>
        {/* Welcome {user.data?.firstName} {user.data?.lastName} */}
        Welcome
      </div>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate("/operations");
            }}
          >
            New Operation
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/user-records");
            }}
          >
            User Records
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
