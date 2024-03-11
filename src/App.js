import React, { Component } from "react";
import Home from "./pages/HomePage";
import DetailPatient from "./pages/DetailPatient";
import MenuBar from "./components/MenuBar";
import RegisterPatient from "./pages/RegisterPatient";
import RegisterDoctor from "./pages/RegisterDoctor";
import List from "./pages/List";
import './index.css';
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import ApproveDoctor from "./pages/ApproveDoctor";
import RevokeAccess from "./pages/RevokeAccess";
import EditPatient from "./pages/EditPatient";
import EditDoctor from "./pages/EditDoctor";
import MakeAppointment from "./pages/MakeAppointment";
import DetailDoctor from "./pages/DetailDoctor";
class App extends Component {
  render(){
  return (
    <div>
      <MenuBar/>
      
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/dashboard" element={<DashBoard/>} exact></Route>
        <Route path="/registerPatient" element={<RegisterPatient/>} exact></Route>
        <Route path="/registerDoctor" element={<RegisterDoctor/>} exact></Route>
        <Route path="/list" element={<List/>} exact></Route>
        <Route path="/recordPatient/:address" element={<DetailPatient/>} exact></Route>
        <Route path="/approveDoctor" element={<ApproveDoctor/>} exact></Route>
        <Route path="/revokeAccess" element={<RevokeAccess/>} exact></Route>
        <Route path="/editPatient" element={<EditPatient/>} exact></Route>
        <Route path="/editDoctor" element={<EditDoctor/>} exact></Route>
        <Route path="/makeAppointment" element={<MakeAppointment/>} exact></Route>
        <Route path="/recordDoctor/:address" element={<DetailDoctor/>} exact></Route>
      </Routes>
    </div>
  );
}
}

export default App;
