import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import { CartProvider } from "./Context/CartContext";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const logged = window.localStorage.getItem("loggedUserWithMail");
    if (logged) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
        {loggedIn ? <Route exact path="/home" element={<Home />} /> : <Route path="/" element={<Navigate to={"/login"}/>}/>}
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
