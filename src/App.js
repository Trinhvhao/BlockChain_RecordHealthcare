import React, { useState } from "react";
import Home from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";
import MenuBar from "./components/MenuBar";
import './index.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/dashboard" element={<DashBoard/>} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
