import React, { useState, useEffect } from "react";
import Web3 from "web3";
import RecordHealthCareData from "../contracts/RecordHealthCareData.json";
import { Input, Container } from "../assets/List.styles";
import { useMediaQuery } from "react-responsive";
import {useNavigate} from "react-router-dom";
const addressContract = "0xdB1c78983b2E6F74bd00CdC5DEf1D5075deD6f44";

const GetDataComponent = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [patientList, setPatientList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [query, setQuery] = useState('');
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const navigate = useNavigate();
  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        // Use MetaMask provider
        const newWeb3 = new Web3(window.ethereum);
        try {
          // Request account access
          await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setWeb3(newWeb3);
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        // Use legacy web3 provider
        setWeb3(new Web3(window.web3.currentProvider));
      } else {
        console.error(
          "No Ethereum provider detected. Please install MetaMask."
        );
      }
    };

    // Initialize Web3
    initWeb3();
  }, []);

  useEffect(() => {
    const initContract = async () => {
      if (web3) {
        const newContract = new web3.eth.Contract(
          RecordHealthCareData.abi,
          addressContract
        );
        setContract(newContract);
      } else {
        console.log("No Web3 provider detected.");
      }
    };

    // Initialize the smart contract
    initContract();
  }, [web3]);

  // get data patient from smart contract
  useEffect(() => {
    const fetchPatients = async () => {
      if (contract) {
        try {
          // Call the getPatients function from the smart contract
          const patients = await contract.methods.getPatients().call();
          setPatientList(patients);
        } catch (error) {
          console.error("Error fetching patient data:", error);
        }
      }
    };

    // Fetch patient data
    fetchPatients();
  }, [contract]);

  // get data doctor from smart contract
  useEffect(() =>{
    const fetchDoctors = async () => {
      if (contract) {
        try {
          // Call the getPatients function from the smart contract
          const doctors = await contract.methods.getDoctors().call();
          setDoctorList(doctors);
        } catch (error) {
          console.error("Error fetching doctor data:", error);
        }
      }
    };
    fetchDoctors();
  }, [contract]);

  //function to shorten Ethereum address
  const shortenAddress = (address) => {
    if (isSmallScreen && address && address.length > 14) {
      return `${address.slice(0, 6)}...${address.slice(-8)}`;
    }
    return address;
  };

  // Filter patients based on search input
  const filteredPatients = patientList.filter((patientAddress) =>
  patientAddress.toLowerCase().includes(query.toLowerCase())
);
 // Filter doctors based on search input
 const filteredDoctors = doctorList.filter((doctorAddress) =>
 doctorAddress.toLowerCase().includes(query.toLowerCase())
);

const viewRecord = (address) => {
  navigate(`/record/${address}`);
};
  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
            <Container className="container">
                <h2 className="animate__backInUp">Medical Record List</h2>
                <Input type="text" placeholder="Type here!" value={query} onChange={(e) => setQuery(e.target.value)}></Input>
          
                <div className="grid grid-cols-1 m-auto gap-4 w-full justify-center justify-items-center items-center">
                    <h3>Patient List</h3> {/* Đây có lẽ là phần bị thiếu trong mã của bạn */}
                    {filteredPatients.map((patientAddress, index) => (
                        <div key={index} className="flex hover:border-[black] hover:shadow-lg p-6 gap-x-2 w-full max-w-3xl bg-teal-100 rounded-lg">
                            <img src="https://img.freepik.com/free-vector/sick-man-wearing-protective-face-mask_53876-97821.jpg?w=740&t=st=1706283195~exp=1706283795~hmac=91fc49f58a58b1032153edf49d2165d3a5251aed25cca00e8a4b4e32b4c3dd4e" alt="" className="h-20 w-20 rounded-full" />
                            <div className="flex flex-column items-center">
                                <h3 className="text-sm md:text-xl font-black">{shortenAddress(patientAddress)}</h3>
                                <button onClick={() => viewRecord(patientAddress)} className="mt-3 text-lg md:text-xl lg:text-2xl">View Record</button>
                            </div>
                        </div>
                    ))}
                </div>
       
            </Container>

            <Container className="container">
                <div className="grid grid-cols-1 m-auto gap-4 w-full justify-center justify-items-center items-center">
                    <h3>Doctor List</h3> 
                    {filteredDoctors.map((doctorAddress, index) => (
                        <div key={index} className="flex hover:border-[black] hover:shadow-lg p-6 gap-x-2 w-full max-w-3xl bg-cyan-50 rounded-lg">
                            <img src="https://i.pinimg.com/564x/64/98/d1/6498d17eb4d44ea066029972208dbc70.jpg" alt="" className="h-20 w-20 rounded-full" />
                            <div className="flex flex-column items-center">
                                <h3 className="text-sm md:text-xl font-black">{shortenAddress(doctorAddress)}</h3>
                                <button onClick={() => viewRecord(doctorAddress)} className="mt-3 text-lg md:text-xl lg:text-2xl">View Record</button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        
        </div>
  );
};

export default GetDataComponent;
