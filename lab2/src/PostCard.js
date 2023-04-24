import React, { useRef } from "react";

function PostCard({ post, handleColorChange }) {
  const titleRef = useRef(null);

  return (
    <div className="post-card">
      <h3 ref={titleRef}>{post.title}</h3>
      <p>{post.body}</p>
      <div className="post-card-overlay">
        <button className="post-card-button" onClick={() => handleColorChange(titleRef)}>
          Change color
        </button>
      </div>
    </div>
  );
}

export default PostCard;
