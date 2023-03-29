import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const navigate = useNavigate();
  return (
    <div className="page">
      UserInfo
      <button onClick={() => navigate("/main")}>main!</button>
      <button onClick={() => navigate("/userannual")}>userannual!</button>
      <button onClick={() => navigate("/")}>logout!</button>
    </div>
  );
}
