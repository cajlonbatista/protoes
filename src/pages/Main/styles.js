import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: var(--dashboard);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  main {
    h1 {
      font-family: Inter, sans-serif;
      font-size: 18px;
      color: #5e5e5e;
    }
  }
  section {
    align-items: center;
    background: #f5f5f5;
    width: 100vw;
    height: 50vh;
    overflow: auto;
    padding: 20px 5px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      background: #00BFA6;
      padding: 5px 30px;
      border-radius: 10px;
      p {
        list-style: none;
        font-family: "Inter", sans-serif;
        border-radius: 5px;
      }
      img {
        width: 24px;
      }
    }
  }
  a {
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    transition: all 0.4s;
    img {
      width: 20px;
    }
  }
`;
