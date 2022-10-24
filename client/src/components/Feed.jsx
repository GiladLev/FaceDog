import { Box, Stack, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async() =>{
      const res = await publicRequest.get("posts/timeline/63552ca4f832c86ebc8f237c")
      setPosts(res.data);
      console.log(posts);
      setLoading(false)
    }
    fetchPosts()
  }, [])
  

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {posts.map((p)=>{
            return(
            <Post key={p._id} post={p}/>
            )
          })}
        </>
      )}
    </Box>
  );
};

export default Feed;