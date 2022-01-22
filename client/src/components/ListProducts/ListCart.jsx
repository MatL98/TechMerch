import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import "./List.css";


const ListCart = ({ data }) => {
	const prod = data;

  return (
    <div className="containerProduct">
      <img className="imgProducts" src={prod.photo} alt="productImg" />
      <div className="containerProductInfo">
        <h3>{prod.name}</h3>
        <p>{prod.description}</p>
        <p>Codigo de producto: {prod.code}</p>
        <p>Precio: ${prod.price}</p>
        <p>Stock: {prod.stock}</p>
        <p>Cantidad: {prod.quantity}</p>
      </div>
    </div>
  );
};
export default ListCart;
