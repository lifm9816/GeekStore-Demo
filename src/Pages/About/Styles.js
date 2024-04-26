import styled from "styled-components";
import { colorPrimario, colorSecundario } from "../../Components/UI/Variables";
import "./About.css"

export const SobreDiv = styled.div`
    margin: 10%;  
`

export const Titulo = styled.h1`
    color: ${colorPrimario};
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    border-color: ${colorPrimario};
    border-bottom: 3px solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-family: "Orbitron";

    @media (min-width:900px)
    {
        text-align: start;
        font-size: 40px;
    }
`

export const Parrafos = styled.div`
    font-weight: 400;
    font-size: 25px;
    margin: 0 5px 50px;
    box-sizing: border-box;
    justify-content: center;
    text-align: justify;
`

export const FundadorDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const FotoDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 900px)
    {
        width: 25%;
    }
`

export const FotoFundador = styled.img`
    border-radius: 100%;
    width: 100%;
    margin: 15px;


`

export const NomFundador = styled.span`
    font-family: "Orbitron";
    font-weight: 600;
    font-size: 30px;
`

export const PuestosFundador = styled.span`
    font-family: "Orbitron";
    font-weight: 400;
    font-size: 20px;

`