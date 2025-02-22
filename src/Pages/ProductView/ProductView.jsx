import React from "react";
import { useParams } from "react-router-dom";
import { ImagesContainer, ProductContainer, ProductImage, Title } from "./Styles";

const ProductView = ( { products } ) => {

    const { id } = useParams();
    console.log(id);
    
    //const title = "Spider-Man 2"

    const product = products.find( ( p )  => p.id === id);
    //console.log(product)
    console.log("Producto: ",product)


    return(
        <ProductContainer>
            <Title>{product.brand + " " + product.title}</Title>
            <ImagesContainer>
                <ProductImage src = { product.photo}/>
            </ImagesContainer>
            
        </ProductContainer>
    )   

}

export default ProductView;