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

const CrearCuenta = styled(Btn)`
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

const SignIn = () => {
    return(
        <Contenedor>
            <EspacioEtiqueta>
                <Etiqueta htmlFor="foto">Foto de perfil: </Etiqueta>
            </EspacioEtiqueta>
            <CampoTexto id="foto" type="image" />

            <EspacioEtiqueta>
                <Etiqueta htmlFor="nombre">Nombre: </Etiqueta>
            </EspacioEtiqueta>
            <CampoTexto id="nombre" type="text" placeholder="Ingrese su nombre(s)" />

            <EspacioEtiqueta>
                <Etiqueta htmlFor="apellido">Apellido: </Etiqueta>
            </EspacioEtiqueta>
            <CampoTexto id="apellido" type="text" placeholder="Ingrese su apellido(s)"/>

            <EspacioEtiqueta>
                <Etiqueta htmlFor="email">Correo electrónico: </Etiqueta>
            </EspacioEtiqueta>
            <CampoTexto id="email" type="email" placeholder="Ingrese su correo electrónico" />
            
            <EspacioEtiqueta>
                <Etiqueta htmlFor="celular">Celular: </Etiqueta>
            </EspacioEtiqueta>
            <CampoTexto id="celular" type="tel" placeholder="Ingrese su número celular" />

            <EspacioEtiqueta>
                <Etiqueta htmlFor="password">Contraseña: </Etiqueta>
            </EspacioEtiqueta>
            <CampoTexto id="password" type="password" placeholder="Ingrese su contraseña" />

            <EspacioEtiqueta>
                <Etiqueta htmlFor="password-confirm">Confirmar contraseña: </Etiqueta>
            </EspacioEtiqueta>
            <CampoTexto id="password-confirm" type="password" placeholder="Confirme su contraseña"  />

            <span>
                <CrearCuenta>Crear cuenta</CrearCuenta>
            </span>
        </Contenedor>


    )
}

export default SignIn;