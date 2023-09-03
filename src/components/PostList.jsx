// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import {TextField} from '@mui/material';
const PostList = ({ filteredPosts,filter,setFilter}) => {
  return (
    <div style={{height:"100vh",overflowY:"scroll",paddingBlock:"2.5rem"}}>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <TextField id="outlined-basic" type="number" label="Filter by postId" variant="outlined" onChange={(e) => setFilter(e.target.value)}
    />
    </div>
    <div className="post-list" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
