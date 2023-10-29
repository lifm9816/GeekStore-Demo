import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MobileNav from './Components/Mobile-Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/Signing';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signin" element = {<SignIn />} />
      </Routes>
      <MobileNav />
    </Router>
  );
}

export default App;
