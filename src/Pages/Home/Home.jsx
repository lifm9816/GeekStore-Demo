import styled from "styled-components";
import MyCarousel from "../../Components/Carousel";
import { Dc } from "../../Components/UI";
import "./Home.css";
import { useEffect } from "react";
import Card from "../../Components/Card";
import { useState } from "react";


const Brand = styled.section`
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    margin-bottom: 10%;
`

const ProductDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Home = (props) => {

    useEffect(() => {
        document.title = "GeekStore | Inicio";

        // Recuperar datos del carrito del localStorage al cargar el componente
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
        const parsedCartItems = JSON.parse(storedCartItems);
        setCartItems(parsedCartItems);
    }
    }, []);


    

    const { products, marcas, handleShopCart } = props;



    const [cartItems, setCartItems] = useState([]); // Estado para almacenar los elementos del carrito
    const [addedProduct, setAddedProduct] = useState(null); // Estado para el producto recién agregado

    console.log("elemento agregado al carrito",cartItems)

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const updateCartItems = (updatedCartItems) => {
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    
    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.product.id === product.id);
      
        if (existingItem) {
          const updatedCartItems = cartItems.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          setCartItems(updatedCartItems);
          // Llamar a la función handleShopCart para actualizar el carrito y el localStorage
          handleShopCart(updatedCartItems);
        } else {
          const updatedCartItems = [...cartItems, { product: product, quantity: 1 }];
          setCartItems(updatedCartItems);
          // Llamar a la función handleShopCart para actualizar el carrito y el localStorage
          handleShopCart(updatedCartItems);
        }
      };
    

    return(
        <div>
            <div className = "carousel-container">
                <MyCarousel />
            </div>
            {
                products.length > 0 && 
                <Brand>
                {
                    <ProductDiv>
                        {
                            products.map((product, index) => <Card 
                                data = {product}
                                key = {index}
                                marcas = {marcas}
                                addToCart={addToCart}
                            />)
                        }
                    </ProductDiv>
                }
                </Brand>
            }
        </div>
    )
}

export default Home;