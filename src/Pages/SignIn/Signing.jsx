import React, { useEffect, useState } from "react";
import AvatarEditor from 'react-avatar-editor';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Formulario, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";
import { CrearCuenta, DivFoto, InputFoto, DivBtn, Div, CropContainer, CropPreview, ErrorMessage, ConfirmMessage, PasswordInput, ShowPasswordButton } from "./Styles";
import def_user from "../../assets/Images/def-user.png"
import portada from "../../assets/Images/portada_miles.jpeg"
import { validateName, validateLastName, validateEmail, validatePhone, ValidatePassword, confirmPassword } from "../../Validations/Validations";
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom";
import { useSession } from "../../Contexts/SessionContext";

const SignIn = (props) => {

    const { handleUserLogin } = useSession();
    const history = useNavigate();

    useEffect(() => {
        document.title = "GeekStore | Crear Cuenta";
    }, []);

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
    const formatPhoneNumber = (value) => {
        const phoneNumber = value.replace(/\D/g, "");
        const formattedPhoneNumber = phoneNumber
        .replace(/(\d{3})(\d)/, "$1 $2")
        .replace(/(\d{3})(\d)/, "$1 $2")
        .replace(/(\d{4})$/, "$1");
        return formattedPhoneNumber;
    };
    const handlePhoneChange = (e) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        setPhone(formattedValue);
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfPass, setShowConfPass] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    
    const handleToggleConfPass = () => {
        setShowConfPass(!showConfPass);
    };

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
            verify: false,
            message: ""
        }
    });
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result;
                setSelectedImage(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (editor) {
          const canvas = editor.getImage();
          const dataURL = canvas.toDataURL(); // Aquí obtienes la imagen recortada
          return dataURL;
        }
        else {
            return null;
        }
      };


    const handleSubmit = () => {
        const photo = handleSave();
        if(photo) {
            const newUser = {
                id: uuid(),
                photo: photo,
                name,
                lastName,
                email,
                phone,
                password,
                role: "cliente",
                font: portada
            };

            props.updateUsers([...props.users, newUser]); // Corregido aquí, usa props.updateUsers

            localStorage.setItem('users', JSON.stringify(props.updateUsers)); // Corregido aquí, usa props.updateUsers

            // Agregar la función handleUserLogin para establecer al usuario como activo
            handleUserLogin(newUser);
        }
        else {
            const newUser = {
                id: uuid(),
                photo: def_user,
                name,
                lastName,
                email,
                phone,
                password,
                role: "cliente",
                font: portada
            };

            props.updateUsers([...props.users, newUser]); // Corregido aquí, usa props.updateUsers

            localStorage.setItem('users', JSON.stringify(props.updateUsers)); // Corregido aquí, usa props.updateUsers

            // Agregar la función handleUserLogin para establecer al usuario como activo
            handleUserLogin(newUser); 
        }
        // Redirigir a la página de inicio
        history('/'); // Cambia '/' por la ruta de tu página de inicio
    }  


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
                        error = { errorPhone && errorPhone.phone && errorPhone.phone.error }
                        value = { phone }
                        onChange={handlePhoneChange}
                        onBlur = { (e) => {
                            setErrorPhone(validatePhone(e.target.value));
                        }}
                        required
                    />
                    { errorPhone.phone.error && (
                        <ErrorMessage> {errorPhone.phone.message} </ErrorMessage>
                    )}
                </Div>

                <Div>
                    <Etiqueta htmlFor="password">Contraseña: </Etiqueta>
                    <PasswordInput 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="Ingrese su contraseña"
                        error = { errorPassword && errorPassword.password && errorPassword.password.error }
                        value = { password }
                        onChange = { (e) => {
                            setPassword(e.target.value);
                        }}
                        onBlur = { (e) => {
                            setErrorPassword(ValidatePassword(e.target.value))
                        }}
                        required
                    />
                    <ShowPasswordButton type = "button" onClick={handleTogglePassword}>
                        { showPassword ? <IoEyeOff /> : <IoEye /> }
                    </ShowPasswordButton>
                    { errorPassword.password.error && (
                        <ErrorMessage> {errorPassword.password.message} </ErrorMessage>
                    )}
                </Div>
            
                <Div>
                    <Etiqueta htmlFor="password-confirm">Confirmar contraseña: </Etiqueta>
                    <PasswordInput 
                        id="password-confirm" 
                        type={showConfPass ? "text" : "password"}
                        placeholder="Confirme su contraseña"
                        error = { errorConfPass && errorConfPass.confPass && errorConfPass.confPass.error }
                        value = { confPass } 
                        onChange = { (e) => {
                            setConfPass(e.target.value);
                        }}
                        onBlur = { (e) => {
                            setErrorConfPass(confirmPassword(password, e.target.value))
                        }}
                        required
                    />
                    <ShowPasswordButton type = "button" onClick={handleToggleConfPass}>
                        { showConfPass ? <IoEyeOff /> : <IoEye /> }
                    </ShowPasswordButton>
                    { errorConfPass.confPass.error && (
                        <ErrorMessage> {errorConfPass.confPass.message} </ErrorMessage>
                    )}
                    { errorConfPass.confPass.verify && (
                        <ConfirmMessage> {errorConfPass.confPass.message} </ConfirmMessage>
                    )}
                </Div>

                <DivBtn>
                    <CrearCuenta onClick={handleSubmit} >Crear cuenta</CrearCuenta>
                </DivBtn>

            </Formulario>
        </Contenedor>


    )
}

export default SignIn;