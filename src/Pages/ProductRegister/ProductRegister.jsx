import React, { useEffect, useState } from "react";
import OptionList from "../../Components/OptionList";
import { validatePrice, validateProductCover, validateStock, validateTitle } from "../../Validations/Validations";
import { Formulario, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";
import { RegistrarProducto, DivFoto, PortadaProducto, DivBtn, Div, CropContainer, CropPreview, ErrorMessage } from "./Styles";
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom";

const ProductRegister = ({ brands, products, updateProducts, isLoggedIn, userRole, userData}) =>
{
    const navigate = useNavigate();
    console.log(isLoggedIn, userRole);
    

    useEffect(() => {
        document.title = "GeekStore | Registrar Producto";

        if (!isLoggedIn || userRole !== "administrador") {
            // Si el usuario no tiene acceso, redirigir a otra página (por ejemplo, la página de inicio)
            navigate('/'); // Redirigir a la página de inicio
            
 
          }
        }, [isLoggedIn, userRole]);
      


    const [selectedImage, setSelectedImage] = useState(null);
    const [coverError, setCoverError] = useState({
        cover: {
            error: false,
            message: ""
        }
    });
    const [editor, setEditor] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result;
                setSelectedImage(imageUrl);

                //Validar la portada cuando se selecciona una imagen
                const validation = validateProductCover(imageUrl);
                setCoverError(validation);
            };
            reader.readAsDataURL(file);
        }
        
    };

    const handleSubmit = () => {
        // Valida la portada antes de enviar el formulario
        const validation = validateProductCover(selectedImage);
        setCoverError(validation);

        if (!validation.cover.error) {
            const newProduct = {
            id: uuid(),
            brand: marca,
            photo: selectedImage,
            title,
            description,
            price,
            stock
            };
        // Obtener los productos actuales
        const updatedProducts = [...products];
        const productExists = updatedProducts.some(product => product.title === newProduct.title && product.brand === newProduct.brand)

        if(!productExists){
            updatedProducts.push(newProduct);
            updateProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        }
        else{
            {errorTitle.title.error && (
                <ErrorMessage> El producto ya existe </ErrorMessage>
            )}
        }
        // Actualizar el estado de los productos
        //props.updateProducts(updatedProducts);

        // Mantener la imagen seleccionada en el estado local
        setSelectedImage(selectedImage);

        // Almacenar los productos actualizados en el localStorage
        //localStorage.setItem('products', JSON.stringify(updatedProducts));
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

    const [stock, setStock] = useState();
    const [errorStock, setErrorStock] = useState({
        stock: {
            error: false,
            message: ""
        }
    });

    const [price, setPrice] = useState(0.00);
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
        const floatValue = parseFloat(value) / 100;
        setPrice(floatValue); // Asegúrate de llamar a setPrice con el nuevo valor formateado
      };
      
    return(
        <Contenedor>
            <Formulario>
                <DivFoto>
                    <Etiqueta htmlFor = "portada" >Portada del producto</Etiqueta>
                    <PortadaProducto>
                        +
                        <input 
                            type = "file" 
                            accept="image/*" 
                            onChange = {handleImageChange}
                            required 
                        />
                        { selectedImage ? (
                            <CropContainer>
                                <CropPreview src={selectedImage} alt = "Portada del producto"/>
                            </CropContainer>
                        ) : null}
                    </PortadaProducto>
                    {coverError.cover.error && ( 
                        <ErrorMessage> {coverError.cover.message} </ErrorMessage>
                    )}
                </DivFoto>

                <Div>
                    <Etiqueta htmlFor="brand" >Marca: </Etiqueta>
                    <OptionList 
                        id = "marca"
                        placeholder = "Selecciona la marca"
                        required
                        value = {marca}
                        updateValue = {updateBrand}
                        brands = {brands}
                    />
                    
                </Div>

                <Div>
                    <Etiqueta htmlFor="title" >Título: </Etiqueta>
                    <CampoTexto 
                        id = "title"
                        type = "text"
                        placeholder="Ingrese el título del producto"
                        error = {errorTitle && errorTitle.title && errorTitle.title.error}
                        value = {title}
                        onChange = {(e) => {
                            setTitle(e.target.value);
                        }}
                        onBlur = {(e) => {
                            setErrorTitle(validateTitle(e.target.value))
                        }}
                        required
                    />
                    {errorTitle.title.error && (
                        <ErrorMessage> {errorTitle.title.message} </ErrorMessage>
                    )}
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
                    <Etiqueta htmlFor="stock">Stock: </Etiqueta>
                    <CampoTexto 
                        id = "stock"
                        type = "number"
                        min="0"
                        placeholder="Ingrese la cantidad de stock del producto"
                        error = {errorStock && errorStock.stock && errorStock.stock.error}
                        value = {stock}
                        onChange = { (e) => {
                            setStock(e.target.value);
                        }}
                        onBlur = { (e) => {
                            setErrorStock(validateStock(e.target.value));
                        }}
                        required
                    />
                    {errorStock.stock.error && (
                        <ErrorMessage> {errorStock.stock.message} </ErrorMessage>
                    )}
                </Div>
                
                <Div>
                    <Etiqueta htmlFor="price" >Precio: </Etiqueta>
                    <CampoTexto 
                        id = "price"
                        type = "text"
                        error = {errorPrice && errorPrice.price && errorPrice.price.error}
                        value={`$ ${price.toFixed(2)}`}//Se formatea price como string con para que incluya el signo de $ y los 0's indicados
                        onChange={ (e) => {
                            formatPrice(e);
                        }}
                        onBlur = { (e) => {
                            setErrorPrice(validatePrice(formatPrice(e)));
                        }}
                        required
                    />
                    {errorPrice.price.error && (
                        <ErrorMessage> {errorPrice.price.message} </ErrorMessage>
                    )}
                </Div>

                <DivBtn>
                    <RegistrarProducto onClick={handleSubmit} >Registrar Producto</RegistrarProducto>
                </DivBtn>
            </Formulario>
        </Contenedor>
    )
}

export default ProductRegister;