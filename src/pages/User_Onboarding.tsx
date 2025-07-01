import React from "react";
import { useNavigate } from "react-router-dom";

const User_Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const handleFinishOnboarding = () => {
    // ✅ Navigate to dashboard (you can change the route)
    navigate("/Admin_Support");
  };

  return (
    <div className="container mt-5">
      <h1>Provide Hotel Configuration</h1>
      <button className="btn btn-success mt-3" onClick={handleFinishOnboarding}>
        Finish Onboarding
      </button>
    </div>
  );
};

export default User_Onboarding;
