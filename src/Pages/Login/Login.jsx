import styled from "styled-components";
import { colorPrimario, btnSignIn } from "../../Components/UI/Variables";
import { Link } from "react-router-dom";
import { Btn ,Contenedor, CampoTexto } from "../../Components/UI";

const Formulario = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20%;

    @media (min-width: 900px)
    {
        margin-top: 5%;
        transform: scale(1.3);
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

const Input = styled(CampoTexto)`
    margin-right: 0;
`

const BtnCuenta = styled(Btn)`
    font-size: 25px;
    transition: all .5s ease-in-out;
    border-radius: 10px;
    width: max-content;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
`

const IniciarSesion = styled(BtnCuenta)`
    background-color: ${btnSignIn};
    
    &:hover
    {
        background-color: #e08044;
    }
`

const CrearCuenta = styled(BtnCuenta)`
    background-color: ${colorPrimario};
`

const DivInput = styled.div`
  width: 100%;
  display:block; 
`

const DivBtn = styled.div`
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

const Login = () =>{
    return(
        <Contenedor>
            <Formulario>
                <DivInput>
                    <Etiqueta htmlFor="correo">Correo:</Etiqueta>
                    <Input type = "text" id="correo" placeholder = "Ingrese su correo electrónico"/>
                </DivInput>
                
                <DivInput>
                    <Etiqueta htmlFor="contraseña" >Contraseña: </Etiqueta>
                    <Input type="password" id="contraseña" placeholder = "Ingrese su contraseña"/>
                </DivInput>
                
                <DivBtn>
                    <Link to="/signin">
                        <CrearCuenta>Crear cuenta</CrearCuenta>
                    </Link>
                    <IniciarSesion>Iniciar Sesión</IniciarSesion>
                </DivBtn>
            </Formulario>    
        </Contenedor>
    )
}

export default Login;