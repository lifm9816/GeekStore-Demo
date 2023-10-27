import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MobileNav from './Components/Mobile-Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyCarousel from './Components/Carousel';

function App() {

  return (
    <div>
      
        <Header />
        <MyCarousel />
        
        <MobileNav />
    </div>
  );
}

export default App;
