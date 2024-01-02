import React, { Component } from "react";
import "./assets/App.css";
import Navbar from "./components/NavBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
    };
  }
  // Our react code
  render() {
    return (
      <div>
        
        <div
          className="text-center"
          style={{ color: "green", fontSize: "20px" }}
        >
          {" "}
          <div className="css">Trinh Van Haoo </div>
        </div>
      </div>
    );
  }
}
export default App;

// HTML - is the markup languge for writing basic text and websites
// CSS -styles the website ( colors, fonts, sizes)
// Javascript allows the websites to be dynamic
