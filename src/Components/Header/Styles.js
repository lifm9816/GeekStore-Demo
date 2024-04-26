import styled from "styled-components";
import { Btn } from "../UI";
import { btnLogIn, btnSignIn, colorPrimario } from "../UI/Variables";

export const BtnLogIn = styled(Btn)`
    background-color: ${btnLogIn};

    @media (max-width: 799px)
    {
        display: none;
    }
`

export const BtnSignIn = styled(Btn)`
    background-color: ${btnSignIn};

    @media (max-width: 799px)
    {
        display: none;
    }
`

export const StyledHeader = styled.nav`
    background-color: ${colorPrimario};
    display: flex;
    justify-content: space-evenly;
    height: auto;
    align-items: center;
    box-sizing: border-box;
`

export const Logo = styled.img`
    box-sizing: border-box;

    @media (max-width: 800px)
    {
        margin: auto;
        width: 250px;
    }

    @media (min-width: 801px)
    {
        width: 100%;

    }
        
`