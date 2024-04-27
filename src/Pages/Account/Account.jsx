import React, { useEffect, useState } from "react";
import AvatarEditor from 'react-avatar-editor';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Container, CerrarSesion, EliminarCuenta, DivFoto, InputFoto, Info, DivBtn, InfoDiv, NameDiv, Div } from "./Styles";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../Contexts/SessionContext";

const Account = (props) => {
    console.log(props)

    const { userData, handleLogout } = useSession();
    const { photo, name, lastName, font } = userData || {};

    const history = useNavigate();

    useEffect(() => {
        document.title = "GeekStore | Mi cuenta";
    }, []);


    const logOut = () => {
        handleLogout();
        history("/");
    }

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
                <CerrarSesion onClick={logOut}>Cerrar Sesión</CerrarSesion>
                <EliminarCuenta > Eliminar cuenta </EliminarCuenta>
            </DivBtn>
        </Container>


    )
}

export default Account;