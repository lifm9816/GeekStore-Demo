import { useState } from "react";
import "./MobileNav.css"
import { AiFillHome, AiOutlineSearch} from "react-icons/ai";
import { HiUserAdd } from "react-icons/hi";
import { BsCircleHalf} from "react-icons/bs";
import logo from "../../assets/Images/icon.png"
import { Link } from "react-router-dom";


const MobileNav = () =>
{
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
      setActiveIndex(index);
    };

    return(
        <div className="navigation">
            <ul>
                <li className={`list ${activeIndex === 0 ? 'active' : ''}`}>
                    <Link to="/" >
                        <a href="#" onClick={() => handleItemClick(0)}>
                            <span className="icon">
                                <AiFillHome/>
                            </span>
                            <span className="text">Inicio</span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 1 ? 'active' : ''}`}>
                    <a href="#" onClick={() => handleItemClick(1)}>
                        <span className="icon">
                            <AiOutlineSearch/>
                        </span>
                        <span className="text">Buscar</span>
                    </a>
                </li>
                <li className={`list ${activeIndex === 2 ? 'active' : ''}`}>
                    <a href="#" onClick={() => handleItemClick(2)}>
                        <span className="icon">
                            <img className="logo_movil" src={logo} alt="" />
                        </span>
                    </a>
                </li>
                <li className={`list ${activeIndex === 3 ? 'active' : ''}`}>
                    <Link to = "/login">
                        <a href="#" onClick={() => handleItemClick(3)}>
                            <span className="icon">
                                <HiUserAdd />
                            </span>
                            <span className="text">Log In</span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 4 ? 'active' : ''}`}>
                    <a href="#" onClick={() => handleItemClick(4)}>
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