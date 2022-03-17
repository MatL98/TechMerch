import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import List from "../ListProducts/List";
import { axiosInstance } from "../../config";

import {initAxiosHeader} from "../../helper/header"

initAxiosHeader()

const Home = () => {
  const [products, setProducts] = useState([]);

  const getApi = () => {
    axiosInstance.get("/api/products").then(function (response) {
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