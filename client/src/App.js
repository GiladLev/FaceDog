import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import { Add } from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";
const App = () => {

  return (
    <Box>
      
      {/* <Register/> */}
     
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
};
export default App;
