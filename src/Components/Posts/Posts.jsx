import React, { useState, useEffect } from "react";

import "./CSS/Posts.css";

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

      {!posts && <div>loading...</div>}
    </div>
  );
}

export default Posts;
