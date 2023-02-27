import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

function Toolbar(props) {
  const { isLogin, onClickLogin, onClickLogout } = props;

  return (
    <div style={styles.wrapper}>
      {/* 조건부 렌더링 && */}
      {isLogin && <span style={styles.greeting}>환영합니다!</span>}

      {/* 로그인 되어있으면 <로그아웃> 보여줌 */}
      {isLogin ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        // 버튼 클릭시 로그인됨 true
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export default Toolbar;
