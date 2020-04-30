import React, { useState, useEffect } from "react";
import axios from "axios";

import CommentCreate from "../CommentCreate/CommentCreate.component";
import CommentList from "../CommentList/CommentList.component";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = Object.values(posts).map(item => {
    return (
      <div className="card" key={item.id} style={{ width: "30%", marginBottom: "20px" }}>
        <div className="card-body">
          <h3>{item.title}</h3>

          <CommentList comments={item.comments} />
          <CommentCreate postId={item.id} />
        </div>
      </div>
    );
  });

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderPosts}</div>;
};

export default PostList;
