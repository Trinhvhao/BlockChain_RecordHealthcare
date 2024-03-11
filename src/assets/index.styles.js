import styled, {keyframes} from "styled-components";

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
  z-index: 99999999; /* Ensure it's above other elements */
`;
export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  --clr: rgb(65 247 218);
  --clr-alpha: rgb(127, 207, 255, 0.1);
  animation: ${rotateAnimation} 2s infinite linear;
  transform-style: preserve-3d;
  z-index: 1000;
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
