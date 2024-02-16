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
const RegisterDoctor = () => {
  //address old contract
  // 0x0A764BD8d60d7F2aa02B7b00A368C740bD5a6EDe
  const contractAddress = "0xdB1c78983b2E6F74bd00CdC5DEf1D5075deD6f44";
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

  const imagePaths = [
    "https://mavenprofserv.com/wp-content/uploads/2023/01/Medical-Device-Labelling.jpg",
    "https://img.freepik.com/free-vector/biotechnology-isometric-composition-with-human-characters-medical-workers-with-patients-medication-lab-computer-icons-vector-illustration_1284-83228.jpg?w=826&t=st=1705632254~exp=1705632854~hmac=5d6e0e133ab4a1d5c3ceaeb2debe0bc86c26c268427eb4f7a38d64520c892796",
    "https://img.freepik.com/free-vector/biotechnology-isometric-composition-with-computer-screens-dna-pills-syringe-silhouette-human-body-projection-vector-illustration_1284-83231.jpg?w=740&t=st=1705632308~exp=1705632908~hmac=68b50382a912a98d334e90e8b27fcba1d67f03259232a9db790da3c2c0d1100b",
    "https://img.freepik.com/free-photo/doctor-from-future-concept_23-2151111134.jpg?t=st=1705632536~exp=1705636136~hmac=c636f6d93e85528393215b2a363716aa7bb504628e9c3d755965c3fa93e0d53d&w=1060",
    "https://img.freepik.com/free-vector/medical-healthcare-protection-shield-with-cross-sign_1017-24597.jpg?w=1060&t=st=1705634110~exp=1705634710~hmac=8846203e6dafaf5233719c08fd0228e82a1bd425205853964635b8ebc0db3a60",
    "https://img.freepik.com/free-photo/wife-visiting-her-ill-husband_23-2148981236.jpg?w=1060&t=st=1705633123~exp=1705633723~hmac=2ce0565f034bab86dcbaca0d980f725125504aebfb98c0a455e3b03151a8a5f6",
    "https://i.pinimg.com/564x/3e/7c/0c/3e7c0c2695d71d93e75a387688ce4ca5.jpg",
    "https://img.freepik.com/free-photo/happy-grandmother-wheelchair-with-her-daughter-grandchild-park-happy-life-happy-time_1150-4355.jpg?w=1060&t=st=1705634452~exp=1705635052~hmac=7b2371f805c1e1ee0b70419a5932c95476471238792577df0b1a310a4f0bed80",
    "https://img.freepik.com/free-photo/covid-recovery-center-female-doctor-holding-older-patient-s-hands_23-2148847832.jpg?w=1060&t=st=1705633567~exp=1705634167~hmac=36be7a8a0466917d7b0b8ab3297e4e171a0ec5da090aa273bbe4024a1e27c173"
  ];
  // Render method chuaws JSX code để hiển thị giao diện đang ưkis bệnh nhân
  return (
    <div>
      <Header >
        <H1 className="mt-8 text-center">Register Doctor</H1>
        <Slider images={imagePaths}/>
        <p className="text-center m-auto" style={{ maxWidth: 550 }}>
          We are committed to providing a convenient and secure physician
          registration experience, helping them manage their personal and
          professional information effectively.
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
