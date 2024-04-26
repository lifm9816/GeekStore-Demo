import styled from "styled-components";
import { colorPrimario, btnSignIn } from "../../Components/UI/Variables";
import { Btn , CampoTexto } from "../../Components/UI";

export const Formulario = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 900px)
    {
        margin-top: 5%;
        transform: scale(1.3);
    }
`

export const Etiqueta = styled.label`
    background-color: ${colorPrimario};
    font-size: 20px;
    color: #FFFFFF;
    padding: 5px 10px;
    border-radius: 10px;
    width: auto;
    font-weight: 400;
`

export const Input = styled(CampoTexto)`
    margin-right: 0;
`

export const BtnCuenta = styled(Btn)`
    font-size: 25px;
    transition: all .5s ease-in-out;
    border-radius: 10px;
    width: max-content;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
`

export const IniciarSesion = styled(BtnCuenta)`
    background-color: ${btnSignIn};
    
    &:hover
    {
        background-color: #e08044;
    }
`

export const CrearCuenta = styled(BtnCuenta)`
    background-color: ${colorPrimario};
`

export const DivInput = styled.div`
    box-sizing: border-box;
    width: auto;
    display:block; 
    margin: 0 15%;
`

export const DivBtn = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    @media(max-width: 600px)
    {
        flex-direction: column;
    }
`