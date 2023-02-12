import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import MyProfile from "./pages/MyProfile/MyProfile";
import About from "./pages/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate to={"/login"} />} />
        {/* <Route path='*' element={<h3>404 Page not found</h3>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
