import React, { useState, useEffect } from "react";

import "./CSS/Posts.css";
import Skeleton from "../Skeleton/Skeleton";
import Glow from "../Skeleton/Glow/Glow";

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      // DELAY THE CONTENT
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    }, 5000);
  }, []);

  return (
    <div className="posts">
      <h2>Posts</h2>

      {posts &&
        posts.map((post) => (
          <article className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}

      {!posts &&
        [...Array(5)].map((x, i) => (
          <div className="wrapper">
            <div key={i} className="postsskel">
              <Skeleton type="title" />
              <Skeleton type="text" />
              <Skeleton type="text" />
              <Skeleton type="text" />
            </div>
            <Glow />
          </div>
        ))}
    </div>
  );
}

export default Posts;
