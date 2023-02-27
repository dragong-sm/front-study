import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import MainContents from "./MainContents";
import ThemeContext from "./ThemeContext";

function DarkOrLight(props) {
  // 기본테마 : light
  const [theme, setTheme] = useState("light");

  // theme이 변경될때마다 테마 변경 ! (불필요 재렌더링 x)
  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    // context를 provider로 감싸줌
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContents />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
