import MyCarousel from "../../Components/Carousel";
import "./Home.css";
import { useEffect } from "react";
import Card from "../../Components/Card";
import { useCart } from "../../Contexts/CartContext";
import { Brand, ProductDiv } from "./Styles";

const Home = (props) => {

    const { cartItems, addToCart } = useCart();

    useEffect(() => {
        document.title = "GeekStore | Inicio";

    }, []);

    const { products, marcas } = props;

    console.log("elemento agregado al carrito",cartItems)

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