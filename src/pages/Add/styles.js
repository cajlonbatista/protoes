import styled from 'styled-components';

export const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    padding: 10px 20px;
    h1{
        margin: 5px;
        font-family: Inter, sans-serif;
        font-size: 15px;
        color: #5e5e5e;
        font-weight: 500;
    }
    img{
        width: 23px;
    }
    div:last-child{
        display: flex;
        align-items: center;
        margin: 40px auto;
        a{
            margin-right: 20px;
        }
        input{
            padding: 7px 9px;
            border-radius: 5px;
            width: 90%;
            max-width: 600px;
            font-size: 14px;
            color: #101010;
            font-family: Inter, sans-serif;
            margin-right: 20px;
            border: 1px solid #101010;
            transition: all 0.4s;
            outline: none;
            :focus{
                border: 1px solid #00BFA6;
            }
        }
        button{
            font-size: 13px;
        }
    }
`