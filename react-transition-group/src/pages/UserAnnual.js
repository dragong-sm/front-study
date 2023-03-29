import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserAnnual() {
  const navigate = useNavigate();
  return (
    <div className="page">
      UserAnnual
      <button onClick={() => navigate("/userinfo")}>userinfo!</button>
      <button onClick={() => navigate("/main")}>main!</button>
      <button onClick={() => navigate("/")}>logout!</button>
    </div>
  );
}
