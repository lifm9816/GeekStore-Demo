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
import { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid"
import ProductRegister from './Pages/ProductRegister/ProductRegister';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import { CartProvider } from './Contexts/CartContext';
import { SessionProvider } from './Contexts/SessionContext';

function App() {

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

  const [products, updateProducts] = useState([
    {
      id: uuid(),
      brand: "PlayStation",
      photo: sm2,
      title: "Spider-Man 2",
      description: "Juego para PS5",
      price: 1400,
      stock: 15
    },
    {
      id: uuid(),
      brand: "Xbox",
      photo: gow4,
      title: "Gears of War 4",
      description: "Juego para Xbox ONE/Series X",
      price: 700,
      stock: 15
    },
    {
      id: uuid(),
      brand: "Nintendo",
      photo: mario,
      title: "Super Mario Bros. Wonder",
      description: "Juego para Nintendo Switch",
      price: 1050,
      stock: 15
    }
  ]);

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

  return (
    <Router>
      <SessionProvider>
        <CartProvider>
          <Header />
            <Routes>
              <Route path = "/" element = {<Home 
                products={products.map((product) => ({
                  id: product.id,
                  title: product.title,
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
                  photo: product.photo,
                  description: product.description,
                  price: product.price,
                  brand: product.brand,
                  stock: product.stock
                }))}
                marcas={marcas}
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
          <MobileNav/>
        </CartProvider>
      </SessionProvider>          
    </Router>
  );
}

export default App;
