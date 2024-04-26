import styled from "styled-components";
import { btnSignIn, colorPrimario } from "../../Components/UI/Variables";
import { Btn } from "../../Components/UI";

export const RegistrarProducto = styled(Btn)`
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

export const PortadaProducto = styled.label`
    border: 10px dashed #737373;
    display: inline-block;
    height: 200px;
    width: 170px;
    border-radius: 20px;
    background: none;
    cursor: pointer;
    margin: 15px 25%;
    overflow: hidden;
    text-align: center;
    color: #737373;
    font-size: 115px;
    font-weight: bold;
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
  position: relative;
  left: 5%;
  top: -82.5%;
  width: 170px;
  height: 200px;
  border-radius: 20px;
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