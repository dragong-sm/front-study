import React, { createContext } from "react";

// Context 만들기 (값은 따로 설정 x >> Provider에서 설정예정)
const ThemeContext = createContext();

// Context 이름 확인을 위해 이름 설정
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
