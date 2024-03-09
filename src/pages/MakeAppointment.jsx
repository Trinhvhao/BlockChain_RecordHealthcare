import React, { useState } from "react";
import contractABI from "../contracts/RecordHealthCareData.json";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import { Spinner, SpinnerOverlay } from "../assets/index.styles.js";
import {
  FormContainer,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
  H1,
} from "../assets/Appointment.styles.js";
const MakeAppointment = () => {
  const contractAddress = "0xf2e3c8e8119582D480934D95Aa0716637D4B8715";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    patientAddress: "",
    date: "",
    time: "",
    description: "",
    diagnosis: "",
    status: "",
    loading: false,
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const { patientAddress, date, time, description, diagnosis, status } =
      state;

    // Kiểm tra xem các trường cần thiết đã được điền đầy đủ hay không
    if (
      !patientAddress ||
      !date ||
      !time ||
      !description ||
      !diagnosis ||
      !status
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const tempWeb3 = new Web3(window.ethereum);
      const contract = new tempWeb3.eth.Contract(
        contractABI.abi,
        contractAddress
      );
      const accounts = await tempWeb3.eth.getAccounts();
      // Tạo một đối tượng chứa toàn bộ dữ liệu bệnh nhân
      const newAppointmentData = {
        patientAddress,
        date,
        time,
        status,
        description,
        diagnosis,
      };

      // Gửi dữ liệu bệnh nhân tới smart contract
       await contract.methods
        .setAppointment(
          newAppointmentData.patientAddress,
          newAppointmentData.date,
          newAppointmentData.time,
          newAppointmentData.status,
          newAppointmentData.description,
          newAppointmentData.diagnosis
        )
        .send({ from: accounts[0] });
      alert("Appointment created successfully!");
      console.log("Transaction sent successfully");
      navigate("/list");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to create Appointment. Check console for details.");
      alert("You are not a doctor, only doctors can create appointments");
    } finally {
      setLoading(false);

      // Đặt lại tất cả các trường trong state
      setState({
        ...state,
        patientAddress: "",
        date: "",
        time: "",
        description: "",
        diagnosis: "",
        status: "",
      });
    }
  };
  return (
    <div>
      <div className="mt-5">
        <H1 className="text-center ">Make Appointment</H1>
        <FormContainer
          onSubmit={onSubmit}
          className="mx-auto col-lg-6 col-md-12"
        >
          <FormGroup>
            <FormLabel htmlFor="patientAddress">Patient Address</FormLabel>
            <FormInput
              placeholder="0x......."
              id="Email"
              value={state.patientAddress}
              onChange={(event) =>
                setState({ ...state, patientAddress: event.target.value })
              }
            />
          </FormGroup>
          <div className="row">
            <div className="col-md-6">
              <FormGroup>
                <FormLabel htmlFor="date">Date</FormLabel>
                <FormInput
                  type="text"
                  id="date"
                  name="date"
                  value={state.date}
                  onChange={(event) =>
                    setState({ ...state, date: event.target.value })
                  }
                  placeholder="Enter date"
                  required
                />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <FormLabel htmlFor="time">Time</FormLabel>
                <FormInput
                  type="text"
                  id="time"
                  name="time"
                  value={state.time}
                  onChange={(event) =>
                    setState({ ...state, time: event.target.value })
                  }
                  placeholder="Enter time"
                  required
                />
              </FormGroup>
            </div>
          </div>
          <FormGroup>
            <FormLabel htmlFor="description">Description</FormLabel>
            <FormInput
              type="text"
              id="description"
              name="description"
              value={state.description}
              onChange={(event) =>
                setState({ ...state, description: event.target.value })
              }
              placeholder="Enter description"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="diagnosis">Diagnosis</FormLabel>
            <FormInput
              type="text"
              id="diagnosis"
              name="diagnosis"
              value={state.diagnosis}
              onChange={(event) =>
                setState({ ...state, diagnosis: event.target.value })
              }
              placeholder="Enter diagnosis"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="status">Status</FormLabel>
            <FormInput
              type="text"
              id="status"
              name="status"
              value={state.status}
              onChange={(event) =>
                setState({ ...state, status: event.target.value })
              }
              placeholder="Enter status"
              required
            />
          </FormGroup>

          <FormButton id="tweetSubmitBtn" disabled={loading} type="submit">
            {loading ? (
              <SpinnerOverlay>
                <Spinner>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </Spinner>
              </SpinnerOverlay>
            ) : (
              <>Create</>
            )}
          </FormButton>
        </FormContainer>
      </div>
    </div>
  );
};
export default MakeAppointment;
