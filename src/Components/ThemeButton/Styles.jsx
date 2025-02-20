import styled from "styled-components";

export const ButtonContainer = styled.div`
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 100px;
    right: 0;
    margin: 10px;
    

    @media(min-width: 800px){
        margin: 20px;
    }
`

export const TButton = styled.div`
    background-color: ${ ({theme}) => theme.primary };
    color: ${ ({ theme }) => theme.text_menu };
    cursor: pointer;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    border-color: ${ ({theme}) => theme.primary };
    text-align: center;
    align-content: center;
`