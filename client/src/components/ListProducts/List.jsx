import React, { useState } from "react";
import axios from "axios";

const List = ({ data }) => {
  const prod = data;
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
      <div>
				<h3>{prod.name}</h3>
				<p>{prod.description}</p>
				<p>{prod.code}</p>
				<img className="imgProducts" src={prod.photo} alt="productImg" />
				<p>{prod.price}</p>
				<p>{prod.stock}</p>
        <div><button onClick={addToCart}>Comprar</button></div>
			</div>
	)
};
export default List;
