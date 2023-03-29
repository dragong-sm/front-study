import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import App from "./App";
import UserInfo from "./pages/UserInfo";
import UserAnnual from "./pages/UserAnnual";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { index: true, element: <Login /> },
      { path: "/main", element: <Main /> },
      { path: "/signup", element: <Signup /> },
      { path: "/userinfo", element: <UserInfo /> },
      { path: "/userannual", element: <UserAnnual /> },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
