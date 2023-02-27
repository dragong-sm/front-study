import React from "react";

// css 설정
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContatiner: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commnetText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://avatars.githubusercontent.com/u/117700630?v=4"
          style={styles.image}
        ></img>
      </div>

      <div style={styles.contentContatiner}>
        {/* props 사용하기 */}
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commnetText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;
