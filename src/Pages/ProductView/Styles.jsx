import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin:3% 10%;
    margin-bottom: 20%;

    @media(max-width:900px){
        margin: 5% ;
        margin-bottom: 30%;
        
    }

    @media(min-width: 800px){
        flex-direction: row;
    }
`

export const ImagesContainer = styled.div`
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    height: 600px;
    width: 100%;
    background-color: ${ ({theme}) => theme.primary };
    padding: 10px;
    
    @media(max-width:900px){
        height: 250px;
    }
    
    @media(max-height:500px){
        height: 300px;
    }

    @media(min-width:1600px){
        height: 800px;
    }
`

export const Title = styled.h1`
    color: ${ ({ theme }) => theme.product_title };

    @media(min-width: 800px){
        margin-right: 5%;
    }
`

export const ProductImage = styled.img`
    border-radius: 20px;
    box-sizing: border-box;
    
    @media(max-width: 900px){
        height: 100%;
    }
`
