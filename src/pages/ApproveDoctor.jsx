import React, {useState} from "react";
import Web3 from "web3";
import contractABI from '../contracts/RecordHealthCareData.json'
import { useNavigate } from "react-router-dom";
const contractAddress = "0xdB1c78983b2E6F74bd00CdC5DEf1D5075deD6f44"

const ApproveDoctor = () => {
    // navigate to direct to profile patient
    const navigate = useNavigate();
    // create effect loading when send data to smart contract
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        doctorAddress: ""
    })  
    
  const onSubmit = async (event) => {
    event.preventDefault();
    const {
        doctorAddress
    } = state;
    if(!doctorAddress)
    {
        alert("Please fill in all required fields.");
        return;
      }
      try{
        const tempWeb3 = new Web3(window.ethereum);
        const record = new tempWeb3.eth.Contract(
          contractABI.abi,
          contractAddress
        );
        const accounts = await tempWeb3.eth.getAccounts();
        await record.methods.givePermission(doctorAddress).send({ from: accounts[0]});
        alert("Account created successfully!");
        console.log("Transaction sent successfully");
        navigate(`/record/${accounts[0]}`);
      }

        catch (err) {
            console.error("Error:", err);
            alert("Failed to give permission. Check console for details.");
          } finally {
            setLoading(false);
      }
    }
    return (
      <div>
        <h1>Approve Doctor</h1>
        <form
            onSubmit={onSubmit}
            className="d-flex flex-column align-items-center p-3"
          >
        <div className=" col-md-12 col-12">
              <input
                placeholder="Ex: 001204036110"
                value={state.doctorAddress}
                onChange={(event) =>
                  setState({ ...state, doctorAddress: event.target.value })
                }
              /></div>
              <button id="tweetSubmitBtn" disabled={loading} type="submit">
              {loading ? (
               <h1>Waitingggggg..........</h1>
              ) : (
                <>Register Patient</>
              )}
            </button>
              </form>
              </div>
    );
  };
export default ApproveDoctor