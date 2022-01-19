import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const logged = window.localStorage.getItem("loggedUserWithMail");
    if (logged) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
        {loggedIn ? <Route exact path="/home" element={<Home />} /> : <Route path="/" element={<Navigate to={"/login"}/>}/>}
        {/* <Route exact path="/form" element={<Form />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
