import React from "react";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-center text-2xl font-bold">
          Welcome to LP Challenge
        </h2>
        <div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </button>
        </div>
        <div>
          <button
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
            onClick={() => navigate("/sign-up")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
