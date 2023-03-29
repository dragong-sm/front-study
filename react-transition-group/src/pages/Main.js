import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="page">
      Main
      <button onClick={() => navigate("/userannual")}>userannual!</button>
      <button onClick={() => navigate("/userinfo")}>userinfo!</button>
      <button onClick={() => navigate("/")}>logout!</button>
    </div>
  );
}
