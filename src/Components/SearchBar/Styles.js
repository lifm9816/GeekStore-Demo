import styled from "styled-components";

export const Search_Bar = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 50px;
    margin: 10px;

    @media (max-width: 800px)
    {
        margin: 10px auto;
    }

`

export const Search_Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex:1;
`

export const Logo = styled.img`
    max-width: 50px;
    z-index: 1;
    border-radius: 50% 0 0 50%;
`

export const Search = styled.input`
    text-align: center;
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 10px 40px 10px 10px;
    border-radius: 5px;
`

export const Button = styled.button`
    background-color: #19222D;
    color: #FFFFFF;
    border: none;
    padding: 18px;
    border-radius: 0 50% 50% 0;
    cursor: pointer;
`