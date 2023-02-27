import React from "react";
// react-dom 대신 react-dom/client 사용하기
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CommentList from "./ex04/CommentList";
import NotificationList from "./ex05/NotificationList";
import Accomodate from "./ex06/Accomodate";
import LandingPage from "./ex07/LandingPage";
import SignUp from "./ex08/SignUp";
import ProfileCard from "./ex09/ProfileCard";
import DarkOrLight from "./ex10/DarkOrLight";
import Blocks from "./ex11/Blocks";

// setInterval 함수를 사용해 1000ms 마다 clock 컴포넌트를 root div에 렌더링

// react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18
// 18부터는 ReactDOM.render 지원하지 않음 !! (Use createRoot instead)

// render 수정 >> createRoot
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
