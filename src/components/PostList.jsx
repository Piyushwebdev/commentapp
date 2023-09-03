// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
const PostList = ({ filteredPosts,onSelectPost,filter,setFilter}) => {
  const [showComment,setShowComment]=useState(false)
  return (
    <div className="post-list">
      <input
        type="number"
        placeholder="Filter by postId"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div>
        {filteredPosts.map(post => (
          <CommentList setShowComment={setShowComment} showComment={showComment} post={post}/>
        ))}
      </div>
    </div>
  );
};

export default PostList;
