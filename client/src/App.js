import { Box } from "@mui/system";
import React from "react";
import "./app.css";
import Home from "./pages/home/Home";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};
export default App;
