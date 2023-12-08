import styled from "styled-components";
import ShoppingCard from "../../Components/ShoppingCard";
import { useState, useEffect } from "react";

const Div = styled.div`
    margin-bottom: 20%;
`

const ProductsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    margin-top: 20px;

    @media (min-width: 931px)
    {
        padding: 0 25%;
    }
`

const ShoppingCart = () => {


    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const updateCartItems = (newItems) => {
        setCartItems(newItems);
        localStorage.setItem('cartItems', JSON.stringify(newItems));
    };  

    console.log("productos en el carrito: ",cartItems)
    

    useEffect(() => {
        document.title = "Geekstore | Carrito";
    }, [])

    return (
        <Div>
            <ProductsDiv>
            {cartItems.map((cartItem, index) => (
          <ShoppingCard
            key={index}
            data={cartItem.product}
            quantity={cartItem.quantity}
            stock={cartItem.product.stock}
            updateCartItems={updateCartItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}

            </ProductsDiv>
        </Div>
    )
}

export default ShoppingCart;