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

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState(null); // Nuevo estado para almacenar al usuario activo
  const [userData, setUserData] = useState(null); // Define el estado de los datos del usuario
  
  const handleUserLogin = (user) => {
    setActiveUser(user); // Establecer el usuario que inició sesión como activo
    setIsLoggedIn(true); // Establecer el estado de inicio de sesión como verdadero
    setUserData(user); // Actualizar el estado de userData con los datos del usuario
    localStorage.setItem('isLoggedIn', true); // Guardar el estado de inicio de sesión en el localStorage
    localStorage.setItem('userData', JSON.stringify(user)); // Guardar los datos del usuario en el localStorage
    // Otras acciones después del inicio de sesión si las hay
  };

  useEffect(() => {
    // Verificar si hay datos de usuario almacenados en localStorage al cargar la página
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);


  const handleSetUserData = (userData) => {
    setUserData(userData); // Actualiza el estado de los datos del usuario
    // Guardar en localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
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
    const storedProducts = localStorage.getItem('products');
    if(storedProducts) {
      updateProducts(JSON.parse(storedProducts));
    }
  }, [updateProducts]);

  useEffect(() => {
    // Verificar el estado de inicio de sesión al cargar la aplicación
    const loggedIn = localStorage.getItem('isLoggedIn');
    const userData = localStorage.getItem('userData');
    const activeUser = localStorage.getItem("userData");
    if (loggedIn && userData && activeUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(userData));
      setActiveUser({ role: JSON.parse(userData).role });
    }
  }, []);

  useEffect(() => {
    // Verificar si hay datos de usuarios almacenados en localStorage al cargar la página
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  
    // Verificar si hay datos de productos almacenados en localStorage al cargar la página
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      updateProducts(parsedProducts);
    }
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setActiveUser(null)
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
  };

  //const [cartItems, setCartItems] = useState([]);

  const [addedProduct, setAddedProduct] = useState(null); // Estado para el producto recién agregado

  /*/ Modifica la función addToCart para establecer el producto recién agregado
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Agregar un nuevo producto al carrito
    setAddedProduct(product); // Establecer el producto recién agregado
  };*/

  return (
    <Router>
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
            isLoggedIn={isLoggedIn} 
            userData={userData}
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo 
            />} 
          />

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
            isLoggedIn={isLoggedIn} 
            userData={userData}
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
          />} />

          <Route path = "/about" element = {<About isLoggedIn={isLoggedIn} 
            userData={userData}
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
          />}/>

          <Route path = "/login" element = {<Login 
            users={users}
            handleUserLogin={handleUserLogin}
            setIsLoggedIn={setIsLoggedIn} // Pasar setIsLoggedIn al componente Login
          />} />

          <Route path = "/signin" element = {<SignIn 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn} 
            users = {users} 
            updateUsers = {updateUsers}
            handleUserLogin = {handleUserLogin} // Pasar la función handleUserLogin a SignIn
          />} />

          <Route path = "/account" element = {<Account 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            users={users}
            updateUsers={updateUsers}
            activeUser={activeUser} // Pasar el usuario activo a Account
            userData={userData} // Pasar el estado userData como props.userData a Account
            setData={handleSetUserData} // Pasa la función para establecer los datos del usuario
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
            logOut={handleLogout}
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
            marcas={marcas}
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
          />} />

          <Route path="/productRegister" element={<ProductRegister
            brands={marcas.map((marca) => marca.brand)}
            products={products}
            updateProducts={(newProduct) => {
              const updatedProducts = [...products, newProduct];
              updateProducts(updatedProducts);
              localStorage.setItem('products', JSON.stringify(updatedProducts));
            }}
            isLoggedIn={isLoggedIn} // Pasar el estado de la sesión
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
            userData={userData}
          />} />
        </Routes>
        <MobileNav  isLoggedIn={isLoggedIn}
          userRole={activeUser ? activeUser.role : null} 
        />
      </CartProvider>
    </Router>
  );
}

export default App;
