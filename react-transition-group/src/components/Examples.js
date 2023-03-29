import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { routes } from "..";

export default function Example() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <>
      <Navbar bg="light">
        <Nav className="mx-auto">
          {routes.map((route) => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          // nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {(state) => (
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
