import { Box, Stack, Skeleton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { publicRequest } from "../requestMethods";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);

  const {user} = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async() =>{
      const res = await publicRequest.get("posts/timeline/63552ca4f832c86ebc8f237c")
      setPosts(res.data);
      setLoading(false)
    }
    fetchPosts()
  }, [isLike])
  

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