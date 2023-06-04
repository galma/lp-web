import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">Dashboard</h1>
      <div className="text-center">
        {/* Welcome {user.data?.firstName} {user.data?.lastName} */}
        Welcome
      </div>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => {
              navigate("/operations");
            }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            New Operation
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/user-records");
            }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            User Records
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
