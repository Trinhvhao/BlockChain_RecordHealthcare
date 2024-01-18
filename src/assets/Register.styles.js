import styled from "styled-components";
export const Header = styled.div`
  margin-top: 48px;
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
    margin: 12px ;
  &:hover{
    background-color: #ffffff;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #000000;
    transform: translateY(-7px);
  }
`
;
export const  H1= styled.h1`
font-family: "Anton", sans-serif;
letter-spacing: 1px;
font-size: 6vw;
  @media (max-width: 760px) {
        font-size: 6.6vw;
  }
  @media (max-width: 480px) {

        font-size: 8.4vw;

  }`
