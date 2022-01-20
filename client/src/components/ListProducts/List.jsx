import React, { useState } from "react";
import axios from "axios";
import "./List.css"

const List = ({ data }) => {
  const prod = data;
  console.log(data);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    axios
      .post(`http://localhost:3001/api/carrito`, prod)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
      <div className="containerProduct">
				<img className="imgProducts" src={prod.photo} alt="productImg" />
        <div className="containerProductInfo"> 
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <p>Codigo de producto: {prod.code}</p>
          <p>Precio: ${prod.price}</p>
          <p>Stock: {prod.stock}</p>
          <div><button onClick={addToCart}>Comprar</button></div>
        </div>
			</div>
	)
};
export default List;
