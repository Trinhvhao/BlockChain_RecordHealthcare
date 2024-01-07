// Thư viện  Web3.js được sử dụng để tương tác với blockchain Ethereum
import Web3 from "web3";
// 'contractABI' của smart contract Record, mô tả cách giao tiếp với smart contract
import contractABI from "../contracts/record.json";

// address of Twitter contract
const contractAddress = "0x72725AfA437aC1664Cb22d2aef8841b1260Ca1D";

const Connect = ({
  web3,
  account,
  setAccount,
  setWeb3
}) => {
  // Hàm này được sử dụng để chuyển đổi mạng MetaMask sang mạng sepolia. Nếu mạng chưa được thêm, hàm sẽ tạo nó
  async function switchToSepolia() {
    try {
      // Request user to switch to Sepolia
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xaa36a7" }] // Chain ID for Sepolia in hexadecimal
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          // If Sepolia is not added to user's MetaMask, add it
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0xaa36a7",
                chainName: "Sepolia",
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18
                },
                rpcUrls: ["https://rpc.sepolia.org"]
              }
            ]
          });
        } catch (addError) {
          console.error("Failed to add Sepolia network to MetaMask", addError);
        }
      } else {
        console.error("Failed to switch to Sepolia network", switchError);
      }
    }
  }

  // Hàm này được gọi khi người dùng nhấn vào nút "Connect Wallet".
  async function connectWallet() {
    if (window.ethereum) {
      try {
        // Nó kiểm tra xem có 'window.ethereum' không, tức là người dùng đã có MetaMask hoặc một ví Ethereum khác đã tích hợp
        // Nếu có, nó yêu cầu người dùng cho phép ứng dụng kết nối với ví của họ thông qua window.ethereum.enable().
        await window.ethereum.enable();
        const networkId = await window.ethereum.request({
          method: "net_version"
        });
        // Sau đó, nó kiểm tra networkId để đảm bảo rằng ứng dụng đang chạy trên mạng chính Ethereum (networkId === "100"). 
        //Nếu không, nó chuyển đổi sang mạng Sepolia bằng cách gọi hàm switchToSepolia.
        if (networkId !== "100") {
          // Network ID for Sepolia
          await switchToSepolia();
        }

        // user enables the app to connect to MetaMask
        // Sau khi mạng được xác định, một đối tượng Web3 mới được tạo với window.ethereum.
        const tempWeb3 = new Web3(window.ethereum);
        setWeb3(tempWeb3);
        console.log("HIIIIIII");
        // Sử dụng tempWeb3 để lấy danh sách tất cả các tài khoản được kết nối với MetaMask hoặc dịch vụ Ethereum khác.
        // eth.getAccounts() là một phương thức của Web3.js trả về một promise chứa danh sách các địa chỉ tài khoản.
        const accounts = await tempWeb3.eth.getAccounts();
        console.log("ACCOUNTS", accounts);
        // Nếu có ít nhất một tài khoản được trả về từ MetaMask hoặc dịch vụ ethereum 
        // thì cập nhật giá trị của biến 'contractInstance' và 'account' bằng cách sử dụng 'setContract' và 'setAccount'
        if (accounts.length > 0){
          setAccount(accounts[0]);
        }
        console.log("NAHHHHHH");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("No web3 provider detected");
    }
  }

  return (
    <>
  {/*Một biểu thức điều kiện ({!account ? ... : ...}) kiểm tra xem có một tài khoản đang được kết nối hay không
     Nếu không có tài khoản (!account là true), hiển thị nút "Connect Wallet". 
     Nếu có tài khoản, chuyển sang phần thứ hai của biểu thức điều kiện.*/}
      <div className="connect">
        {!account ? (
          <button id="connectWalletBtn" className="btn btn-neutral" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
console.log("Success")
        )}
      </div>
      <div id="connectMessage">
        {!account ? "Please connect your wallet to tweet." : ""}
      </div>
    </>
  );
};

export default Connect;
