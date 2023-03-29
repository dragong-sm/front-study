import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div
      className="page"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "red",
        zIndex: "10",
      }}
    >
      Signup
      <button
        style={{ width: "200px", backgroundColor: "pink", zIndex: "10" }}
        onClick={() => navigate("/")}
      >
        login!
      </button>
    </div>
  );
}
