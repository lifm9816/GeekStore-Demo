import styled from "styled-components";
import ShoppingCard from "../../Components/ShoppingCard";
import { useEffect } from "react";

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

const ShoppingCart = (props) => {

    const {products, marcas} = props

    useEffect(() => {
        document.title = "Geekstore | Carrito";
    }, [products])

    return (
        <Div>
            <ProductsDiv>
            {
                products.map((product, index) => (<ShoppingCard 
                    key = {index}
                    data={product}
                    marcas={marcas}
                />))
            }
            </ProductsDiv>
        </Div>
    )
}

export default ShoppingCart;