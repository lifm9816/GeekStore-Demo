import React, {useState} from "react";
import styled from "styled-components";
import { btnSignIn, colorPrimario } from "../../Components/UI/Variables";
import { Btn, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";
import def_user from "../../assets/Images/def-user.png"

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

const InputFoto = styled.label`
    border: 10px solid ${colorPrimario};
    display: inline-block;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background: url(${def_user}) center center / cover no-repeat;
    cursor: pointer;
    margin: 15px 40%;
    overflow: hidden;
    input{
        display: none;
    }
`

const FotoPerfil = styled.img`
    width: 150px;
    height: 150px;
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
    


    @media (min-width: 930px) 
    {
        width: 50%;
    }
`    


const SignIn = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    }

    return(
        <Contenedor>
            <Formulario action="">
                
                <DivFoto>
                    <Etiqueta htmlFor="foto">Foto de perfil: </Etiqueta>
                    <InputFoto>
                        <input type="file" accept = "image/*" onChange = {handleImageChange} />
                        {selectedImage ? (
                            <FotoPerfil src = {selectedImage} alt = "Avatar"/>
                        ) : null}
                    </InputFoto>
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