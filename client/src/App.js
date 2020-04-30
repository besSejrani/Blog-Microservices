import React from "react";

import PostCreate from "./components/PostCreate/PostCreate.component";
import PostList from "./components/PostList/PostList.component";

const App = () => {
  return (
    <div className="container">
      <h1>Create post</h1>
      <PostCreate />
      <hr />
      <h1>PostList</h1>
      <PostList />
    </div>
  );
};

export default App;
