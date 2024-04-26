import styled from "styled-components";
import { colorPrimario, colorSecundario } from "../UI/Variables";

export const CardProduct = styled.div`
    width: 280px;
    margin-bottom: 24px;
    position: relative;
`

export const Header = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px 10px 0px 0px;
`

export const ProductImage = styled.img`
    width: 100px;
    max-height: 128.5px;
    border-radius: 5px;
    position: relative;
    bottom: -50px;
`

export const Info = styled.div`
    background-color: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 50px;
    padding-bottom: 40px;
    min-height: 100px;
`

export const Title = styled.h4`
    color: ${colorPrimario};
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`

export const Description = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 24px;
    font-weight: 400;
    margin: 0;
`

export const Price = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: ${colorSecundario};
    padding: 0 24px;
    font-weight: bold;
    margin: 0;
`

export const BtnDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
`

export const AddBtn = styled.button`
    background-color: ${colorPrimario};
    border-radius: 7px;
    color: #F9F9F9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border:none;
    font-weight: bold;
`

export const ViewBtn = styled.button`
    background-color: ${colorSecundario};
    border-radius: 7px;
    color: #F9F9F9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border: none;
    font-weight: bold;
`