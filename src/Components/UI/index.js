import styled from "styled-components";
import { btnLogIn, btnSignIn } from "./Variables";

export const Options = styled.img`
    height: 25px;
    width: 25px;
`

export const Btn = styled.button`
    border-radius: 5px;
    text-align: center;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 15px;

    @media (min-width: 375px)
    {
        transform: scale(.7);
    }

    @media (min-width: 800px)
    {
        height: 50px;
        width: 100px;
    }
`

export const Card = styled.div`
`