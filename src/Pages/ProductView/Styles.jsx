import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 5% 20%;
    margin-bottom: 20%;

    @media(max-width:900px){
        margin: 5% ;
        margin-bottom: 30%;
        
    }
`

export const ImagesContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    height: max-content;
    width: 100%;
    background-color: ${ ({theme}) => theme.primary };
    
    @media(max-width:900px){
        height: 10%;
    }
    
`

export const Title = styled.h1`
    color: ${ ({ theme }) => theme.product_title };
`

export const ProductImage = styled.img`
    border-radius: 20px;
    box-sizing: border-box;
    
    @media(max-width: 900px){
        scale: calc(0.5);
    }
`
