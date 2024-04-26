import { Card, ImageDiv, ProductImage, Info, Title, Price, BtnDiv, AddBtn, ViewBtn } from "./Styles"

const SearchCard = (props) => {
    const { photo, title, description, price } = props.data;

    return (
        <Card>
            <ImageDiv>
                <ProductImage src = {photo} alt = {title} />
            </ImageDiv>
            <Info>
                <Title> { title } </Title>
                <Price> { `$ ${price.toFixed(2)}` } </Price>
                <BtnDiv>
                    <AddBtn>Agregar</AddBtn>
                    <ViewBtn>Ver</ViewBtn>
                </BtnDiv>
            </Info>
        </Card>

    )
}

export default SearchCard;