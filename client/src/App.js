import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import "./app.css";
import { Add } from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
const App = () => {
  const [dogName, setDogName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([]);
  const addPost = ()=>{
    const newPost=[...posts]
    newPost.push({
     dogName:dogName,
     image:image,
     description:description
    })
    setPosts(newPost)
    console.log(posts);
   }
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed  dogName={dogName}
        setDogName={setDogName}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        posts={posts}
        setPosts={setPosts}
        addPost={addPost} />
        <Rightbar />
      </Stack>
      <Add
        dogName={dogName}
        setDogName={setDogName}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        posts={posts}
        setPosts={setPosts}
        addPost={addPost}
      />
    </Box>
  );
};
export default App;
