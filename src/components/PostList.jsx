// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
const PostList = ({ filteredPosts,filter,setFilter}) => {
  return (
    <div style={{paddingBlock:"2.5rem",paddingInline:"20%"}}>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"2rem"}}>
          <input style={{padding:"0.75rem"}} id="outlined-basic" type="number" placeholder="Filter by postId" onChange={(e) => setFilter(e.target.value)}
    />
    </div>
    <div className="post-list" style={{display:"flex",justifyContent:"center",alignItems:"center",overflowY:"scroll",scrollbarWidth: "thin",height:"80vh"}}>
      <div>

        {filteredPosts.map((post,index) => (
          <CommentList post={post} index={index}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PostList;
