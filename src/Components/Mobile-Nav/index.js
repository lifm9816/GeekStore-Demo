import { useState, useEffect } from "react";
import "./MobileNav.css"
import { AiFillHome, AiOutlineSearch} from "react-icons/ai";
import { HiUserAdd, HiUser } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { BsCircleHalf} from "react-icons/bs";
import { MdAssignmentAdd, MdAssignmentReturn } from "react-icons/md";
import { Link, useLocation, useParams } from "react-router-dom";
import CartIcon from "../CartIcon";
import { useCart } from "../../Contexts/CartContext";
import { useSession } from "../../Contexts/SessionContext";
import { NavBar } from "./Styles";
import { ThemeContext } from "../../App";
import { Light, Dark } from "../UI/Themes";
import React, { useContext } from "react";


const MobileNav = () =>
{

    const { isLoggedIn, userData } = useSession();
    const { cartItems, getTotalItems } = useCart();
    const [activeIndex, setActiveIndex] = useState(0);
    const { pathname } = useLocation();//Destructura pathname directamente
    const productId = useParams()

    const { theme } = useContext(ThemeContext);
    const themeStyle = theme === "light" ? Light : Dark;

    useEffect(() => {

        //Definición de mapa de rutas a índices
        const pathToIndex = {
            "/": 0,
            "/product/:id": 0,
            "/search": 1,
            "/about": 2,
            ...(isLoggedIn
              ? { "/account": 3 }
              : { "/login": 3, "/signin": 3 }
            ),
            ...( isLoggedIn && userData.role === "administrador"
                ?{"/productRegister":4}    
                : {"/shopping": 4})
        };

        // Si la URL tiene un productId, trata de mapearlo
        if (pathname.includes("/product")) {
            setActiveIndex(0); // El índice 0 puede usarse para productos
        } else {
            setActiveIndex(pathToIndex[pathname]);
        }
        
        //Estableciendo el valor de activeIndex en función de la ruta actual
        
    },[pathname, isLoggedIn]);

    return(
        <NavBar className = "navigation">
            <ul>
                <li className={`list ${activeIndex === 0 ? 'active' : ''}`}>
                    <Link to={pathname === "/" || pathname.includes("/product") ? "/" : "/" }>
                        <a href="#" onClick={() => setActiveIndex(0)}>
                            <span className="icon">
                                {pathname === "/" ? <AiFillHome/> : pathname.includes("/product") ? <MdAssignmentReturn /> : <AiFillHome />}
                            </span>
                            <span className="text">{pathname === "/" ? "Inicio" : pathname.includes("/product") ? "Regresar" : "Inicio"}</span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 1 ? 'active' : ''}`}>
                    <Link to="/search">
                        <a href="#" onClick={() => setActiveIndex(1)}>
                            <span className="icon">
                                <AiOutlineSearch/>
                            </span>
                            <span className="text">Buscar</span>
                        </a>
                    </Link>    
                </li>
                <li className={`list ${activeIndex === 2 ? 'active' : ''}`}>
                    <Link to="/about">
                        <a href="#" onClick={() => setActiveIndex(2)}>
                            <span className="icon">
                                <img className="logo_movil" src={themeStyle.icon} alt="" />
                            </span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 3 ? 'active' : ''}`}>
                    <Link to = {isLoggedIn ? "/account" : "/login"}>
                        <a href="#" onClick={() => setActiveIndex(3)}>
                            <span className="icon">
                            {isLoggedIn ? <HiUser /> : <HiUserAdd />}
                            </span>
                            <span className="text">{isLoggedIn ? "Cuenta" : "Log In"}</span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 4 ? 'active' : ''}`}>
                    <Link to = {isLoggedIn && userData.role === "administrador" ? "/productRegister" : "/shopping"}>
                        <a href="#" onClick={() => setActiveIndex(4)}>
                            { isLoggedIn && userData.role === "administrador" ? 
                            <span className="icon">
                                <MdAssignmentAdd /> 
                            </span>: <CartIcon className={`list ${activeIndex === 4 ? 'active' : ''}`} itemCount={getTotalItems()}/>}
                            
                            <span className="text">{ isLoggedIn && userData.role === "administrador" ? "Producto +" : "Carrito"}</span>
                        </a>
                    </Link>
                </li>
                <div className="indicator"></div>      
            </ul>
        </NavBar>
    )
}

export default MobileNav;