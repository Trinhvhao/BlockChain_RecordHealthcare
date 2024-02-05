import { keyframes } from "styled-components";
import styled from "styled-components";
export const Header = styled.div`
  margin-top: 48px;
  background-color: #0e1627;
  img {
    margin: 20px auto;
    max-width: 50%;
    border-radius: 50%;
  }
  p {
    color: white;
  }
  @media (max-width: 769px) {
    img {
      max-width: 80%;
    }
  }
`;
export const InputPost = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 48px auto;
  background-image: url("https://images.alphacoders.com/123/1239282.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin: auto;
  border-radius: 15px;
  background: #4b8dad57;
  flex-direction: column;
`;
export const InputField = styled.div`
  padding: 18px;
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    outline: none;
    color: #000000;
    font-size: 1em;
    background: #ffffff;
    border: 2px solid #000000;
    transition: 0.1s;
    border-radius: 8px;
  }
  span {
    margin-top: 5px;
    position: absolute;
    left: 0;
    margin-left: 10px;
    padding: 0% 10px;
    pointer-events: none;
    color: #ffffff;
    text-transform: uppercase;
    transition: all 0.5s ease-in-out;
    letter-spacing: 3px;
    border-radius: 8px;
    display: inline;
    transform: translateY(-25px);
    font-size: 0.8em;
    padding: 5px 10px;
    background: #000;
    border: 2px;
  }
  textarea {
    width: 100%;
    padding: 10px;
    min-height: 100px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical; /* Cho phép điều chỉnh chiều cao dọc */
  }
`;
const rotateAnimation = keyframes`
 0% {
    transform: rotate(0deg) rotateX(0deg) rotateY(0deg);
  }

  50% {
    transform: rotate(180deg) rotateX(180deg) rotateY(180deg);
  }

  100% {
    transform: rotate(360deg) rotateX(360deg) rotateY(360deg);
  }
`;
export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  background-color: #000000ad; /* Adjust the alpha value for transparency */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's above other elements */
`;
export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  --clr: rgb(65 247 218);
  --clr-alpha: rgb(127, 207, 255, 0.1);
  animation: ${rotateAnimation} 2s infinite linear;
  transform-style: preserve-3d;

  div {
    background-color: var(--clr-alpha);
    height: 100%;
    position: absolute;
    width: 100%;
    border: 5px solid var(--clr);
  }

  div:nth-of-type(1) {
    transform: translateZ(-40px) rotateY(180deg);
  }

  div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  div:nth-of-type(6) {
    transform: translateZ(40px);
  }
`;

export const Button = styled.button`
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #ffffff;
  background-color: #000000;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: none;
  margin: 12px;
  &:hover {
    background-color: #ffffff;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #000000;
    transform: translateY(-7px);
  }
`;
export const H1 = styled.h1`
  font-family: "Anton", sans-serif;
  letter-spacing: 1px;
  font-size: 6vw;
  color: white;
  @media (max-width: 760px) {
    font-size: 6.6vw;
  }
  @media (max-width: 480px) {
    font-size: 8.4vw;
  }
`;