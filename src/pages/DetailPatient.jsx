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

const RecordDetailOfPatient = () => {
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
        const patientDetails = await record.methods
          .searchPatientDemographic(address)
          .call({ from: accounts[0] });
        const medical = await record.methods
          .searchPatientMedical(address)
          .call({ from: accounts[0] });
        const appointment = await record.methods
          .searchAppointment(address)
          .call({ from: accounts[0] });
        const creationDate = await record.methods
          .searchAppointmentDate(address)
          .call({ from: accounts[0] });
        if (appointment[0].includes("0x00000000000")) appointment[0] = "";

        const profilePic =
          patientDetails[3] === "Male"
            ? "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            : "https://cdn-icons-png.flaticon.com/512/3135/3135789.png";

        const data = {
          ic: patientDetails[0],
          name: patientDetails[1],
          phone: patientDetails[2],
          gender: patientDetails[3],
          dob: patientDetails[4],
          height: patientDetails[5],
          weight: patientDetails[6],

          houseaddr: medical[0],
          bloodgroup: medical[1],
          allergies: medical[2],
          emergencyName: medical[3],
          emergencyContact: medical[4],

          doctoraddr: appointment[0],
          doctorname: appointment[1],
          date: appointment[2],
          time: appointment[3],
          diagnosis: appointment[6],
          description: appointment[5],
          status: appointment[4],
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
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <h3 className="text-xl font-bold text-gray-500 mb-6">
              EMERGENCY CONTACT
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <b className="text-gray-500">Name</b>
                <div className="font-semibold">{recordData.emergencyName}</div>
              </div>
              <div>
                <b className="text-gray-500">Phone</b>
                <div className="font-semibold">
                  {recordData.emergencyContact}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-500 mb-6">
              PERSONAL DETAILS
            </h3>
            <div className="grid grid-cols-4 gap-4  ">
              <div>
                <b className="text-gray-500">Full Name</b>
                <div className="font-semibold">{recordData.name}</div>
              </div>
              <div>
                <b className="text-gray-500">Birthdate</b>
                <div className="font-semibold">{recordData.dob}</div>
              </div>
              <div>
                <b className="text-gray-500">Height</b>
                <div className="font-semibold">{recordData.height} cm</div>
              </div>
              <div>
                <b className="text-gray-500">Weight</b>
                <div className="font-semibold">{recordData.weight} kg</div>
              </div>
            </div>
            <div>
              <b className="text-gray-500">Address</b>
              <div className="font-semibold">{recordData.houseaddr}</div>
            </div>
            <h3 className="text-xl font-bold text-gray-500 mt-6 mb-6">
              MEDICAL DETAILS
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <b className="text-gray-500">Blood Group</b>
                <div className="font-semibold">{recordData.bloodgroup}</div>
              </div>
              <div>
                <b className="text-gray-500">Allergies</b>
                <div className="font-semibold">No allergies</div>
              </div>
              <div>
                <b className="text-gray-500">Medication</b>
                <div className="font-semibold">
                  Medicines have not been updated
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <h3 className="text-xl font-bold text-gray-500 mb-6">
              APPOINTMENT
            </h3>
            {recordData.doctoraddr ? (
              <div>
                <b className="text-gray-500">Doctor Address</b>
                <div className="font-semibold">{recordData.doctoraddr}</div>
              </div>
            ) : (
              <div>
                <b className="text-gray-500 text-center">Doctor Address</b>
                <div className="font-semibold">No Appointment</div>
              </div>
            )}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <b className="text-gray-500">Doctor Name</b>
                <div className="font-semibold">
                  {recordData.doctorname || "No Appointment"}
                </div>
              </div>
              <div>
                <b className="text-gray-500">Date</b>
                <div className="font-semibold">
                  {recordData.date || "No Appointment"}
                </div>
              </div>
              <div>
                <b className="text-gray-500">Time</b>
                <div className="font-semibold">
                  {recordData.time || "No Appointment"}
                </div>
              </div>
            </div>
            <div>
                <b className="text-gray-500">Description</b>
                <div className="font-semibold">
                  {recordData.description || "No Appointment"}
                </div>
              </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <b className="text-gray-500">Diagnosis</b>
                <div className="font-semibold">
                  {recordData.diagnosis || "No Appointment"}
                </div>
              </div>
              <div>
                <b className="text-gray-500">Status</b>
                <div className="font-semibold">
                  {recordData.status || "No Appointment"}
                </div>
              </div>
              <div>
                <b className="text-gray-500">Creation Date</b>
                <div className="font-semibold">
                  {convertUnixTimestampToDateTime(recordData.creationDate) || "No Appointment"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderDisplay()}</div>;
};

export default RecordDetailOfPatient;
