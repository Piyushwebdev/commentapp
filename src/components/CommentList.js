// src/components/CommentList.js
import React from "react";
import { useState } from "react";
const CommentList = ({ post,index }) => {
  const [showComment,setShowComment]=useState(false)
  return (
    <div
      key={post?.id}
      style={{ cursor: "pointer" }}
      onClick={() => setShowComment(!showComment)}
    >
      <h4 style={{ textTransform: "capitalize"}}>{index+1}. {post?.name}</h4>
      {showComment ? (
        <div
          className="comment-list"
          style={{
            overflowY: "scroll",
            maxHeight: "2.5rem",
            paddingBlock: "0.9rem",
            lineHeight:"1.45rem",
            marginLeft:"40%",
            paddingRight: "2rem",
            paddingLeft:"4rem",
            textAlign: "right",
            backgroundColor: "gray",
            borderTopLeftRadius:"8px",
            borderBottomLeftRadius:"8px",
            textTransform:"capitalize"
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
