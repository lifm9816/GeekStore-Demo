import styled from "styled-components";
import { btnSignIn, colorPrimario } from "../../Components/UI/Variables";
import { Btn } from "../../Components/UI";

export const CrearCuenta = styled(Btn)`
    background-color: ${btnSignIn};
    font-size: 25px;
    padding: 20px;
    transition: all .5s ease-in-out;
    border-radius: 20px;
    width: auto;
    height: auto;
    margin-bottom: 100px;
    display: block;
    &:hover
    {
        background-color: #e08044;
    }
`

export const DivFoto = styled.div`
    @media (min-width: 495px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        width:-webkit-fill-available;
    }
`

export const InputFoto = styled.label`
    border: 10px solid ${colorPrimario};
    display: inline-block;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background: url(${def_user}) center center / cover no-repeat;
    cursor: pointer;
    margin: 15px 40%;
    overflow: hidden;
    input{
        display: none;
    }
`

export const DivBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: -webkit-fill-available;

    @media(min-width: 930px)
    {
        margin-top: 30px;
    }
`

export const Div = styled.div`
    box-sizing: border-box;
    width: auto;
    display:block; 
    


    @media (min-width: 930px) 
    {
        width: 50%;
        padding: 0 80px;
    }
`

export const CropContainer = styled.div`
  position: relative;
  width: 175px;
  height: 175px;
  transform: translate(-5.8%, -5.8%);
`;

export const CropPreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

export const ErrorMessage = styled.p`
    box-sizing: border-box;
    background-color: red;
    font-weight: 600;
    color: #FFFFFF;
    margin-top: -25px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 90%;

    border-radius: 10px;
    padding: 2px 2px 2px 7px;

    @media (max-width: 939px)
    {
        margin-right: -151px;
    }
`

export const ConfirmMessage = styled.p`
    box-sizing: border-box;
    background-color: #AAD936;
    font-weight: 600;
    color: #FFFFFF;
    margin-top: -25px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 90%;
    border-radius: 10px;
    padding: 2px 2px 2px 7px;

    @media (max-width: 939px)
    {
        margin-right: -151px;
    }
`

export const PasswordInput = styled.input`
    box-sizing: border-box;
    border-radius: 10px 0 0 10px;
    padding: 5px 10px;
    border: none;
    font-size: 20px;
    margin-bottom: 10px;
    width: calc(100% - 60px);
    margin-bottom: 30px;
    margin-top: 10px;
    outline: none;
`;

export const ShowPasswordButton = styled.button`
    background-color: ${colorPrimario};
    color: #F9F9F9;
    border-radius: 0 10px 10px 0;
    border: none;
    padding: 5.5px;
    font-size: 18px;
    cursor: pointer;
`;