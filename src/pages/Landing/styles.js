import styled from "styled-components";

import done from "../../global/assets/done.svg";

export const LandingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 20px 10px;
  background: white right top/40% url(${done}) no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  >img{
      width: 30%;
      position: absolute;
      left: 0;
      bottom: 0;
  }
  @media(max-width: 670px){
      background: none;
      >img{
          display: none;
      }
  }
  div:first-child {
    h1 {
      font-family: Nunito, sans-serif;
      font-size: 24px;
      text-align: center;
      cursor: default;
    }
    p {
      font-family: Ubuntu, sans-serif;
      font-size: 16px;
      max-width: 400px;
      margin-top: 20px;
      text-align: center;
      cursor: default;
    }
  }
  div:last-child {
    a {
      width: 400px;
      padding: 10px 20px;
      cursor: default;
      color: white;
      background-color: #00BFA6;
      text-decoration: none;
      font-family: Inter, sans-serif;
      border-radius: 5px;
      font-size: 14px;
      transition: all 0.4s;
      border: 1px solid transparent;
      :hover{
          background: #00a790;
      }
      :focus{
        border: 1px solid #202020;
      }
    }
  }
`;
