import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formulario, Etiqueta, Input, BtnCuenta, IniciarSesion, CrearCuenta, DivBtn, DivInput } from "./Styles";
import { Contenedor } from "../../Components/UI";
import { useSession } from "../../Contexts/SessionContext";

const Login = ({ users }) =>{

    const { handleUserLogin } = useSession();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = "GeekStore | Iniciar Sesión";
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password); // Verifica si los valores se capturan correctamente
    
        // Lógica de autenticación
        const user = users.find((u) => u.email === email && u.password === password);
    
        if (user) {
            handleUserLogin(user); // Establece el usuario activo
          // Redirecciona al home
          navigate("/");
        } else {
          // Manejar credenciales incorrectas o usuario no encontrado
          console.log("Credenciales incorrectas");
        }
      };

    return(
        <Contenedor>
            <Formulario onSubmit={handleLogin}>
                <DivInput>
                    <Etiqueta htmlFor="correo">Correo:</Etiqueta>
                    <Input type="email"
                        id="correo"
                        placeholder="Ingrese su correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </DivInput>
                
                <DivInput>
                    <Etiqueta htmlFor="contraseña" >Contraseña: </Etiqueta>
                    <Input type="password"
                        id="contraseña"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </DivInput>
                
                <DivBtn>
                    <Link to="/signin">
                        <CrearCuenta>Crear cuenta</CrearCuenta>
                    </Link>
                    <IniciarSesion >Iniciar Sesión</IniciarSesion>
                </DivBtn>
            </Formulario>    
        </Contenedor>
    )
}

export default Login;