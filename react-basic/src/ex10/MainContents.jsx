import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContents(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        // 100vw, 100vh 하면 화면에 꽉 차게 만들 수 있음
        width: "100vw ",
        height: "100vh",
        padding: "1.5rem",
        // 배경색
        backgroundColor: theme == "light" ? "white" : "black",
        // 글씨색
        color: theme == "light" ? "black" : "white",
      }}
    >
      <p>안녕하세요. 테마 변경이 가능한 웹사이트 입니다.</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default MainContents;
