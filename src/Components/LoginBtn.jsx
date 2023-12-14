import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginBtn() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="loginControl">
      <button onClick={handleButtonClick} className="loginBtn">
        로그인
      </button>
    </div>
  );
}
