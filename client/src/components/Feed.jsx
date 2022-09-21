import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import axios from "axios"
import { useEffect } from "react";
export default function Feed({ posts,setPosts }) {
const getpost=()=>{
  axios
  .get('/api/todos')
  .then((res)=>{
    if(res.data){
      setPosts(res.data)
      console.log(res.data);

    }
  })
  .catch((err)=>console.log(err))
}
useEffect(()=>{
  getpost()
},[])
  return (
    <Box flex={4} p={2}>
      {posts.map((post, index) => (
        <Post
          key={index}
          dogName={post.dogName}
          description={post.description}
          image={post.image}
        />
      ))}
    </Box>
  );
}
