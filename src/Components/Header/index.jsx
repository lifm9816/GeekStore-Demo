import React from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { BtnLogIn, BtnSignIn, StyledHeader, Logo } from "./Styles";

const Header = () =>{
    return(
        <StyledHeader>
            <div></div>
            <div>
                <Link to="/">
                    <Logo src={logo} alt = "Logo de GeekStore" />
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