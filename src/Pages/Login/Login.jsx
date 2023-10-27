import styled from "styled-components";
import { colorPrimario, btnSignIn } from "../../Components/UI/Variables";
import { Btn } from "../../Components/UI";

const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 10px 30px;
    align-items: center;


`
const EspacioEtiqueta = styled.div`
    margin-bottom: 10px;
    display: flex;

    @media (max-width: 494px)
    {
        width: 100%;
    }
    @media (min-width: 495px)
    {
        width: 70%;
    }
`

const Etiqueta = styled.label`
    background-color: ${colorPrimario};
    font-size: 20px;
    color: #FFFFFF;
    padding: 5px 10px;
    border-radius: 10px;
    width: auto;
    font-weight: 400;
`

const CampoTexto = styled.input`
    border-radius: 10px;
    padding: 5px 10px;
    border: none;
    font-size: 20px;
    margin-bottom: 30px;
    
    @media (max-width: 494px)
    {
        width: 100%;
    }
    @media (min-width: 495px)
    {
        width: 70%;
    }

`

const IniciarSesion = styled(Btn)`
    background-color: ${btnSignIn};
    font-size: 25px;
    padding: 20px;
    transition: all .5s ease-in-out;
    border-radius: 20px;
    width: auto;
    height: auto;
    &:hover
    {
        background-color: #e08044;
    }
`



const Login = () =>{
    return(
        <Contenedor>
            <EspacioEtiqueta>
                <Etiqueta htmlForfor="correo">Correo:</Etiqueta>
            </EspacioEtiqueta>
            <CampoTexto type = "text" id="correo" placeholder = "Ingrese su correo electrónico"/>
            <EspacioEtiqueta>
                <Etiqueta htmlFor="contraseña" >Contraseña: </Etiqueta>
            </EspacioEtiqueta>
            <CampoTexto type="password" id="contraseña" placeholder = "Ingrese su contraseña"/>
            <span>
                <IniciarSesion>Iniciar Sesión</IniciarSesion>
            </span>
        </Contenedor>
    )
}

export default Login;