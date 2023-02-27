import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "성민",
    comment: "방가워요 ~",
  },
  {
    name: "드래공",
    comment: "리액트 공부중 ..",
  },
  {
    name: "sungmin",
    comment: "It's very Funny !",
  },
];

function CommentList(props) {
  return (
    <div>
      {/* <Comment name={"성민"} comment={"방가워요 !!"} />
      <Comment name={"안농"} comment={"리액트 공부 꿀잼 ^0^!!"} /> */}

      {/* 동적으로 보여주기 : map 함수 */}
      {comments.map((comment) => {
        // return 반환
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
