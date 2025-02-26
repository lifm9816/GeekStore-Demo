import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MobileNav from './Components/Mobile-Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import fondo_ps from "./assets/Images/fondo_ps.png";
import fondo_x from "./assets/Images/fondo_x.png";
import fondo_nintendo from "./assets/Images/fondo_nintendo.png";
import sm2 from "./assets/Images/spiderman2_fisico.jpg";
import gow4 from "./assets/Images/gow4_fisico.jpg";
import mario from "./assets/Images/mariowonder_fisico.jpg";
import Luis from "./assets/Images/Luis.jpg"
import Amy from "./assets/Images/Amy.jpg"
import portada from "./assets/Images/portada_miles.jpeg";
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/Signing';
import Account from './Pages/Account/Account';
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid"
import ProductRegister from './Pages/ProductRegister/ProductRegister';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import { CartProvider } from './Contexts/CartContext';
import { SessionProvider } from './Contexts/SessionContext';
import { NavContainer } from './Components/UI/Elements';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from './Components/UI/Themes';
import ThemeButton from './Components/ThemeButton/ThemeButton';
import ProductView from './Pages/ProductView/ProductView';

export const ThemeContext = React.createContext(null);

function App() {

  const getStoredData = (key, defaultValue) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  };

  const [marcas, actualizarMarca] = useState ([
    {
      id: uuid(),
      brand: "PlayStation",
      background: fondo_ps,
    },
    {
      id: uuid(),
      brand: "Xbox",
      background: fondo_x,
    },
    {
      id: uuid(),
      brand: "Nintendo",
      background: fondo_nintendo,
    }
  ]);

  const [products, updateProducts] = useState(() => getStoredData("products", [
    { id: uuid(), brand: "PlayStation", photo: sm2, title: "Spider-Man 2", subtitle: "Ser mejores juntos", description: "Los Spider-Men Peter Parker y Miles Morales regresan para una nueva y emocionante aventura de la aclamada franquicia Marvel's Spider-Man para PS5.Balancéate, salta y utiliza las nuevas alas de telaraña para recorrer toda la ciudad de Nueva York de Marvel. También podrás cambiar rápidamente entre Peter Parker y Miles Morales para vivir diferentes historias y canalizar poderes nuevos y épicos, mientras el emblemático villano Venom amenaza con destruir sus vidas, la ciudad y a todos sus seres queridos.", price: 1400, stock: 15 },
    { id: uuid(), brand: "Xbox", photo: gow4, title: "Gears of War 4", subtitle: "Unidos por la sangre", description: "Juego para Xbox ONE/Series X", price: 700, stock: 15 },
    { id: uuid(), brand: "Nintendo", photo: mario, title: "Super Mario Bros. Wonder", subtitle: "Porque un Mario, nunca es suficiente", description: "Juego para Nintendo Switch", price: 1050, stock: 15 }
  ]));

  const [users, updateUsers] = useState([
    {
      id: uuid(),
      photo: Luis,
      name: "Luis",
      lastName: "Martínez",
      email: "lifm1698@outlook.com",
      phone: "222 526 5031",
      password: "123456789",
      role: "cliente",
      font: portada
    },
    {
      id: uuid(),
      photo: Amy,
      name: "Amy",
      lastName: "Martínez",
      email: "lifm98@outlook.com",
      phone: "222 526 5031",
      password: "123456789",
      role: "administrador",
      font: portada
    }
  ])

  useEffect(() => {

    // Verificar si hay datos de productos almacenados en localStorage al cargar la página
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      updateProducts(parsedProducts);
    }
  
  }, []);

  const [ theme, setTheme ] = useState(localStorage.getItem("theme") || "light");
  const themeStyle = theme === "light" ? Light : Dark;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme); // Establece el tema dese el LocalStorage
  }, []);

  useEffect(() => {
    // Cambia el color de fondo del body cuando cambie el tema
    if (theme === "light") {
      document.body.style.backgroundColor = themeStyle.body.backgroundColor || "#19222D";
    } else {
      document.body.style.backgroundColor = themeStyle.body.backgroundColor || "#0E141A";
    }

    // Cambiar el color del meta tag theme-color para la Dynamic Island
    const headerColor = theme === "light" ? "#19222D" : "#0E141A";

    // Si tienes un color específico del header en tus temas, úsalo en lugar del predeterminado
    // Intenta acceder de forma segura a las propiedades

    if (themeStyle && themeStyle.colors && themeStyle.colors.header) {
      // Ajusta esta ruta según la estructura real de tu objeto themeStyle
      headerColor = themeStyle.colors.header;
    }

    // Selecciona el meta tag theme-color y actualiza su contenido
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", headerColor);
    }
  }, [theme, themeStyle]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <Router>
      <SessionProvider>
        <CartProvider>
          <ThemeContext.Provider value = { { setTheme, theme } }>
            <ThemeProvider theme = { themeStyle }>
              <NavContainer>
                <Header />
                  <Routes>
                    <Route path = "/" element = {<Home 
                      products = {products.map((product) => ({
                        id: product.id,
                        title: product.title,
                        subtitle: product.subtitle,
                        photo: product.photo,
                        description: product.description,
                        price: product.price,
                        brand: product.brand,
                        stock: product.stock
                      }))}
                      marcas={marcas}
                    />} />

                    <Route path = "/search" element = {<Search 
                      products = {products.map((product) => ({
                        id: product.id,
                        title: product.title,
                        subtitle: product.subtitle,
                        photo: product.photo,
                        description: product.description,
                        price: product.price,
                        brand: product.brand,
                        stock: product.stock
                      }))}
                      marcas={marcas}
                    />} />

                    <Route path = "/product/:id" element = { 
                      <ProductView 
                        products = { products }  
                    />} />

                    <Route path = "/about" element = {<About
                    />} />

                    <Route path = "/login" element = {<Login 
                      users={users}
                    />} />

                    <Route path = "/signin" element = {<SignIn  
                      users = {users} 
                      updateUsers = {updateUsers}
                    />} />

                    <Route path = "/account" element = {<Account 
                      users={users}
                      updateUsers={updateUsers}                
                    />} />

                    <Route path="/shopping" element={<ShoppingCart 
                      products = {products.map((product) => ({
                        id: product.id,
                        title: product.title,
                        subtitle: product.subtitle,
                        photo: product.photo,
                        description: product.description,
                        price: product.price,
                        brand: product.brand,
                        stock: product.stock
                      }))}                
                    />} />

                    <Route path="/productRegister" element={<ProductRegister
                      brands={marcas.map((marca) => marca.brand)}
                      products={products}
                      updateProducts={(newProduct) => {
                        const updatedProducts = [...products, newProduct];
                        updateProducts(updatedProducts);
                        localStorage.setItem('products', JSON.stringify(updatedProducts));
                      }}
                    />} />
                  </Routes>
                  <ThemeButton/>
                <MobileNav/>
              </NavContainer>
            </ThemeProvider>
          </ThemeContext.Provider>
        </CartProvider>
      </SessionProvider>          
    </Router>
  );
}

export default App;
