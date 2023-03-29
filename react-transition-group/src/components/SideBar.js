import React from "react";
import { useLocation } from "react-router-dom";

export default function SideBar() {
  const location = useLocation();

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        position: "absolute",
      }}
    >
      {location.pathname !== "/" && <button>hello</button>}
    </div>
  );
}
