import React from "react";
import { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("M");

  // 이름 변경 함수
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  // 성별 변경
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`이름 : ${name}, 성별 : ${gender}`);
    // 새로고침 막기
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 16 }}>
      <label>
        이름 :{" "}
        <input type="text" value={name} onChange={handleChangeName}></input>
      </label>
      <br />
      <label>
        성별 :{" "}
        <select value={gender} onChange={handleChangeGender}>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
