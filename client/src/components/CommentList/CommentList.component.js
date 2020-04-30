import React from "react";

const CommentList = ({ comments }) => {
  const renderComments = comments.map(item => {
    console.log(item);
    return <li key={item.id}>{item.content}</li>;
  });

  return <ul>{renderComments}</ul>;
};

export default CommentList;
