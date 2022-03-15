import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Navbar/NavBar";
import List from "../ListProducts/List";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getApi = () => {
    axios.get("http://localhost:3001/api/products").then(function (response) {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getApi();
  }, []);


  return (
    <>
    <NavBar/>
      <div className="containerListProducts">
        {products ?
          products.map((prd, idx) =>{
          return <List data={prd} key={idx}/>
        }): "cargando..."}
      </div>
    </>
      )
}
export default Home;