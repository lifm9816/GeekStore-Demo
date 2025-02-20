import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BtnLogIn, BtnSignIn, StyledHeader, Logo } from "./Styles";
import { ThemeContext } from "../../App";
import { Dark, Light } from "../UI/Themes";

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const themeStyle = theme === "light" ? Light : Dark;

    return(
        <StyledHeader>
            <div></div>
            <div>
                <Link to="/">
                    <Logo src={themeStyle.logo} alt="Logo de GeekStore" />
                </Link>    
            </div>
            <div>
                <Link to="/login">
                    <BtnLogIn>Log In</BtnLogIn>
                </Link>
                <BtnSignIn>Sign In</BtnSignIn>
            </div>
        </StyledHeader>
    )
}

export default Header;