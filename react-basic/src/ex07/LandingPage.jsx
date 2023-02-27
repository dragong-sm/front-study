import React from "react";
import { useState } from "react";
import Toolbar from "./Toobar";

function LandingPage(props) {
  const [isLogin, setIsLogin] = useState(false);

  const onClickLogin = () => {
    setIsLogin(true);
  };

  const onClickLogout = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <Toolbar
        isLogin={isLogin}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>리액트 공부 !</div>
    </div>
  );
}

export default LandingPage;
