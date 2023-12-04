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
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/Signing';
import { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid"
import ProductRegister from './Pages/ProductRegister/ProductRegister';

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
      price: 1400
    },
    {
      id: uuid(),
      brand: "Xbox",
      photo: gow4,
      title: "Gears of War 4",
      description: "Juego para Xbox ONE/Series X",
      price: 700
    },
    {
      id: uuid(),
      brand: "Nintendo",
      photo: mario,
      title: "Super Mario Bros. Wonder",
      description: "Juego para Nintendo Switch",
      price: 1050
    }
  ]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if(storedProducts) {
      updateProducts(JSON.parse(storedProducts));
    }
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home 
          products={products.map((product) => ({
            title: product.title,
            photo: product.photo,
            description: product.description,
            price: product.price,
            brand: product.brand
          }))}
          marcas={marcas} />} 
        />
        <Route path = "/search" element = {<Search 
          products = {products.map((product) => ({
            title: product.title,
            photo: product.photo,
            description: product.description,
            price: product.price,
            brand: product.brand
          }))}
          marcas={marcas}
        />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signin" element = {<SignIn />} />
        <Route path = "/theme" element = {<ProductRegister brands = {marcas.map((marca) => marca.brand)} 
         products = {products} updateProducts = {updateProducts} />}/>
      </Routes>
      <MobileNav />
    </Router>
  );
}

export default App;
