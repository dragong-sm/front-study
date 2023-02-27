import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>안녕, 리액트 !</h1>
      {/* Date함수의 toLocalTimeString을 통해 현재 시간 가져옴 */}
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
