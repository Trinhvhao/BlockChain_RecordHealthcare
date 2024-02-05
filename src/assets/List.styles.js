import styled from "styled-components";
export const Input = styled.input`
  margin:24px 0px;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  background-color: #e8e8e8;
  box-shadow: 6px 6px 12px #ffffff, -6px -6px 12px #c5c5c5;
  font-size: medium;
  font-weight: bold;
  width: 100%;
  max-width: 500px;
  &:focus {
    outline-color: white;
    place-content: "Enter your message!";
  }
`;
export const Container = styled.div`
margin-top: 48px;
h2{
    font-family: "Anton",sans-serif;
    letter-spacing: 1px;
    font-size: 6vw;
    color: black;
}
`;