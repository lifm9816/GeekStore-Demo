import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { btnSignIn, colorPrimario } from "../../Components/UI/Variables";
import { Formulario, Btn, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";

const RegistrarProducto = styled(Btn)`
    background-color: ${btnSignIn};
    font-size: 25px;
    padding: 20px;
    transition: all .5s ease-in-out;
    border-radius: 20px;
    width: auto;
    height: auto;
    margin-bottom: 100px;
    display: block;
    &:hover
    {
        background-color: #e08044;
    }
`

const DivFoto = styled.div`
    @media (min-width: 495px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        width:-webkit-fill-available;
    }
`

const PortadaProducto = styled.label`
    border: 10px dashed #737373;
    display: inline-block;
    height: 200px;
    width: 170px;
    border-radius: 20px;
    background: none;
    cursor: pointer;
    margin: 15px 40%;
    overflow: hidden;
    text-align: center;
    color: #737373;
    font-size: 115px;
    font-weight: bold;
    input{
        display: none;
    }
`

const DivBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: -webkit-fill-available;

    @media(min-width: 930px)
    {
        margin-top: 30px;
    }
`

const Div = styled.div`
    box-sizing: border-box;
    width: auto;
    display:block; 
    


    @media (min-width: 930px) 
    {
        width: 50%;
        padding: 0 80px;
    }
`

const CropContainer = styled.div`
  position: relative;
  width: 175px;
  height: 175px;
  transform: translate(-5.8%, -5.8%);
`;

const CropPreview = styled.img`
  position: relative;
  left: 5%;
  top: -82.5%;
  width: 170px;
  height: 200px;
  border-radius: 20px;
`;

const ProductRegister = () =>
{

    useEffect(() => {
        document.title = "GeekStore | Registrar Producto"
    })

    const [selectedImage, setSelectedImage] = useState(null);
    const [editor, setEditor] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleSave = () => {
        if (editor) {
            const canvas = editor.getImage();
            const dataURL = canvas.toDataURL();
            console.log(dataURL);
        }
    };

    return(
        <Contenedor>
            <Formulario>
                <DivFoto>
                    <Etiqueta htmlFor = "portada" >Portada del producto</Etiqueta>
                    <PortadaProducto>
                        +
                        <input type = "file" accept="image/*" onChange = {handleImageChange} />
                        { selectedImage ? (
                            <CropContainer>
                                <CropPreview src={selectedImage} alt = "Portada del producto"/>
                            </CropContainer>
                        ) : null}
                    </PortadaProducto>
                </DivFoto>

                <Div>
                    <Etiqueta htmlFor="brand" >Marca: </Etiqueta>
                    <CampoTexto 
                        id = "brand"
                        type = "text"

                    />
                </Div>

                <Div>
                    <Etiqueta htmlFor="title" >Título: </Etiqueta>
                    <CampoTexto 
                        id = "title"
                        type = "text"
                        placeholder="Ingrese el título del producto"
                    />
                </Div>

                <Div>
                    <Etiqueta htmlFor="description">Descripción: </Etiqueta>
                    <CampoTexto 
                        id = "description"
                        type = "text"
                        placeholder="Ingrese la descripción del producto"
                    />
                </Div>
                

                <Div>
                    <Etiqueta htmlFor="price" >Precio: </Etiqueta>
                    <CampoTexto 
                        id = "price"
                        type = "number"
                        placeholder = "Ingrese el precio del producto"
                    />
                </Div>

                <DivBtn>
                    <RegistrarProducto>Registrar Producto</RegistrarProducto>
                </DivBtn>
            </Formulario>
        </Contenedor>
    )
}

export default ProductRegister;