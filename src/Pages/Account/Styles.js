import styled from "styled-components";
import { btnSignIn, colorPrimario } from "../../Components/UI/Variables";
import { Formulario, Btn, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";

export const Container = styled(Contenedor)`
    margin-top: 0px;
    align-items: start;
`

export const CerrarSesion = styled(Btn)`
    background-color: ${btnSignIn};
    font-size: 25px;
    padding: 10px 30px;
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

export const EliminarCuenta = styled(Btn)`
    background-color: ${colorPrimario};
    font-size: 25px;
    padding: 10px 30px;
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

        display: flex;
        flex-direction: column;
        align-items: start;
        width:-webkit-fill-available;
        background-image: #f0f0f0 ;
        height: 200px;
        background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
        background-position: center; /* Centra la imagen */

        input{
            display: none;
        }

        @media (min-width: 931px) {
            height: 400px;
        }
    
`

export const InputFoto = styled.label`
    position: relative;
    border: 10px solid ${colorPrimario};
    display: inline-block;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background: #F0F0F0 center center / cover no-repeat;
    cursor: pointer;
    margin: 15px 5%;
    overflow: hidden;
    input{
        display: none;
    }
    
`

export const Info = styled.div`
    font-size: 35px;
    font-weight: bold;
`

export const DivBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: -webkit-fill-available;
    margin-top: 100px; /* Agrega un margen superior aquí */

    @media(min-width: 930px)
    {
        margin-top: 30px;
    }
`

export const InfoDiv = styled.div`
    position: absolute;
    top:calc(100vh - 10vh);    
    left: 0;
    box-sizing: border-box;
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: start;

    @media (max-width: 800px){
        top: calc(100vh - 78vh);
    }

    @media (min-width: 801px){
        top: calc(100vh - 68vh);
    }

    @media (min-width: 931px){
        top: calc(100vh - 47vh);
    }

`

export const NameDiv = styled.div`
    position: relative;
    font-size: 25px;
    color: #19222D;
    margin-top: 90px; /* Ajusta el margen superior */
    margin-left: 17px; /* Ajusta el margen izquierdo */
    font-weight: bold;
`

export const Div = styled.div`
    box-sizing: border-box;
    width: auto;
    display:block; 
    position: relative;
    left: 20%;
    font-weight: bold;
    font-size: 25px;
    color: ${colorPrimario};
    margin-top: 10px;

    @media (min-width: 930px) 
    {
        width: 50%;
        padding: 0 80px;
    }
`

