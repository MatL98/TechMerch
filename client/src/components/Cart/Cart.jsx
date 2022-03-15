import React, { useContext, useEffect, useState } from "react";
import ListCart from "../ListProducts/ListCart";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import NavBar from "../Navbar/NavBar"
import "./cartStyle.css"


const Cart = () => {
  const {cart, itemsInCart, totalCart, totalQuantity} = useContext(CartContext)

  console.log(cart);

const sendToApi = () => {
  let mailUser = window.localStorage.getItem("loggedUserWithMail");
  const data = {cart, mail: mailUser}
	axios
		.post(`http://localhost:3001/api/cart`, data)
		.then(function (response) {
      let datos = response
      console.log(datos);
		})
		.catch(function (error) {
			console.log(error);
		});
};

  return itemsInCart() ? (
    <div>
      <NavBar/>
      <div className="cartNoItem">
        <h5>No hay compras en el carrito..</h5>{" "}
        <Link to="/home">
          <button className="btnBack">Volver al home</button>
        </Link>
      </div>
    </div>
  ) : (

    <div className="cartStyle">
      <NavBar/>
      { cart.map((item, idx) => (
        <ListCart data={item} key={idx}/>
      )) } 
      <div>
        <p>Resumen de tu compra</p>
        <p>Precio final: {totalCart()}</p>
        <p>Cantidad de items: {totalQuantity()}</p>
        <button onClick={sendToApi}>Finaliza tu compra</button>
      </div>
    </div>
  );
};
export default Cart;
