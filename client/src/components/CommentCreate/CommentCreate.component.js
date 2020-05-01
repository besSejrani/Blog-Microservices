import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onFormSubmit = async event => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            type="text"
            className="form-control"
            onChange={text => setContent(text.target.value)}
          />
        </div>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
