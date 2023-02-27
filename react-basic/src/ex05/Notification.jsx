import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fintSzie: 16,
  },
};

// 클래스형 컴포넌트
class Notification extends React.Component {
  constructor(props) {
    super(props);
    // state에 아무런 데이터도 가지고 있지 않음
    this.state = {};
  }

  //   컴포넌트 생명주기 확인을 위한 log
  componentDidMount() {
    console.log(`${this.props.id} Mount() called.`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} Update() called.`);
  }

  //   마지막에 notifications를 비워야 unmount
  componentWillUnmount() {
    console.log(`${this.props.id} UnMount() called.`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
