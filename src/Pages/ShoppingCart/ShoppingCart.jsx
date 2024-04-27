import ShoppingCard from "../../Components/ShoppingCard";
import { Div, ProductsDiv } from "./Styles";
import { useState, useEffect } from "react";
import { useCart } from "../../Contexts/CartContext";

const ShoppingCart = () => {

    const { cartItems, setCartItems } = useCart();

    console.log("productos en el carrito: ",cartItems);
    

    useEffect(() => {
        document.title = "GeekStore | Carrito";
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
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            ))}

            </ProductsDiv>
        </Div>
    )
}

export default ShoppingCart;