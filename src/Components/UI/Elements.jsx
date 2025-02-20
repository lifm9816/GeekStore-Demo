import styled from "styled-components";

export const NavContainer = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.body };
    transition: ${({ theme }) => theme.transition };
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
`