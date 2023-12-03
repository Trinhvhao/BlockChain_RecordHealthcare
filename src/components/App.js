//  thiết lập cơ sở hạ tầng cho việc sử dụng React và định nghĩa Component là một lớp cơ bản để xây dựng các thành phần trong ứng dụng React.
import React, { Component } from "react";
import "./App.css";
import Navbar from "./NavBar";
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            account:'0x0'
        }
    }
  // Our react code
  render() {
    return (
      <div>
        <Navbar account={this.state.account}/>
        <div
          className="text-center"
          style={{ color: "green", fontSize: "30px" }}
        >
         
        </div>
        <div>
            halo my name is Hao
        </div>
      </div>
    );
  }
}
export default App;

// HTML - is the markup languge for writing basic text and websites
// CSS -styles the website ( colors, fonts, sizes)
// Javascript allows the websites to be dynamic
