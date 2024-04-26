import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import { CardProduct, Header, ProductImage, Info, Title, Description, Price, BtnDiv, AddBtn, ViewBtn } from "./Styles";

const Card = (props) => {
    const { photo, title, price } = props.data;

    const { marcas, addToCart } = props;
    
    const brandBackground = marcas.find((marca) => marca.brand === props.data.brand)?.background;

    const handleAddToCart = () => {
        addToCart({
            ...props.data,
            quantity: 1
        });
        console.log("Producto agregado al carrito con éxito");
    };

    return (
        <CardProduct>
            <Header style = {{backgroundImage: `url(${brandBackground})`}} >
                <ProductImage src = {photo} alt = {title} />
            </Header>
            <Info>
                <Title> {title} </Title>
                <Price> {`$ ${price.toFixed(2)}`} </Price>
                <BtnDiv>
                    <AddBtn onClick={handleAddToCart}>Agregar</AddBtn>
                    <ViewBtn>Ver</ViewBtn>
                </BtnDiv>
            </Info>
            
        </CardProduct>
    )
}

export default Card;