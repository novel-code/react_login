import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Friends from "./pages/Friends/Friends";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='profile' element={<Profile />} />
          <Route path='about' element={<About />} />
          <Route path='friends' element={<Friends />} />
        </Route>
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate to={"/login"} />} />
        {/* <Route path='*' element={<h3>404 Page not found</h3>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
