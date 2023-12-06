import React, { useEffect, useState } from "react";
import AvatarEditor from 'react-avatar-editor';
import styled from "styled-components";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { btnSignIn, colorPrimario } from "../../Components/UI/Variables";
import { Formulario, Btn, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";
import def_user from "../../assets/Images/def-user.png"
import { validateName, validateLastName, validateEmail, validatePhone, ValidatePassword, confirmPassword } from "../../Validations/Validations";
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom";
import portada from "../../assets/Images/portada_miles.jpeg"

const Container = styled(Contenedor)`
    margin-top: 0px;
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

        display: flex;
        flex-direction: column;
        align-items: start;
        width:-webkit-fill-available;
        background-image: #f0f0f0 ;
        height: 200px;
        background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
        background-position: center; /* Centra la imagen */

        input{
            display: none;
        }

        @media (min-width: 931px) {
            height: 400px;
        }
    
`

const InputFoto = styled.label`
    position: relative;
    border: 10px solid ${colorPrimario};
    display: inline-block;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background: #F0F0F0 center center / cover no-repeat;
    cursor: pointer;
    margin: 15px 5%;
    overflow: hidden;
    input{
        display: none;
    }
    bottom: -53%;

    @media (min-width: 931px){
        bottom: -77%;
    }
`

const Info = styled.div`
    font-size: 35px;
    font-weight: bold;
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
    background-color: red;
    font-weight: 600;
    color: #FFFFFF;
    margin-top: -25px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 90%;

    border-radius: 10px;
    padding: 2px 2px 2px 7px;

    @media (max-width: 939px)
    {
        margin-right: -151px;
    }
`

const ConfirmMessage = styled.p`
    box-sizing: border-box;
    background-color: #AAD936;
    font-weight: 600;
    color: #FFFFFF;
    margin-top: -25px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 90%;
    border-radius: 10px;
    padding: 2px 2px 2px 7px;

    @media (max-width: 939px)
    {
        margin-right: -151px;
    }
`

const PasswordInput = styled.input`
    box-sizing: border-box;
    border-radius: 10px 0 0 10px;
    padding: 5px 10px;
    border: none;
    font-size: 20px;
    margin-bottom: 10px;
    width: calc(100% - 60px);
    margin-bottom: 30px;
    margin-top: 10px;
    outline: none;
`;

const ShowPasswordButton = styled.button`
    background-color: ${colorPrimario};
    color: #F9F9F9;
    border-radius: 0 10px 10px 0;
    border: none;
    padding: 5.5px;
    font-size: 18px;
    cursor: pointer;
`;


const Account = (props) => {

    const { photo, name, lastName, font } = props.data || {}; // Uso de destructuring con un objeto vacío por defecto

    const history = useNavigate();

    useEffect(() => {
        document.title = "GeekStore | Crear Cuenta";
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);
    const [editor, setEditor] = useState(null);

    

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
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
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
                role: "cliente"
            };

            props.updateUsers([...props.users, newUser]); // Corregido aquí, usa props.updateUsers

            localStorage.setItem('users', JSON.stringify(props.updateUsers)); // Corregido aquí, usa props.updateUsers
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
                role: "cliente"
            };

            props.updateUsers([...props.users, newUser]); // Corregido aquí, usa props.updateUsers

            localStorage.setItem('users', JSON.stringify(props.updateUsers)); // Corregido aquí, usa props.updateUsers
        }

        
        // Después de crear la cuenta con éxito, establece isLoggedIn como true
        props.setIsLoggedIn(true);

        // Almacena el estado de inicio de sesión en el Local Storage
        localStorage.setItem('isLoggedIn', true); 
        
        // Redirigir a la página de inicio
        history('/'); // Cambia '/' por la ruta de tu página de inicio
    }  


    return(
        <Container>
            <DivFoto style={{ backgroundImage: `url(${font})` }}>
                <InputFoto style={{ backgroundImage: `url(${photo})` }}>
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
            <Info>{`${name} ${lastName}`}</Info>
        </Container>


    )
}

export default Account;