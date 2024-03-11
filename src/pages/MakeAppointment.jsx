import React, { useState } from "react";
import contractABI from "../contracts/RecordHealthCareData.json";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import { Spinner, SpinnerOverlay } from "../assets/index.styles.js";
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

  const onSubmitToMake = async (event) => {
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

  const onSubmitToUpdate = async (event) => {
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
        .updateAppointment(
          newAppointmentData.patientAddress,
          newAppointmentData.date,
          newAppointmentData.time,
          newAppointmentData.status,
          newAppointmentData.description,
          newAppointmentData.diagnosis
        )
        .send({ from: accounts[0] });
      alert("Appointment update successfully!");
      console.log("Transaction sent successfully");
     
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to create Appointment. Check console for details.");
      alert("You are not a doctor, only doctors can create appointments");
    } finally {
      setLoading(false);
      navigate("/list");
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
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`AContainer ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1 className="text-center text-2xl font-black">Update Appointment</h1>
          <span className="text-center">Update and modify appointment information</span>
          <input
            type="text"
            placeholder="0x..........."
            value={state.patientAddress}
            onChange={(event) =>
              setState({ ...state, patientAddress: event.target.value })
            }
          />
          <input
            type="text"
            id="date"
            name="date"
            value={state.date}
            onChange={(event) =>
              setState({ ...state, date: event.target.value })
            }
            placeholder="Enter date"
          />
          <input
            type="text"
            id="time"
            name="time"
            value={state.time}
            onChange={(event) =>
              setState({ ...state, time: event.target.value })
            }
            placeholder="Enter time"
          />
          <input
            type="text"
            id="description"
            name="description"
            value={state.description}
            onChange={(event) =>
              setState({ ...state, description: event.target.value })
            }
            placeholder="Enter description"
          />
          <input
            type="text"
            id="diagnosis"
            name="diagnosis"
            value={state.diagnosis}
            onChange={(event) =>
              setState({ ...state, diagnosis: event.target.value })
            }
            placeholder="Enter diagnosis"
          />
          <input  type="text"
              id="status"
              name="status"
              value={state.status}
              onChange={(event) =>
                setState({ ...state, status: event.target.value })
              }
              placeholder="Enter status" />
            
          <button className="button1" onClick={onSubmitToUpdate}>
            Update
          </button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={onSubmitToMake}>
          <h1 className="text-center text-2xl font-black">Make Appointment</h1>
          <span className="text-center">Only doctors can make appointments for patients</span>
          <input
            type="text"
            placeholder="0x..........."
            value={state.patientAddress}
            onChange={(event) =>
              setState({ ...state, patientAddress: event.target.value })
            }
          />
          <input
            type="text"
            id="date"
            name="date"
            value={state.date}
            onChange={(event) =>
              setState({ ...state, date: event.target.value })
            }
            placeholder="Enter date"
          />
          <input
            type="text"
            id="time"
            name="time"
            value={state.time}
            onChange={(event) =>
              setState({ ...state, time: event.target.value })
            }
            placeholder="Enter time"
          />
          <input
            type="text"
            id="description"
            name="description"
            value={state.description}
            onChange={(event) =>
              setState({ ...state, description: event.target.value })
            }
            placeholder="Enter description"
          />
          <input
            type="text"
            id="diagnosis"
            name="diagnosis"
            value={state.diagnosis}
            onChange={(event) =>
              setState({ ...state, diagnosis: event.target.value })
            }
            placeholder="Enter diagnosis"
          />
          <input  type="text"
              id="status"
              name="status"
              value={state.status}
              onChange={(event) =>
                setState({ ...state, status: event.target.value })
              }
              placeholder="Enter status" />
            
          <button disabled={loading} type="submit">
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
          </button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Pay attention to the information when performing updates</p>
            <button onClick={handleLoginClick} id="login">
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Doctor!</h1>
            <p>
            Pay attention to the information when performing create
            </p>
            <button onClick={handleRegisterClick} id="register">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MakeAppointment;
