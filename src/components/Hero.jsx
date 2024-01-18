import React from "react";
import "../assets/Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Revolutionizing <br></br>Healthcare<br></br> with Blockchain
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>
              Explore the future of healthcare with our cutting-edge blockchain
              solutions.
            </span>
            <span>
              {" "}
              Embrace a new era of security, transparency, and patient
              empowerment
            </span>
          </div>
          <div className="flexCenter search-bar">
            <div className="input-group">
              <input
                type="email"
                className="input"
                id="Email"
                name="Email"
                placeholder="yourgmail@gmail.com"
                autoComplete="off"
              ></input>
              <input
                className="button--submit"
                value="Subscribe"
                type="submit"
              ></input>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            {" "}
            <img
              src="https://i.pinimg.com/736x/12/39/6a/12396a135bdc2a5930a1d015a52c1dc5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
