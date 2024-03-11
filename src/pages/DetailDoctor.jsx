import React, { useEffect, useState } from "react";
import contractABI from "../contracts/RecordHealthCareData.json";
import Web3 from "web3";
import { useNavigate, useParams } from "react-router-dom";
import {
  PyramidLoader,
  Wrapper,
  Side1,
  Side2,
  Side3,
  Side4,
  Shadow,
} from "../assets/Detail.styles";
const contractAddress = "0xf2e3c8e8119582D480934D95Aa0716637D4B8715";
const RecordDetailOfDoctor = () => {
  const navigate = useNavigate();
  const [recordData, setRecordData] = useState(null);
  const { address } = useParams();
    // Convert Unix timestamp to Date Time
    function convertUnixTimestampToDateTime(unixTimestamp) {
      // Tạo một đối tượng Date từ unix timestamp (milisecond)
      const dateTime = new Date(unixTimestamp * 1000);
      // Lấy thông tin về ngày, tháng và năm
      const date = dateTime.getDate();
      const month = dateTime.getMonth() + 1; // Tháng bắt đầu từ 0
      const year = dateTime.getFullYear();
  
      // Lấy thông tin về giờ, phút và giây
      const hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();
      const seconds = dateTime.getSeconds();
  
      // Format lại chuỗi ngày giờ
      const formattedDateTime = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  
      return formattedDateTime;
  }
  useEffect(() => {
    async function fetchData() {
      const tempWeb3 = new Web3(window.ethereum);
      const record = new tempWeb3.eth.Contract(
        contractABI.abi,
        contractAddress
      );
      const accounts = await tempWeb3.eth.getAccounts();
      try {
        const doctorDetails = await record.methods
          .searchDoctor(address)
          .call({ from: accounts[0] });
        const creationDate = await record.methods.searchDoctorDate(address).call({from:accounts[0]});
        const profilePic =
          doctorDetails[3] === "Male"
            ? "https://cdn-icons-png.flaticon.com/128/387/387561.png"
            : "https://cdn-icons-png.flaticon.com/128/387/387569.png";
        const data = {
          ic: doctorDetails[0],
          name: doctorDetails[1],
          phone: doctorDetails[2],
          gender: doctorDetails[3],
          dob: doctorDetails[4],
          qualification: doctorDetails[5],
          major: doctorDetails[6],
          profilePic,
          creationDate
        };

        setRecordData(data);
      } catch (err) {
        alert("You don't have permission to view this account");
        navigate("/list");
      }
    }
    fetchData();
  }, [address, navigate]);
  const renderDisplay = () => {
    if (!recordData) {
      return (
        <div className="flex flex-column justify-center items-center w-100 h-100 bg-gray-900">
          <PyramidLoader>
            {" "}
            <Wrapper>
              <Side1 />
              <Side2 />
              <Side3 />
              <Side4 />
              <Shadow></Shadow>
            </Wrapper>
          </PyramidLoader>
          <span className="text-3xl font-bold text-teal-300 animate-pulse">
            You don't have permission to view this record
          </span>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-3 gap-4 max-w-4xl m-auto pt-5">
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="mb-6 rounded-full mx-auto w-24 h-24"
              src={recordData.profilePic}
              alt="hehe"
            ></img>
            <h2 className="text-3xl font-bold mb-6 text-center">
              {recordData.name}
            </h2>
            <div className="grid gap-4 ">
              <div>
                <b className="text-gray-500">IC</b>
                <div className="font-bold">{recordData.ic}</div>
              </div>
              <div>
                <b className="text-gray-500">Phone</b>
                <div className="font-bold">{recordData.phone}</div>
              </div>
              <div>
                <b className="text-gray-500">Gender</b>
                <div className="font-bold">{recordData.gender}</div>
              </div>
              <div>
                <b className="text-gray-500">Date of Birth</b>
                <div className="font-semibold">{recordData.dob}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-500 mb-6">
              Qualification
            </h3>
            <div className="grid grid-cols-2 gap-4 p">  <div>
                <b className="text-gray-500">Gender</b>
                <div className="font-bold">{recordData.gender}</div>
              </div>
              <div>
                <b className="text-gray-500">Date of Birth</b>
                <div className="font-semibold">{recordData.dob}</div>
              </div></div>
          
            <div className="grid grid-cols-1 gap-4  ">
              <div>
                <b className="text-gray-500">Highest Qualification</b>
                <div className="font-semibold">{recordData.qualification}</div>
              </div>
              <div>
                <b className="text-gray-500">Major</b>
                <div className="font-semibold">{recordData.major}</div>
              </div>
            </div>
            <div>
              <b className="text-gray-500">Creation Date</b>
              <div className="font-semibold">
                {convertUnixTimestampToDateTime(recordData.creationDate) }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
  };
  return <div>{renderDisplay()}</div>;
};
export default RecordDetailOfDoctor;