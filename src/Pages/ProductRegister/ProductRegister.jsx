import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { btnSignIn, colorPrimario } from "../../Components/UI/Variables";
import { Formulario, Btn, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";
import OptionList from "../../Components/OptionList";

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
    margin: 15px 25%;
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

const ProductRegister = (props) =>
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

    const [marca, updateBrand] = useState("");
    const [errorBrand, setErrorBrand] = useState({
        brand: {
            error: false,
            message: ""
        }
    });

    const [title, setTitle] = useState("");
    const [errorTitle, setErrorTitle] = useState({
        title: {
            error: false,
            message: ""
        }
    });

    const [description, setDescription] = useState("");
    const [errorDescription, setErrorDescription] = useState({
        description: {
            error: false,
            message: ""
        }
    });

    const [price, setPrice] = useState("");
    const [errorPrice, setErrorPrice] = useState({
        price: {
            error: false,
            message: ""
        }
    });
    const formatPrice = (event) => {
        const input = event.target;
        let value = input.value;
      
        // Eliminar caracteres no numéricos
        value = value.replace(/\D/g, '');
      
        // Si el valor es cero, establecerlo como un valor vacío
        if (value === '0') {
          value = '';
        }
      
        // Dar formato al valor como precio
        let formattedValue = '';
        if (value !== '') {
          const cents = value.padStart(3, '0').slice(-2);
          const dollars = value.padStart(3, '0').slice(0, -2).replace(/^0+(?=\d)/, ''); // Quita los ceros iniciales
          formattedValue = `$ ${dollars}.${cents}`;
        } else {
          formattedValue = '$ 0.00';
        }
      
        // Actualizar el valor en el campo de texto
        input.value = formattedValue;
      
        // Actualizar el estado de 'price' si es un componente funcional
        setPrice(formattedValue); // Asegúrate de llamar a setPrice con el nuevo valor formateado
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
                    <OptionList 
                        id = "marca"
                        placeholder = "Selecciona la marca"
                        required
                        value = {marca}
                        updateValue = {updateBrand}
                        brands = {props.brands}
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
                        type = "text"
                        defaultValue="$ 0.00"
                        onChange={ (e) => {
                            formatPrice(e);
                        }}
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