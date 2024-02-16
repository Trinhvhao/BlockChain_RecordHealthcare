// src/components/About.js
import contractABI from "../contracts/RecordHealthCareData.json";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import TransactionsTable from "../components/TransactionTable";
const DashBoard = () => {
  const [patientCount, setPatientCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const contractAddress = "0xdB1c78983b2E6F74bd00CdC5DEf1D5075deD6f44";
  const Web3 = require("web3");
  useEffect(() => {
    async function fetchData() {
      try {
        const tempWeb3 = new Web3(window.ethereum);
        const contract = new tempWeb3.eth.Contract(
          contractABI.abi,
          contractAddress
        );
        const accounts = await tempWeb3.eth.getAccounts();

        const patientCount = await contract.methods.getPatientCount().call();
        setPatientCount(patientCount);

        // Lấy số lượng bác sĩ từ contract
        const doctorCount = await contract.methods.getDoctorCount().call();
        setDoctorCount(doctorCount);
      } catch (error) {
        console.error("Error fetching data from contract:", error);
        // Xử lý lỗi ở đây
      }
    }

    fetchData();
  }, []); // dependencies rỗng để useEffect chỉ chạy một lần khi component được mount

  return (
    <div>
      <div className="container mt-5">
        <div className="main-top  flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-3">Healthcare's data</h1>
          <button className="btn btn-neutral">Get data</button>
        </div>
        <div className="users grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card w-100 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://wallpapercave.com/dwp1x/wp2968489.jpg"
                alt="Doctor"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Number of Doctors
                <div className="badge bg-blue-600">
                  <i
                    style={{ color: "white" }}
                    className="fa-solid fa-people-group"
                  ></i>
                </div>
              </h2>
              <p className="text-center text-5xl">
                <CountUp start={0} end={doctorCount} duration={15}></CountUp>
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">People</div>
              </div>
            </div>
          </div>
          <div className="card w-100 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1563233269-7e86880558a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Patient"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Number of Patients
                <div className="badge bg-emerald-600">
                  <i
                    style={{ color: "white" }}
                    className="fa-solid fa-people-group"
                  ></i>
                </div>
              </h2>
              <p className="text-center text-5xl">
                <CountUp start={0} end={patientCount} duration={10}></CountUp>
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">People</div>
              </div>
            </div>
          </div>
          <div className="card w-100 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Appoinment"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Number of Appoinment
                <div className="badge bg-violet-600">
                  <i
                    style={{ color: "white" }}
                    className="fa-solid fa-people-group"
                  ></i>
                </div>
              </h2>
              <p className="text-center text-5xl">
                <CountUp start={0} end={74} duration={15}></CountUp>
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">People</div>
              </div>
            </div>
          </div>
          <div className="card w-100 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/verified-certified-affirm-authorised-approve-concept_53876-127946.jpg?w=740&t=st=1708076117~exp=1708076717~hmac=5aacf6287b3481bfcec74a0525455ee15aa1edf61268a817c7971e78d04af39b"
                alt="Permission"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Number of Permission
                <div className="badge bg-indigo-600">
                  <i
                    style={{ color: "white" }}
                    className="fa-solid fa-people-group"
                  ></i>
                </div>
              </h2>
              <p className="text-center text-5xl">
                <CountUp start={0} end={74} duration={15}></CountUp>
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">People</div>
              </div>
            </div>
          </div>
        </div>
        <section className=" mt-8">
          <div className="overflow-x-auto">
           
             <TransactionsTable/>
           
          </div>
        </section>
      </div>
      {/* <h2>Số lượng bệnh nhân: {patientCount}</h2>
        <h2>Số lượng bác sĩ: {doctorCount}</h2> */}
    </div>
  );
};

export default DashBoard;
