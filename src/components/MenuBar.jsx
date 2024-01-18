import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/MenuBar.css";
const MenuBar = () => {
  // sử dụng hook 'useState' để theo dõi địa chỉ ví Ethereum hiện tại của người dùng
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  // Sử dụng hook useEffect để gọi hai hàm khi component được tạo (getCurrentWalletConnectWallet và addWalletListener).
  useEffect(() => {
    getCurrentWalletConnectWallet();
    addWalletListener();
  });

  useEffect(() => {
    // Kiểm tra xem có địa chỉ ví kết nối hay không
    setIsConnected(walletAddress !== "");
  }, [walletAddress]);

  //  một hàm asynchronous được sử dụng để kết nối với ví MetaMask của người dùng.
  const connectWallet = async () => {
    // Kiểm tra nếu window và window.ethereum tồn tại, tức là MetaMask đã được cài đặt.
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /*MetaMask is installed */
        // Nếu có, thực hiện một request để yêu cầu tài khoản từ người dùng và cập nhật địa chỉ ví trong state.
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* Metamask is not installed */
      console.log("Please install and connect with Metamask");
    }
  };

  const getCurrentWalletConnectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /*MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Conenct to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* Metamask is not installed */
      console.log("Please install and connect with Metamask");
    }
  };

  const shortenAddress = (address) => {
    if (address.length > 10) {
      return `${address.slice(0, 5)}...${address.slice(-5)}`;
    } else {
      return address;
    }
  };
  // addWalletListener là hàm được sử dụng để lắng nghe sự kiện "accountsChanged" từ MetaMask.
  const addWalletListener = async () => {
    // Nếu MetaMask đã được cài đặt, thiết lập một lắng nghe cho sự kiện và cập nhật địa chỉ ví trong state khi sự kiện xảy ra.
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      // Nếu MetaMask không được cài đặt, đặt địa chỉ ví trong state thành chuỗi rỗng và hiển thị thông báo lỗi.
      setWalletAddress("");
      console.log("Please install and connect with Metamask");
    }
  };
  return (
    <div>
      <div className="navbar " style={{ background: "#0f172a" }}>
        <div className="navbar-center">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              <li>
                <Link to="/dashboard">DashBoard</Link>
              </li>
              <li>
                <Link to="/dashboard">Record</Link>
              </li>

              <li>
                <Link to="/dashboard">Doctor</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/editDoctor" className="text-black">
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/makeAppoinment" className="text-black">
                      Make Appointment
                    </Link>
                  </li>
                  <li>
                    <Link to="/updateAppoinment" className="text-black">
                      Update Appointment
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/patient">Patient</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/aprroveDoctor" className="text-black">
                      Allow Access
                    </Link>
                  </li>
                  <li>
                    <Link to="/allow" className="text-black">
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/revokeAccess" className="text-black">
                      Revoke Access
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link>Register</Link>

                <ul className="p-2">
                  <li>
                    <Link to="/registerDoctor" className="text-black">
                      Register Doctor
                    </Link>
                  </li>
                  <li>
                    <Link to="/registerPatient" className="text-black">
                      Register Patient
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl text-white">
            {" "}
            Record HealthCare Data
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
            <li>
              <Link to="/dashboard">Record</Link>
            </li>

            <li>
              <details>
                <summary>Doctor</summary>
                <ul className="p-2 z-50">
                  <li>
                    <Link to="/aprroveDoctor" className="text-black">
                      Allow Access
                    </Link>
                  </li>
                  <li>
                    <Link to="/allow" className="text-black">
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/revokeAccess" className="text-black">
                      Revoke Access
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Patient</summary>{" "}
                <ul className="p-2 z-50">
                  <li>
                    <Link to="/aprroveDoctor" className="text-black">
                      Allow Access
                    </Link>
                  </li>
                  <li>
                    <Link to="/allow" className="text-black">
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/revokeAccess" className="text-black">
                      Revoke Access
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <details>
                <summary>Register</summary>
                <ul className="p-2 z-50">
                  <li>
                    <Link to="/registerDoctor" className="text-black">
                      Register Doctor
                    </Link>
                  </li>
                  <li>
                    <Link to="/registerPatient" className="text-black">
                      Register Patient
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <button id="btn-message" className="button-message" onClick={connectWallet}>
          <div className="content-avatar">
            <div className={`status-user ${isConnected ? "connected" : ""}`}></div>
            <div className="avatar">
              <svg
                className="user-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="notice-content">
            <div className="username">
              <span className="user-text p-2"
               >{shortenAddress(walletAddress)}</span>
            </div>
            <div className="lable-message">Account</div>
            <div className="user-id">
              <span style={{fontWeight:"700"}}>Welcome to my website</span>
            </div>
          </div>
        </button>
        </div>
      </div>
    </div>
  );
};
export default MenuBar;
