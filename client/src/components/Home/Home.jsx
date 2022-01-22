import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import List from "../ListProducts/List";

const Home = () => {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

  const getApi = () => {
    axios.get("http://localhost:3001/api/products").then(function (response) {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  const logOut = () => {
    let logged = window.localStorage.getItem("loggedUserWithMail");
    if (logged) {
    window.localStorage.removeItem("loggedUserWithMail")
    navigate("/login")
  }
}

  return (
    <div>
      <div className="navBarHome">
        <h1>HOME</h1>
        <NavBar/>
        <button onClick={logOut}>Log-out</button>
      </div>
      <div className="containerListProducts">
        {products ?
          products.map((prd, idx) =>{
          return <List data={prd} key={idx}/>
        }): "cargando..."}
      </div>
    </div>
      )
}
export default Home;