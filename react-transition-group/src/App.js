import "./App.css";
import { Outlet, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./styles/styles.css";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  const [isSide, setIsSide] = useState(true);
  const currentOutlet = useOutlet();
  useEffect(() => {
    if (currentOutlet === <Login />) {
      setIsSide(false);
    }
  }, []);

  return (
    <>
      {/* {isSide && <SideBar />} */}
      {/* <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={600}
          classNames="page"
          unmountOnExit
        > */}
      <Outlet />
      {/* </CSSTransition>
      </SwitchTransition> */}
    </>
  );
}

export default App;
