import { useState, useEffect } from "react";
import "./MobileNav.css"
import { AiFillHome, AiOutlineSearch} from "react-icons/ai";
import { HiUserAdd } from "react-icons/hi";
import { BsCircleHalf} from "react-icons/bs";
import logo from "../../assets/Images/icon.png"
import { Link, useLocation } from "react-router-dom";


const MobileNav = () =>
{
    const [activeIndex, setActiveIndex] = useState(0);
    const { pathname } = useLocation();//Destructura pathname directamente

    useEffect(() => {

        //Definición de mapa de rutas a índices
        const pathToIndex = {
            "/":0,
            "/search": 1,
            "/about": 2,
            "/login": 3,
            "/signin": 3,
            "/theme": 4,
        };

        //Estableciendo el valor de activeIndex en función de la ruta actual
        setActiveIndex(pathToIndex[pathname]);
    },[pathname]);

    return(
        <div className="navigation">
            <ul>
                <li className={`list ${activeIndex === 0 ? 'active' : ''}`}>
                    <Link to="/" >
                        <a href="#" onClick={() => setActiveIndex(0)}>
                            <span className="icon">
                                <AiFillHome/>
                            </span>
                            <span className="text">Inicio</span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 1 ? 'active' : ''}`}>
                    <a href="#" onClick={() => setActiveIndex(1)}>
                        <span className="icon">
                            <AiOutlineSearch/>
                        </span>
                        <span className="text">Buscar</span>
                    </a>
                </li>
                <li className={`list ${activeIndex === 2 ? 'active' : ''}`}>
                    <Link to="/about">
                        <a href="#" onClick={() => setActiveIndex(2)}>
                            <span className="icon">
                                <img className="logo_movil" src={logo} alt="" />
                            </span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 3 ? 'active' : ''}`}>
                    <Link to = "/login">
                        <a href="#" onClick={() => setActiveIndex(3)}>
                            <span className="icon">
                                <HiUserAdd />
                            </span>
                            <span className="text">Log In</span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 4 ? 'active' : ''}`}>
                    <a href="#" onClick={() => setActiveIndex(4)}>
                        <span className="icon">
                            <BsCircleHalf/>
                        </span>
                        <span className="text">Tema</span>
                    </a>
                </li>
                <div className="indicator"></div>      
            </ul>
        </div>
    )
}

export default MobileNav;