import React, { Component } from "react";
import Home from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";
import MenuBar from "./components/MenuBar";
import RegisterPatient from "./pages/RegisterPatient";
import './index.css';
import { Route, Routes } from "react-router-dom";
class App extends Component {
  render(){
  return (
    <div>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/dashboard" element={<DashBoard/>} exact></Route>
        <Route path="/registerPatient" element={<RegisterPatient/>} exact></Route>
      </Routes>
    </div>
  );
}
}

export default App;
