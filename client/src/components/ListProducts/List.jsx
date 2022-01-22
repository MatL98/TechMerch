import React, { useContext, useState } from "react";
import axios from "axios";
import "./List.css"
import { CartContext } from "../../Context/CartContext";

const List = ({ data }) => {
  const {addToCart} = useContext(CartContext)
  const prod = data;

  const sendToCart = () => {
    const quantity = 1
    const newProduct = {...prod, quantity}
    addToCart(newProduct)
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
          <div><button onClick={sendToCart}>Comprar</button></div>
        </div>
			</div>
	)
};
export default List;
