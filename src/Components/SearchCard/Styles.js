import styled from "styled-components";
import { colorPrimario, colorSecundario } from "../UI/Variables";



export const Card = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    margin-bottom: 24px;
    position: relative;
    display: flex;
    flex-direction: row;
`

export const ProductImage = styled.img`
    height: 100%;
    width: auto;
    border-radius: 5px;
    position: relative;
`

export const Info = styled.div`
    background-color: ${ ({ theme }) => theme.chart_color};
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 10px 10px 0px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const Title = styled.h4`
    color: ${ ({ theme }) => theme.chart_title};
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`

export const Price = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: ${ ({ theme }) => theme.chart_price };
    padding: 0 24px;
    font-weight: bold;
    margin: 0;
`

export const BtnDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
`

export const AddBtn = styled.button`
    background-color: ${ ({ theme }) => theme.add_button };
    border-radius: 7px;
    color: #F9F9F9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border:none;
    font-weight: bold;
`

export const ViewBtn = styled.button`
    background-color: ${ ({ theme }) => theme.view_button };
    border-radius: 7px;
    color: #F9F9F9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border: none;
    font-weight: bold;
`