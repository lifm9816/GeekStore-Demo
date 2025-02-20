import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { colorPrimario, colorSecundario } from "../UI/Variables";

export const Card = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 175px;
    margin-bottom: 24px;
    position: relative;
    display: flex;
    flex-direction: row;
`

export const ProductImage = styled.img`
    height: 100%;
    width: fit-content;
    border-radius: 5px;
    position: relative;
    border-radius: 10px 0px 0px 10px;
`

export const Info = styled.div`
    background-color: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 10px 10px 0px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const Title = styled.h4`
    color: ${colorPrimario};
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`

export const Price = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: ${colorSecundario};
    padding: 0 24px;
    font-weight: bold;
    margin: 0;
`

export const QuantityDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
`

export const QuantityMessage = styled.label`
    background-color: ${colorPrimario};
    border-radius: 7px;
    color: #F9F9F9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border:none;
    font-weight: bold;
`

export const Quantity = styled.input`
    background-color: ${colorSecundario};
    border-radius: 7px;
    color: #F9F9F9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border: none;
    font-weight: bold;
`

export const DeleteButton = styled(AiFillCloseCircle)`
    position: absolute;
    right: 2px;
    top: 2px;
    font-size: 32px;
    cursor: pointer;
    color: ${colorPrimario};
`;