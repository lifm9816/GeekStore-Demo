import { Card, ImageDiv, ProductImage, Info, Title, Price, QuantityDiv, QuantityMessage, Quantity, DeleteButton } from "./Styles";
import { useState } from "react";
import { useCart } from "../../Contexts/CartContext";

const ShoppingCard = (props) => {

  const {cartItems, removeFromCart, updateCartItemQuantity, getTotalItems} = useCart();

  const { photo, title, price, stock, marcas } = props.data || {};

  
  const cartProduct = cartItems.find(item => item.product.id === props.data.id)
  
  const [quantity, setQuantity] = useState(cartProduct ? cartProduct.quantity: 0);

  const handleQuantityChange = (newQuantity) => {
    const parsedQuantity = parseInt(newQuantity);
    if(!isNaN(parsedQuantity)){
      setQuantity(parsedQuantity);
      if(parsedQuantity <= stock) {
        updateCartItemQuantity(props.data.id, parsedQuantity);
        const totalItems = getTotalItems();
      }
    }
  }


  const handleDelete = () => {
      removeFromCart(props.data.id)
  };


  
    return (

      <Card>
        <DeleteButton onClick={handleDelete} />
        <ImageDiv>
          <ProductImage src={photo} alt={title} />
        </ImageDiv>
        <Info>
          <Title>{title}</Title>
          <Price>{`$ ${price.toFixed(2)}`}</Price>
          <QuantityDiv>
            <QuantityMessage>Cantidad:</QuantityMessage>
            <Quantity
              type="number"
              value={quantity}
              min={1}
              max={stock}
              onChange={(e) => {
                handleQuantityChange(e.target.value);
              }}
            />
          </QuantityDiv>
        </Info>
      </Card>
        
    );
  };
  
  export default ShoppingCard;