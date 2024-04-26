import React, { useEffect, useState } from "react";
import AvatarEditor from 'react-avatar-editor';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Container, CerrarSesion, EliminarCuenta, DivFoto, InputFoto, Info, DivBtn, InfoDiv, NameDiv, Div } from "./Styles";
import { useNavigate } from "react-router-dom";


const Account = (props) => {
    console.log(props)

    const { photo, name, lastName, font } = props.userData || {};

    const history = useNavigate();

    useEffect(() => {
        document.title = "GeekStore | Mi cuenta";

        // Verificar si hay un usuario conectado al cargar la página
        const isLoggedInStorage = localStorage.getItem("isLoggedIn");
        const userData = localStorage.getItem("userData");

        if (isLoggedInStorage && userData) {
            const user = JSON.parse(userData);
            props.setIsLoggedIn(true);
            props.setData(user);
        }
    }, []);

    const handleLogout = () => {
        // Lógica para cerrar sesión
        props.setIsLoggedIn(false); // Establece isLoggedIn como falso
        props.setData(null); // Elimina los datos del usuario
        localStorage.removeItem('isLoggedIn'); // Elimina el estado de inicio de sesión del Local Storage
        localStorage.removeItem('userData'); // Elimina los datos del usuario del Local Storage
        history('/'); // Redirige a la página de inicio de sesión
    };



    return(
        <Container>
            <DivFoto style={{ backgroundImage: `url(${font})` }} />

            <InfoDiv>
                <div>
                    <InputFoto style={{ backgroundImage: `url(${photo})` }}></InputFoto>
                </div>
                <NameDiv>
                {`${name} ${lastName}`}
                </NameDiv>
            </InfoDiv>
            <DivBtn>
                {/* Agrega un botón para cerrar sesión */}
                <CerrarSesion onClick={handleLogout}>Cerrar Sesión</CerrarSesion>
                <EliminarCuenta > Eliminar cuenta </EliminarCuenta>
            </DivBtn>
        </Container>


    )
}

export default Account;