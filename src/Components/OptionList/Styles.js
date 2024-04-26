import styled from "styled-components"

export const Select = styled.select`
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 10px;
    border: none;
    font-size: 20px;
    margin-bottom: 30px;
    margin-top:10px;
    width: auto;
    outline: none;

    @media(min-width: 930px)
    {
        width: -webkit-fill-available;
        margin-right: 35px;
    }
`