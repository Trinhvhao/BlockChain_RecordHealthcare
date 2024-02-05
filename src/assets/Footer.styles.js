import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background-color: #0f172a;
  padding: 70px 0;
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 10px;
  }
  @media (max-width: 574px) {
    margin-left: 30px;
  }
`;

export const Col = styled.div`
  width: 25%;
  padding: 0 15px;
  @media (max-width: 767px) {
    width: 50%;
    margin-bottom: 30px;
  }
  @media (max-width: 574px) {
    width: 100%;
  }
`;
export const H4 = styled.h4`
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #00e1ff;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
`;
export const Link = styled.a`
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    padding-left: 8px;
  }
`;
export const SocialLink = styled.div`
  a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
  }

  a:hover {
    color: #24262b;
    background-color: #ffffff;
  }
`;
