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
import { Spinner,SpinnerOverlay } from "../assets/index.styles";
import Slider from "../components/Slide/SlideShow";

const BgImage ={
  backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1681843039768-0e22b7a031d5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
}
const RegisterDoctor = () => {
  const contractAddress = "0xf2e3c8e8119582D480934D95Aa0716637D4B8715";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setState((prevState) => ({ ...prevState, gender: "Male" }));
  }, []); // Empty dependency array, runs once after initial render

  const handleGender = (e) => {
    setState({ ...state, gender: e.target.value });
  };
  const [state, setState] = useState({
    ic: "",
    name: "",
    phone: "",
    gender: "",
    dob: "",
    qualification: "",
    major: "",
    loading: false,
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const { ic, name, phone, gender, dob, qualification, major } = state;

    // Kiểm tra xem các trường cần thiết đã được điền đầy đủ hay không
    if (!ic || !name || !phone || !gender || !dob || !qualification || !major) {
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
      const newDoctorData = {
        ic,
        name,
        phone,
        gender,
        dob,
        qualification,
        major,
      };

      // Gửi dữ liệu bệnh nhân tới smart contract
      await contract.methods
        .setDoctor(
          newDoctorData.ic,
          newDoctorData.name,
          newDoctorData.phone,
          newDoctorData.gender,
          newDoctorData.dob,
          newDoctorData.qualification,
          newDoctorData.major
        )
        .send({ from: accounts[0] });

      alert("Account created successfully!");
      console.log("Transaction sent successfully");
      navigate("/list");
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
        qualification: "",
        major: "",
      });
    }
  };

  // Render method chuaws JSX code để hiển thị giao diện đang ưkis bệnh nhân
  return (
    <div>
      <Header >
        <H1 className="mt-8 text-center">Edit Info Doctor</H1>
        <p className="text-center m-auto" style={{ maxWidth: 550 }}>
          We are committed to providing a convenient and secure physician
          registration experience, helping them manage their personal and
          professional information effectively.
        </p>
      </Header>
      <InputPost style={BgImage}>
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
                placeholder="Ex: Doctor's Name"
                value={state.name}
                onChange={(event) =>
                  setState({ ...state, name: event.target.value })
                }
              />
              <span className="span">Full Name</span>
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
            {/* Input Qualification */}
            <InputField className=" col-xl-12  col-md-12 col-12">
              <textarea
                type="text"
                placeholder="EX: Dr. Sarah Johnson is a highly qualified and dedicated medical professional with extensive experience in the field of medicine. She holds a Doctor of Medicine (MD) degree from Harvard Medical School, where she graduated with honors. Dr. Johnson completed her undergraduate studies at Stanford University"
                value={state.qualification}
                onChange={(event) =>
                  setState({ ...state, qualification: event.target.value })
                }
              />
              <span className="span">Qualification</span>
            </InputField>

            {/* Input Weight */}
            <InputField className=" col-xl-12 col-md-12 col-12">
              <input
                type="text"
                placeholder="EX: A specialization in Internal Medicine"
                value={state.major}
                onChange={(event) =>
                  setState({ ...state, major: event.target.value })
                }
              />
              <span className="span">Major</span>
            </InputField>

            <Button id="tweetSubmitBtn" disabled={loading} type="submit">
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
                <>Register Doctor</>
              )}
            </Button>
          </form>
        </Card>
      </InputPost>
    </div>
  );
};

export default RegisterDoctor;
