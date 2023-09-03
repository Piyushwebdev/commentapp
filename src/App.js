import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PostList from './components/PostList';
import CommentList from './components/CommentList';


function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter,setFilter]=useState("")
  const [comments, setComments] = useState([]);
  const [filteredPosts,setFilteredPosts]=useState([]);
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/comments")
  //       .then((response) => {
  //         setAllposts(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching comments:', error);
  //       });
  // },[])

  useEffect(() => {
    if (selectedPost) {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selectedPost.id}`)
        .then(response => {
          setComments(response.data);
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    }
  }, [selectedPost]);
  useEffect(() => {
    if (filter) {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${filter}`)
        .then(response => {
          setFilteredPosts(response.data);
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    }
    else{
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        setFilteredPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
    }
  }, [filter]);

  return (
    <div className="app">
      <PostList filteredPosts={filteredPosts} onSelectPost={setSelectedPost} filter={filter} setFilter={setFilter}/>
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
