import styled from "styled-components";
import Luis from "../../assets/Images/Luis.jpg"
import { colorPrimario } from "../../Components/UI/Variables";

const SobreDiv = styled.div`
    margin: 10%;
    margin-bottom: 50%;
`

const Titulo = styled.h1`
    color: ${colorPrimario};
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    border-color: ${colorPrimario};
    border-bottom: 3px solid;
    padding-bottom: 10px;
    margin-bottom: 10px;

    @media (min-width:900px)
    {
        text-align: start;
        font-size: 40px;
    }
`

const Parrafos = styled.div`
    font-weight: 400;
    font-size: 25px;
    margin: 0 5px 50px;
    box-sizing: border-box;
    justify-content: center;
`

const FundadorDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;

    @media (max-width: 900px)
    {
        flex-direction:column;
    }
`

const DescripcionDiv = styled.div`
    width: 50%;
    box-sizing: border-box;

    @media (max-width: 900px)
    {
        width: 100%;
    }
`

const FotoFundador = styled.img`
    border-radius: 100%;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    margin: 15px;
`



const About = () => {
    return(
        <SobreDiv>
            <Titulo>¿Quiénes somos?</Titulo>
            <Parrafos>Somos una subdivisión de "LTech" encargada de proveer los mejores productos tecnológcos (equipos de cómputo, computadoras gamer, consolas de videojuegos, videojuegos) 
                y figuras de colección de la más alta calidad a los mejores precios para que salga el geek que llevas dentro.
            </Parrafos>

            <Titulo>Nuestro fundador</Titulo>
            <FundadorDiv>
                <DescripcionDiv>
                    <FotoFundador src={Luis} />
                </DescripcionDiv>
                <DescripcionDiv>
                    <Parrafos>Y ahora con ustedes nuestro creador, fundador, desarrollador y diseñador, CEO de LTech, Luis Ignacio Flores Martínez</Parrafos>
                </DescripcionDiv>
            </FundadorDiv>
        </SobreDiv>
    )
}

export default About;