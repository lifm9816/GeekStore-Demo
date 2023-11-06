import styled from "styled-components";
import { btnSignIn } from "../../Components/UI/Variables";
import { Btn, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";

const Formulario = styled.form`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 929px)
    {
        flex-direction: column;
        align-items: start;
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
    margin-bottom: 100px;
    display: block;
    &:hover
    {
        background-color: #e08044;
    }
`

const DivFoto = styled.div`
    @media (min-width: 495px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        width:-webkit-fill-available;
    }
`

const DivBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: -webkit-fill-available;
`

const Div = styled.div`
    box-sizing: border-box;
    width: auto;
    display:block; 
    

    @media(max-width: 929px)
    {
        margin: 0 15%;
    }

    @media (min-width: 930px) 
    {
        width: 50%;
    }
`    


const SignIn = () => {
    return(
        <Contenedor>
            <Formulario action="">
                
                <DivFoto>
                    <Etiqueta htmlFor="foto">Foto de perfil: </Etiqueta>
                    <CampoTexto id="foto" type="image" />
                </DivFoto>

                <Div>
                    <Etiqueta htmlFor="nombre">Nombre: </Etiqueta> 
                    <CampoTexto id="nombre" type="text" placeholder="Ingrese su nombre(s)" />
                </Div>
        
                <Div>
                
                    <Etiqueta htmlFor="apellido">Apellido: </Etiqueta>
                    <CampoTexto id="apellido" type="text" placeholder="Ingrese su apellido(s)"/>
                </Div>
            
                <Div>
                    <Etiqueta htmlFor="email">Correo electrónico: </Etiqueta>
                    <CampoTexto id="email" type="email" placeholder="Ingrese su correo electrónico" />
                </Div>
            
                <Div>
                    <Etiqueta htmlFor="celular">Celular: </Etiqueta>
                    <CampoTexto id="celular" type="tel" placeholder="Ingrese su número celular" />
                </Div>

                <Div>
                    <Etiqueta htmlFor="password">Contraseña: </Etiqueta>
                    <CampoTexto id="password" type="password" placeholder="Ingrese su contraseña" />
                </Div>
            
                <Div>
                    <Etiqueta htmlFor="password-confirm">Confirmar contraseña: </Etiqueta>
                    <CampoTexto id="password-confirm" type="password" placeholder="Confirme su contraseña"  />
                </Div>

                <DivBtn>
                    <CrearCuenta>Crear cuenta</CrearCuenta>
                </DivBtn>

            </Formulario>
        </Contenedor>


    )
}

export default SignIn;