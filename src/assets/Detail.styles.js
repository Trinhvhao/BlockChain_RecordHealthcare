import styled, {keyframes} from "styled-components";

export const PyramidLoader = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  display: block;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
`;
// Keyframes
const spin = keyframes`
  100% {
    transform: rotateY(360deg);
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${spin} 4s linear infinite;
`;
export const Side = styled.span`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

export const Side1 = styled(Side)`
  transform: rotateZ(-30deg) rotateY(90deg);
  background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
`;

export const Side2 = styled(Side)`
  transform: rotateZ(30deg) rotateY(90deg);
  background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
`;

export const Side3 = styled(Side)`
  transform: rotateX(30deg);
  background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
`;

export const Side4 = styled(Side)`
  transform: rotateX(-30deg);
  background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
`;

export const Shadow = styled.span`
  width: 140px;
  height: 140px;
  background: #8B5AD5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(12px);
`;