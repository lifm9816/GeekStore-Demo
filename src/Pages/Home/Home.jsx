import styled from "styled-components";
import MyCarousel from "../../Components/Carousel";
import { Dc } from "../../Components/UI";
import "./Home.css";
import { useEffect } from "react";
import Card from "../../Components/Card";

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
        document.title = "GeekStore | Inicio"
    }, []);



    const { products, marcas } = props;

    console.log(props);

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