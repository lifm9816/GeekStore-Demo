import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    height: 25%;
    border-radius: 20px;
    margin-top: 10px;
    justify-content: center;
    box-sizing: border-box;

    @media(max-width: 800px)
    {
        width: 100%;
        margin: 10px;
    }
`

export const Img = styled.img`
    border-radius: 20px;
`