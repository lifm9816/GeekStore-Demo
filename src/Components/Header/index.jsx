import React from "react";
import styled from "styled-components";
import logo from "../../assets/Images/logo.png";
import { Btn } from "../UI";
import { btnLogIn, btnSignIn, colorPrimario } from "../UI/Variables";

const BtnLogIn = styled(Btn)`
    background-color: ${btnLogIn};

    @media (max-width: 799px)
    {
        display: none;
    }
`

const BtnSignIn = styled(Btn)`
    background-color: ${btnSignIn};

    @media (max-width: 799px)
    {
        display: none;
    }
`

const StyledHeader = styled.nav`
    background-color: ${colorPrimario};
    display: flex;
    justify-content: space-evenly;
    height: auto;
    align-items: center;
`

const Logo = styled.img`

@media (min-width: 375px)
{
    margin: 0 10px 0 50px;
    width: 250px;
}

@media (min-width: 800px)
{
    width: 100%;

}
    
`

const Header = () =>{
    return(
        <StyledHeader>
            <div></div>
            <div>
                <Logo src={logo} alt = "Logo de GeekStore" />
            </div>
            <div>
                <BtnLogIn>Log In</BtnLogIn>
                <BtnSignIn>Sign In</BtnSignIn>
            </div>
        </StyledHeader>
    )
}

export default Header;