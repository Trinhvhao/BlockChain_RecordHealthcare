import styled from "styled-components";

// Container styled component
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0;
  box-shadow: -1px 0px 25px 0px #21719369;
  padding: 2em;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 0.5em;
  font-family: sans-serif;
  font-weight: 400;
`;

// Group styled component
export const FormGroup = styled.div`
  margin-bottom: 2em;
`;

// Label styled component
export const FormLabel = styled.label`
  margin: 0 0 10px;
  display: block;
  font-size: 1.1em;
  color: #217093;
  font-weight: 600;
  font-family: inherit;
`;

// Input styled component
export const FormInput = styled.input`
  padding: 0.3em 0.5em 0.4em;
  background-color: #f3fafd;
  border: solid 2px #217093;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;

  font-size: 1.1em;
  color: #353538;
  font-weight: 600;
  font-family: inherit;
  transition: box-shadow 0.2s linear, border-color 0.25s ease-out;

  &:focus {
    outline: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #edf8fc;
    border: solid 2px #4eb8dd;
  }

  &::placeholder {
    color: #21719383;
  }
`;

// Button styled component
export const FormButton = styled.button`
  width: 6.5em;
  height: 2.3em;
  background: black;
  color: white;
  border: none;
  border-radius: 0.625em;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: block;
  margin: auto;
  overflow: hidden;
  &:hover {
    color: white;
  }

  &:after {
    content: "";
    background: #217093;
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  &:hover:after {
    transform: skewX(-45deg) scale(1, 1);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
`;
export const H1 = styled.h1`
  font-family: "Anton", sans-serif;
  letter-spacing: 1px;
  font-size: 6vw;
  color: black;
  @media (max-width: 760px) {
    font-size: 6.6vw;
  }
  @media (max-width: 480px) {
    font-size: 8.4vw;
  }
`;