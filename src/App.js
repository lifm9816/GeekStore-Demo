import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MobileNav from './Components/Mobile-Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {

  return (
    <div>
      <Router>
        <Header />
        
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/login" element = {<Login />} />
        </Routes>
        <MobileNav />
      </Router>
    </div>
  );
}

export default App;
