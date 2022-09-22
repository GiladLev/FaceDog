
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import { Add } from "./components/Add";
import Association from "./components/Association";
import Feed from "./components/Feed";
import Groups from "./components/Groups";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Rightbar from "./components/Rightbar";
import Service from "./components/Service";
import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";
const App = () => {

  return (
    <Box>


      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/groups" element={<Groups></Groups>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/association" element={<Association></Association>}></Route>
      </Routes>

    </Box>
  );
};
export default App;
