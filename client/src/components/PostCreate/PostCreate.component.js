import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onFormSubmit = async event => {
    event.preventDefault();

    await axios.post("http://posts.com/posts/create", { title });
    setTitle("");
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} className="form-control" onChange={text => setTitle(text.target.value)} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default PostCreate;
