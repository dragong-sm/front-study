import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function Login() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div style={{ paddingTop: "2rem" }}>
      {showButton && (
        <button onClick={() => setShowMessage(true)} size="lg">
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div
          ref={nodeRef}
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <div>Animated alert message</div>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <button variant="primary" onClick={() => setShowMessage(false)}>
            Close
          </button>
        </div>
      </CSSTransition>
    </div>
  );
}
