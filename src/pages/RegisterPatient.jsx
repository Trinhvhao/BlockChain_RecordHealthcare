import React, { useState, useEffect } from "react";
import contractABI from "../contracts/RecordHealthCareData.json";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import {
  Header,
  InputPost,
  Card,
  InputField,
  Button,
  H1,
} from "../assets/Register.styles";

const RegisterPatient = () => {
  const contractAddress = "0x8eA9356162445a5f9cF209E59E044A5CfbC13C5e";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    ic: "",
    name: "",
    phone: "",
    gender: "",
    dob: "",
    height: "",
    weight: "",
    houseaddr: "",
    bloodgroup: "",
    emergencyName: "",
    emergencyContact: "",
    loading: false,
    errorMessage: "",
  });
  useEffect(() => {
    setState((prevState) => ({ ...prevState, gender: "Male" }));
  }, []); // Empty dependency array, runs once after initial render
  
  const handleGender = (e) => {
    setState({ ...state, gender: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const {
      ic,
      name,
      phone,
      gender,
      dob,
      height,
      weight,
      houseaddr,
      bloodgroup,
      emergencyName,
      emergencyContact,
    } = state;

    // Kiểm tra xem các trường cần thiết đã được điền đầy đủ hay không
    if (
      !ic ||
      !name ||
      !phone ||
      !gender ||
      !dob ||
      !height ||
      !weight ||
      !houseaddr ||
      !bloodgroup ||
      !emergencyName ||
      !emergencyContact
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
      const newPatientData = {
        ic,
        name,
        phone,
        gender,
        dob,
        height,
        weight,
        houseaddr,
        bloodgroup,
        emergencyName,
        emergencyContact,
      };

      // Gửi dữ liệu bệnh nhân tới smart contract
      await contract.methods
        .setDetailsPatient(
          newPatientData.ic,
          newPatientData.name,
          newPatientData.phone,
          newPatientData.gender,
          newPatientData.dob,
          newPatientData.height,
          newPatientData.weight,
          newPatientData.houseaddr,
          newPatientData.bloodgroup,
          newPatientData.emergencyName,
          newPatientData.emergencyContact
        )
        .send({ from: accounts[0] });

      alert("Account created successfully!");
      console.log("Transaction sent successfully");
      // navigate("/list");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to create account. Check console for details.");
    } finally {
      setLoading(false);

      // Đặt lại tất cả các trường trong state
      setState({
        ...state,
        ic: "",
        name: "",
        phone: "",
        gender: "",
        dob: "",
        height: "",
        weight: "",
        houseaddr: "",
        bloodgroup: "",
        emergencyName: "",
        emergencyContact: "",
      });
    }
  };

  // Render method chuaws JSX code để hiển thị giao diện đang ưkis bệnh nhân
  return (
    <div>
      <Header>
        <H1 className="mt-8 text-center">Register Patient</H1>
        <p className="text-center m-auto" style={{ maxWidth: 550 }}>
          A convenient, secure, and transparent patient registration experience
          puts you in control of your medical information securely.
        </p>
      </Header>
      <InputPost>
        <Card>
          {/* error được đặt là true nếu có lỗi và thông báo lỗi sẽ được hiển thị. */}
          <form
            onSubmit={onSubmit}
            className="d-flex flex-column align-items-center p-3"
          >
            {/* Input Citizen Identification card of Patient */}
            <InputField className=" col-md-12 col-12">
              <input
                placeholder="Ex: 001204036110"
                value={state.ic}
                onChange={(event) =>
                  setState({ ...state, ic: event.target.value })
                }
              />
              <span className="span">Citizen Identification Card</span>
            </InputField>

            {/* Input Full Name Patient */}
            <InputField className=" col-md-12 col-12">
              <input
                type="text"
                placeholder="Ex: Hayyie Trinh"
                value={state.name}
                onChange={(event) =>
                  setState({ ...state, name: event.target.value })
                }
              />
              <span className="span">Full Name</span>
            </InputField>

            {/* Input Address of Patient */}
            <InputField className="  col-md-12 col-12">
              <input
                type="text"
                placeholder="EX: 16, Ha Dong, Dai Hoc Dai Nam, Ha Noi, Viet Nam  "
                value={state.houseaddr}
                onChange={(event) =>
                  setState({ ...state, houseaddr: event.target.value })
                }
              />
              <span className="span">Address</span>
            </InputField>

            <div className="row" style={{ margin: 0 }}>
              {/* Input Phone Number */}
              <InputField className="col-xl-4  col-md-12 col-12">
                <input
                  type="text"
                  placeholder="EX: 09876543210"
                  value={state.phone}
                  onChange={(event) =>
                    setState({ ...state, phone: event.target.value })
                  }
                />
                <span className="span">Phone</span>
              </InputField>

              {/* Input Date of Birth */}
              <InputField className=" col-xl-4 col-md-12 col-12">
                <input
                  type="text"
                  placeholder="Ex: 14-02-2004"
                  value={state.dob}
                  onChange={(event) =>
                    setState({ ...state, dob: event.target.value })
                  }
                />
                <span className="span">Date of Birth</span>
              </InputField>

              {/* Input Gender */}
              <InputField className="col-xl-4 col-md-12 col-12">
                <span htmlFor="select">Gender</span>
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={handleGender}
                  value={state.gender} //{/* Cập nhật giá trị của select */}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </InputField>
            </div>

            <div className="row" style={{ margin: 0 }}>
              {/* Input Height */}
              <InputField className=" col-xl-4  col-md-12 col-12">
                <input
                  type="text"
                  placeholder="EX: 1m70 or 170cm"
                  value={state.height}
                  onChange={(event) =>
                    setState({ ...state, height: event.target.value })
                  }
                />
                <span className="span">Height</span>
              </InputField>

              {/* Input Weight */}
              <InputField className=" col-xl-4 col-md-12 col-12">
                <input
                  type="text"
                  placeholder="EX: 55kg"
                  value={state.weight}
                  onChange={(event) =>
                    setState({ ...state, weight: event.target.value })
                  }
                />
                <span className="span">Weight</span>
              </InputField>

              {/* Input allergies and bloodgroup */}

              <InputField className=" col-xl-4 col-md-12 col-12">
                <input
                  type="text"
                  placeholder="EX: O+ "
                  value={state.bloodgroup}
                  onChange={(event) =>
                    setState({ ...state, bloodgroup: event.target.value })
                  }
                />
                <span className="span">BloodGroup</span>
              </InputField>
            </div>
            {/* Emergency of Patient */}
            <div className="row" style={{ margin: 0 }}>
              <InputField className=" col-xl-6 col-md-12 col-12">
                <input
                  type="text"
                  placeholder="EX: Your father's name"
                  value={state.emergencyName}
                  onChange={(event) =>
                    setState({ ...state, emergencyName: event.target.value })
                  }
                />
                <span className="span">emergencyName</span>
              </InputField>
              <InputField className=" col-xl-6 col-md-12 col-12">
                <input
                  type="text"
                  placeholder="EX: Your father's phone"
                  value={state.emergencyContact}
                  onChange={(event) =>
                    setState({ ...state, emergencyContact: event.target.value })
                  }
                />
                <span className="span">EmergencyPhone</span>
              </InputField>
            </div>

            <Button id="tweetSubmitBtn" disabled={loading} type="submit">
              {loading ? (
                <div className="spinner"></div>
              ) : (
                <>Register Patient</>
              )}
            </Button>
          </form>
        </Card>
      </InputPost>
    </div>
  );
};

export default RegisterPatient;
