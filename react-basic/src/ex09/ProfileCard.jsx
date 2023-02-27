import React from "react";
import Card from "./Card";

function ProfileCard(props) {
  return (
    <Card
      // props로 제목 전달
      title="Sungmin"
      // props로 색 전달
      backgroundColor="skyblue"
    >
      {/* children */}
      <p>안녕하세요, 성민입니다.</p>
      <p>저는 리액트를 사용해 개발중입니다.</p>
    </Card>
  );
}

export default ProfileCard;
