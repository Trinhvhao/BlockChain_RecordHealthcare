import styled from "styled-components";

export const Container0 = styled.div``;
export const Title = styled.div`
  text-align: center;
  margin: auto;
  max-width: 450px;
  h2 {
    font-weight: 700;
    font-size: 4.6vw;
    font-family: "Anton", sans-serif;
    letter-spacing: 1px;
  }
`;
export const SecondContent = styled.div``;
export const ThirdContent = styled.div``;
export const New = styled.div`
  background-color: #000000;
  padding: 48px 0;
  margin-top: 48px;
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 65px auto;
  gap: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin: 0px;
    padding: 0px 20px;
  }
`;
export const HeroContent = styled.div`
  flex: 1;
  width: 600px;
  flex-direction: column;
  margin: 0px 25px;
  animation: fadeinUp 2s ease;
  h2 {
    font-size: 38px;
    margin-bottom: 20px;
    color: #ffffff;
    font-weight: 700;
  }
  p {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 20px;
    color: #c2feff;
  }
  button {
    display: inline-block;
    background-color: #5e4dcd;
    color: #fff;
    padding: 12px 24px;
    border-radius: 5px;
    font-size: 20px;
    border: none;
    transition: 0.3s ease;
  }
  button:hover {
    background-color: #0fbda6;
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 35px 0px;
    margin-top: 80px;
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
      margin-bottom: 20px;
    }
    button {
      font-size: 16px;
      padding: 8px 16px;
    }
  }
`;
export const HeroImage = styled.div`
  flex: 1;
  width: 600px;
  margin: auto;
  animation: fadeinRight 2s ease;
  overflow: hidden;
  object-fit: cover;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: top;
    border-radius: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;
export const FirstContent = styled.div`
  background-color: azure;
`;
export const CardContent = styled.div`
  padding: 30px 40px 20px 40px;
  border-style: solid;
  border-width: 0px 0px 3px 0px;
  border-color: rgba(55, 194, 204, 0);
  box-sizing: border-box;
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  color: rgb(255, 255, 255);
  background-color: black;
  &:hover {
    border: 1px solid black;
    transform: scale(1.05);
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
  }
  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
  &:hover a {
    text-decoration: none;
  }
  h3 {
    font-weight: bold;
    text-transform: capitalize;
    line-height: 1.5em;
    margin: 0px 0px 15px 0px;
    font-size: 20px;
  }
`;
export const H2 = styled.h2`
font-size: 4.6vw;
    font-family: 'Anton', sans-serif;
    letter-spacing: 1px;
  @media (max-width: 760px) {
    font-size: 6.6vw;
  }
  @media (max-width: 480px) {
    font-size: 8.4vw;
  }
`;
export const CardBody= styled.div`
background-color: #00dcff30;
`
export const Banner = styled.div`
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  margin: 48px auto;
  width: 100%;
  height: 350px;
  border-radius: 20px;`
  export const BannerBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  `;
  export const BannerContent = styled.div`
   color: white;
  width: 60%;
  text-align: center;
  letter-spacing: 1px;
  font-family: Poppins,sans-serif;
  font-weight: 700;
  `;
 export const BannerButton = styled.div`
border-radius: 30px;
border: 2px solid rgb(255, 255, 255);
cursor: pointer;
display: flex;
color: #ffffff;
background-color: black;
align-items: center;
font-family: "Anton", sans-serif;
font-size: 1rem;
font-weight: 700;
justify-content: center;
padding: 0.6em 1.14em;
position: relative;
transition: all 0.3s ease;

&:hover {
  background-color: #ffffff;
}

&:hover span {
  color: black;
}
`;