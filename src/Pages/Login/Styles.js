import styled from "styled-components";
import { colorPrimario, btnSignIn } from "../../Components/UI/Variables";
import { Btn , CampoTexto } from "../../Components/UI";

export const Formulario = styled.form`
    background-color: ${ ({ theme }) => theme.primary };
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    border-radius: 20px;

    @media(max-width: 800px){
        margin: 25% 10px;
    }

    @media (max-width: 950px)
    {
        margin-top: 15%;
    }

    @media (min-width: 951px)
    {
        margin-top: 10%;
    }
`

export const Etiqueta = styled.label`
    background-color: ${ ({ theme }) => theme.label};
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
    font-size: 18px;
    transition: all .5s ease-in-out;
    border-radius: 10px;
    width: max-content;
    height: auto;
    padding: 10px;

    
`

export const IniciarSesion = styled(BtnCuenta)`
    background-color: ${ ({ theme }) => theme.secondary };
    
    &:hover
    {
        background-color: ${ ({ theme }) => theme.secondary_hover };
    }
`

export const CrearCuenta = styled(BtnCuenta)`
    background-color: ${ ({ theme }) => theme.create_account_button };

    &:hover{
        background-color: ${ ({ theme }) => theme.primary_hover };
    }
`

export const DivInput = styled.div`
    box-sizing: border-box;
    width: auto;
    display:flex;
    flex-direction: column;
    align-items: start;
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