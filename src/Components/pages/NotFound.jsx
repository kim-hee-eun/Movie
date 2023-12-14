import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const onClickMove = () => {
    navigate("/");
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>해당 페이지를 찾지 못했습니다.</h1>
      <p>주소가 잘못 되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <h3
        style={{ color: "red", fontWeight: "600", cursor: "pointer" }}
        onClick={onClickMove}
      >
        메인 페이지로 이동
      </h3>
    </div>
  );
}
