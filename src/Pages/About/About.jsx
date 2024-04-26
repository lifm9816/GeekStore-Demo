import Luis from "../../assets/Images/Luis.jpg"
import { SobreDiv, Titulo, Parrafos, FundadorDiv, FotoDiv, FotoFundador, NomFundador, PuestosFundador } from "./Styles";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        document.title = "GeekStore | Sobre";
    }, [])

    return(
        <SobreDiv>
            <Titulo>¿Quiénes somos?</Titulo>
            <Parrafos>Somos una subdivisión de "LTech" encargada de proveer los mejores productos tecnológcos (equipos de cómputo, computadoras gamer, consolas de videojuegos, videojuegos) 
                y figuras de colección de la más alta calidad a los mejores precios para que salga el geek que llevas dentro.
            </Parrafos>

            <Titulo>Nuestro fundador</Titulo>
            <FundadorDiv>
                <FotoDiv>
                <FotoFundador src={Luis} />
                </FotoDiv>
                
                <NomFundador >Luis Martínez</NomFundador>
                <PuestosFundador>CEO</PuestosFundador>
                <PuestosFundador>Fundador</PuestosFundador>
                <PuestosFundador>Desarrollador</PuestosFundador>
                <PuestosFundador>y</PuestosFundador>
                <PuestosFundador>Diseñador</PuestosFundador>
                <PuestosFundador>de</PuestosFundador>
                <NomFundador>LTech</NomFundador>
            </FundadorDiv>
        </SobreDiv>
    )
}

export default About;