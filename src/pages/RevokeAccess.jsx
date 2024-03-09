import React, { useState } from "react";
import Web3 from "web3";
import contractABI from '../contracts/RecordHealthCareData.json';
import { useNavigate } from "react-router-dom";
import { Spinner, SpinnerOverlay } from "../assets/index.styles";

const contractAddress = "0xf2e3c8e8119582D480934D95Aa0716637D4B8715";

const RevokeAccess = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [doctorAddress, setDoctorAddress] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    
    if (!doctorAddress) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const tempWeb3 = new Web3(window.ethereum);
      const record = new tempWeb3.eth.Contract(contractABI.abi, contractAddress);
      const accounts = await tempWeb3.eth.getAccounts();
      await record.methods.RevokePermission(doctorAddress).send({ from: accounts[0] });
      alert("Revoke access successfully!");
      console.log("Transaction sent successfully");
      navigate(`/record/${accounts[0]}`);
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to revoke doctor. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container bg-rose-300">
      <h1 className="text-center mt-5 mb-4 text-6xl font-bold pt-5 text-black">Revoke Access Doctor</h1>
      <div class="first-content container mt-5">
        <div class="row">
          <div class="col-md-4 mb-4 text-center text-black">
          <img
              src="https://cdn-icons-png.flaticon.com/256/190/190411.png"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5 ">Provide Only Necessary Access</h3>
            <p>
            Clearly define the purpose and scope of the access the physician needs to perform medical work.
            </p>
          </div>

          <div class="col-md-4 mb-4 text-center text-black">
          <img
              src="https://cdn-icons-png.flaticon.com/256/190/190411.png"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Identity Verification</h3>
            <p>
            Before granting access, ensure that the doctor's identity has been verified and fully registered in the blockchain system.
            </p>
          </div>
          <div class="col-md-4 mb-4 text-center text-black">
          <img
              src="https://cdn-icons-png.flaticon.com/256/190/190411.png"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Keeping Data Confidential</h3>
            <p>
            Ensure that patient personal and medical information is securely encrypted and protected on the blockchain.
            </p>
          </div>

          <div class="col-md-4 mb-4 text-center text-black">
            <img
              src="https://cdn-icons-png.flaticon.com/256/1828/1828843.png"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Do Not Share Passwords</h3>
            <p>
            Never share your password or login information with anyone, including your doctor, to avoid security risks.
            </p>
          </div>

          <div class="col-md-4 mb-4 text-center text-black">
            <img
              src="https://cdn-icons-png.flaticon.com/256/1828/1828843.png"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Do Not Automatically Accept Requests</h3>
            <p>
            Avoid automatically accepting access requests without verifying the physician's identity or intent.
            </p>
          </div>

          <div class="col-md-4 mb-4 text-center text-black">
            <img
              src="https://cdn-icons-png.flaticon.com/256/1828/1828843.png"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">No Unnecessary Access Registration</h3>
            <p>
            Please avoid applying for access beyond the scope of the physician's necessary medical work, to protect patient privacy
            </p>
          </div>
        </div>
      
      </div>
      <form onSubmit={onSubmit} className="row justify-content-center py-5 bg-gradient-to-l hover:bg-gradient-to-r rounded-xl">
        <div className="d-flex flex-column col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Doctor's Address (Ex: 0x123...)"
              value={doctorAddress}
              onChange={(event) => setDoctorAddress(event.target.value)}
            />
          </div>
          <div className=" text-center">
            <button className="btn btn-primary" disabled={loading} type="submit">
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
                <span>Revoke Access</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RevokeAccess;
