import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    background: var(--dashboard);
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    main {
        h1{
            font-family: Inter, sans-serif;
            font-size: 18px;
            color: #5e5e5e;
        }
    }
    a{
        position: absolute;
        bottom: 20px;
        right: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        transition: all 0.4s;
        img{
            width: 20px;
        }
    }
`;