import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Creacción de contexto para manejo de inicio de sesión, sesión activa y cierre de sesión
export const SessionContext = createContext();

//Creación del componente proveedor para el contexto inicio de sesión, sesión activa y cierre de sesión
export const SessionProvider = ({children}) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false); // Estado que establece si el usuario está loggeado en la página o no
    const [ activeUser, setActiveUser ] = useState(null); // Estado para almacenar al usuario activo
    const [ userData, setUserData ] = useState(null);  // Define el estado de los datos del usuario

    //Función para manejar el inicio de sesión
    const handleUserLogin = ( user ) => {
        setActiveUser(user); // Establece el usuario que inicio sesión como activo
        setIsLoggedIn(true); // Establece el estado de inicio de sesión como verdadero
        setUserData(user); // Actualiza el estado de userData con los datos del usuario
        localStorage.setItem("isLoggedIn", true); // Guardar el estado de inicio de sesión en localStorage
        localStorage.setItem("userData", JSON.stringify(user)) // Guardar los datos del usuario en localStorage
    }

    //Función para cerrar sesión
    const handleLogout = () => {
        setIsLoggedIn(false); // Ya que se cierra sesión, elimina la sesión anterior y establece el estado como falso
        setUserData(null); // Actualiza el estado de userData, con valores nulos
        setActiveUser(null); // Ya que se cierra sesión, estable como la nula la información
        localStorage.removeItem("isLoggedIn"); // Elimina el estado de inicio de sesión en localStorage
        localStorage.removeItem("userData"); // Elimina los datos de la sesión del localStorage 
    }

    const handleUserData = ( userData ) => {
        setUserData( userData ); // Actualiza el estado de los datos del usuario
        localStorage.setItem( "userData", JSON.stringify(userData)); //Guarda los datos en el localStorage
    }

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        const userData = localStorage.getItem("userData");
        const activeUser = localStorage.getItem("userData");
        if( loggedIn && userData && activeUser ){
            setIsLoggedIn( true );
            setUserData( JSON.parse( userData ) );
            setActiveUser({ role: JSON.parse( userData ).role });
        }
    }, []);

    //Definición del valor de contexto
    const contextValue = {
        isLoggedIn,
        activeUser,
        userData,
        handleUserLogin,
        handleLogout,
        handleUserData
    };

    // Se retorna el proveedor del contexo con los hijos(valores del contexto)
    return <SessionContext.Provider value = { contextValue }> { children } </SessionContext.Provider>;
}

// Función para usar el contexto en los componentes hijos
export const useSession = () => useContext(SessionContext);