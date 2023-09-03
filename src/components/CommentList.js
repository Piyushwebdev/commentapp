// src/components/CommentList.js
import React from "react";
import { useState } from "react";
const CommentList = ({ post }) => {
  const [showComment,setShowComment]=useState(false)
  return (
    <div
      key={post?.id}
      style={{ cursor: "pointer" }}
      onClick={() => setShowComment(!showComment)}
    >
      <h4> {post?.name}</h4>
      {showComment ? (
        <div
          className="comment-list"
          style={{
            overflowY: "scroll",
            maxHeight: "4rem",
            paddingBlock: "0.75rem",
            paddingInline: "2rem",
            textAlign: "right",
            backgroundColor: "gray",
          }}
        >
          {post?.body}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommentList;
