import React, { useState } from "react";
import AvatarEditor from 'react-avatar-editor';
import styled from "styled-components";
import { btnSignIn, colorPrimario } from "../../Components/UI/Variables";
import { Formulario, Btn, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";
import def_user from "../../assets/Images/def-user.png"
import { validateName, validateLastName, validateEmail } from "../../Validations/Validations";

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

const DivBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: -webkit-fill-available;

    @media(min-width: 930px)
    {
        margin-top: 30px;
    }
`

const Div = styled.div`
    box-sizing: border-box;
    width: auto;
    display:block; 
    


    @media (min-width: 930px) 
    {
        width: 50%;
        padding: 0 80px;
    }
`

const CropContainer = styled.div`
  position: relative;
  width: 175px;
  height: 175px;
  transform: translate(-5.8%, -5.8%);
`;

const CropPreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const ErrorMessage = styled.p`
    box-sizing: border-box;
    color: ${colorPrimario};
    margin-top: -30px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 70%;
    margin-left: 7px;

    @media (max-width: 939px)
    {
        margin-right: -85px;
    }
`


const SignIn = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [editor, setEditor] = useState(null);

    const [name, setName] = useState("");
    const [errorName, setErrorName] = useState({
        name: {
            error: false,
            message: ""
        }
    });

    const [lastName, setLastName] = useState("");
    const [errorLastName, setErrorLastaName] = useState({
        lastName: {
            error: false,
            message: ""
        }
    });

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState({
        email: {
            error: false,
            message: ""
        }
    })

    const [phone, setPhone] = useState("");
    const [errorPhone, setErrorPhone] = useState({
        phone: {
            error: false,
            message: ""
        }
    });

    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState({
        password: {
            error: false,
            message: ""
        }
    });

    const [confPass, setConfPass] = useState("");
    const [errorConfPass, setErrorConfPass] = useState({
        confPass: {
            error: false,
            message: ""
        }
    });
    const [verifyPass, setVerifyPass] = useState({
        verifyPass: {
            verify: false,
            message: ""
        }
    })
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleSave = () => {
        if (editor) {
          const canvas = editor.getImage();
          const dataURL = canvas.toDataURL(); // Aquí obtienes la imagen recortada
          console.log(dataURL);
        }
      };

    return(
        <Contenedor>
            <Formulario action="">
                <DivFoto>
                    <Etiqueta htmlFor="foto">Foto de perfil: </Etiqueta>
                    <InputFoto>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {selectedImage ? (
                        <CropContainer>
                            <AvatarEditor
                            ref={(editor) => setEditor(editor)}
                            image={selectedImage}
                            width={150} // Ajusta según tus necesidades
                            height={150} // Ajusta según tus necesidades
                            border={10}
                            color={[255, 255, 255, 0.6]} // Color del fondo del editor
                            scale={1.2} // Ajusta según tus necesidades
                            />
                            <CropPreview src={selectedImage} alt="Avatar" />
                        </CropContainer>
                        ) : null}
                        </InputFoto>
                </DivFoto>

                <Div>
                    <Etiqueta htmlFor="nombre">Nombre: </Etiqueta> 
                    <CampoTexto 
                        id="nombre" 
                        type="text" 
                        placeholder="Ingrese su nombre(s)" 
                        error = {errorName && errorName.name && errorName.name.error}
                        value = {name}
                        onChange = {(e) => {
                            setName(e.target.value);
                        }}
                        onBlur = { (e) => {
                            setErrorName(validateName(e.target.value));
                        }}
                        required
                    />
                    {errorName.name.error && (
                        <ErrorMessage> {errorName.name.message} </ErrorMessage>
                    )}
                </Div>
        
                <Div>
                
                    <Etiqueta htmlFor="apellido">Apellido: </Etiqueta>
                    <CampoTexto 
                        id="apellido" 
                        type="text" 
                        placeholder="Ingrese su apellido(s)"
                        error = {errorLastName && errorLastName.name && errorLastName.lastName.error}
                        value = {lastName}
                        onChange = { (e) => {
                            setLastName(e.target.value);
                        }}
                        onBlur = { (e) => {
                            setErrorLastaName(validateLastName(e.target.value))
                        }}
                        required
                    />
                    {errorLastName.lastName.error && (
                        <ErrorMessage> {errorLastName.lastName.message} </ErrorMessage>
                    )}
                </Div>
            
                <Div>
                    <Etiqueta htmlFor="email">Correo electrónico: </Etiqueta>
                    <CampoTexto 
                        id="email" 
                        type="email" 
                        placeholder="Ingrese su correo electrónico"
                        error = {errorEmail && errorEmail.email && errorEmail.email.error}
                        value = {email}
                        onChange = { (e) => {
                            setEmail(e.target.value);
                        }}
                        onBlur = { (e) => {
                            setErrorEmail(validateEmail(e.target.value))
                        }}
                        required
                    />
                    {errorEmail.email.error && (
                        <ErrorMessage> {errorEmail.email.message} </ErrorMessage>
                    )}
                </Div>
            
                <Div>
                    <Etiqueta htmlFor="celular">Celular: </Etiqueta>
                    <CampoTexto 
                        id="celular" 
                        type="tel" 
                        placeholder="Ingrese su número celular"
                        pattern="[0-9]*"
                    />
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