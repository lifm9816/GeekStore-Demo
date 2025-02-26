import { useNavigate } from "react-router-dom";
import { Card, ImageDiv, ProductImage, Info, Title, Price, BtnDiv, AddBtn, ViewBtn } from "./Styles"

const SearchCard = (props) => {
    
    const navigate = useNavigate();
    
    const { photo, title, description, price } = props.data;

    const handleViewProduct = () => {
        navigate(`/product/${props.data.id}`)
    }

    return (
        <Card>
            
            <ProductImage src = {photo} alt = {title} />
            
            <Info>
                <Title> { title } </Title>
                <Price> { `$ ${price.toFixed(2)}` } </Price>
                <BtnDiv>
                    <AddBtn>Agregar</AddBtn>
                    <ViewBtn onClick = { handleViewProduct } >Ver</ViewBtn>
                </BtnDiv>
            </Info>
        </Card>

    )
}

export default SearchCard;