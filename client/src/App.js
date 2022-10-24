import { Box } from "@mui/system";
import React, { useContext } from "react";
import "./app.css";
import Home from "./pages/home/Home";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const user =JSON.parse(localStorage?.getItem('user'))
  return (
    <Router>
      <Routes>
        {console.log(user)}
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register /> } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};
export default App;
