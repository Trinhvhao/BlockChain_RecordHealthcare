import React from "react";
import { Link } from "react-router-dom";
import web3 from "web3";
import "../assets/MenuBar.css";
import img from '../assets/images/blockchain.png';
const MenuBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="title">
      <img src={img} width={48} height={48} alt="" /> Record HealthCare Data
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/recordlist">Record List</Link>
        </li>
        <li>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              <Link to="/doctor">Doctor</Link>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/editDoctor" className="text-black">
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link to="/makeAppoinment" className="text-black">
                  Make Appointment
                </Link>
              </li>
              <li>
                <Link to="/updateAppoinment" className="text-black">
                  Update Appointment
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          {" "}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className=" m-1">
              <Link to="/patient">Patient</Link>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/editProfile" className="text-black">
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link to="/aprroveDoctor" className="text-black">
                  Allow Access
                </Link>
              </li>
              <li>
                <Link to="/revokeAccess" className="text-black">
                  Revoke Access
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          {" "}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className=" m-1">
              <Link to="/register">Register</Link>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/registerDoctor" className="text-black">
                  Doctor
                </Link>
              </li>
              <li>
                <Link to="/registerPatient" className="text-black">
                  Patient
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default MenuBar;
