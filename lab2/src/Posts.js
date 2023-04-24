import React from "react";
import PostCard from './PostCard'
function Posts({ posts }) {
  const handleColorChange = (titleRef) => {
    titleRef.current.style.color =
      titleRef.current.style.color === "red" ? "black" : "red";
  };

  return (
    <div className="posts">
      <h2 style={{ color: "steelblue" }}>Posts</h2>
      <div className="post-cards">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} handleColorChange={handleColorChange} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
