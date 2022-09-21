import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Post from "./Post";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addPosts } from "../pizzaSlice";
import Todo from "./Todo";

export default function Feed() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState();
  const getpost = () => {
    axios
      .get('/api/todos')
      .then((res) => {
        if (res.data) {
          setPosts(res.data)
          dispatch(addPosts(posts))
          console.log(res.data);

        }
      })
      .catch((err) => console.log(err))
  }

  const deletePost = (id) => {
    axios
    .delete(`/api/todos/${id}`)
    .then((res) => {
        if (res.data) {
          getpost();
        }
    })
    .catch((err) => console.log(err));
};

  useEffect(() => {
    // setPosts(pizza.posts);
    getpost()
  }, [])
  // const pizza = useSelector((state) => state.pizza);
  // console.log(pizza);
  
 

  return (
    <Box flex={4} p={2}>
       <Todo/>
      <div>
        <h1>
          {posts?.map((p, index) => {
            return (
              <Post
              id={p.id}
              deletePost={deletePost}
                key={index}
                dogName={p.action}
                description={p.description}
                image={p.image}
              />
            );
          })}
        </h1>
      </div>
      <Post />
    </Box>
  );
}
