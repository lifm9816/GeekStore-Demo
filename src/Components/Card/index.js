import styled from "styled-components";
import { colorPrimario, colorSecundario } from "../UI/Variables";

const Card = styled.div`
    width: 280px;
    margin-bottom: 24px;
    position: relative;
`

const Header = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px 10px 0px 0px;
`

const ProductImage = styled.img`
    width: 100px;
    border-radius: 20px;
    position: relative;
    bottom: -50px;
`

const Info = styled.div`
    background-color: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;
    min-height: 100px;
`

const Title = styled.h4`
    color: ${colorPrimario};
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`

const Description = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 24px;
    font-weight: 400;
    margin: 0;
`

const Price = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: ${colorSecundario};
    padding: 0 24px;
    font-weight: 400;
    margin: 0;
`

const Product = (props) => {
    const { photo, title, description, price } = props.data;
    const { background } = props;

    return (
        <Card>
            <Header style = {{backgroundImage: background}} >
                <ProductImage src = {photo} alt = {title} />
            </Header>
            <Info>
                <Title> {title} </Title>
                <Description> {description} </Description>
                <Price> {price} </Price>
            </Info>
        </Card>
    )
}

export default Product;