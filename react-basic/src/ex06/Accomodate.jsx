import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useCounter from "./UseCounter";

// 최대 수용 인원
const MAX_CAPACITY = 10;

function Accomodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // 컴포넌트가 업데이트 될때마다 호출
  useEffect(() => {
    console.log("======");
    // console.log("first useEffect() is called");
    console.log(`isFull : ${isFull}`);
  });

  //   count 값이 변화할 때마다 호출 됨
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      {/* 
            isFull 초기값  : false
            입장 버튼 비활성화(disabled = true) / 활성화(disabled = false)
        */}
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={increaseCount}>퇴장</button>

      {/* isFull이 true가 되면 MAX_CPACITY 초과이므로 보여줌 */}
      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accomodate;
